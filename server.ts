// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import * as cors from 'cors';
import { join } from 'path';
import * as morgan from 'morgan';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 3000;
const DIST_FOLDER = join(process.cwd(), 'dist');
require('./node_src/config/db');
app.use('/uploads', express.static('uploads'));
// routes

const angular = require('./node_src/routes/angular');
const api = require('./node_src/routes/api');
const auth = require('./node_src/routes/auth');
const productRouter = require('./node_src/routes/productRouter');
const homeRouter = require('./node_src/routes/home');
const mailRouter = require('./node_src/routes/mailer')
// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cors());

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));


// TODO: implement data requests securely
/*
app.get('/api/!*', (req, res) => {
  res.status(404).send('data requests are not supported');
});
*/

app.use('/api', api);
app.use('/api/product', productRouter);
app.use('/api/home', homeRouter);
app.use('/api/mail', mailRouter)
// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));


// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
