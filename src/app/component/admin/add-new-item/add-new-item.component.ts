import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from '../../../service/admin/item-service.service';
import {Router} from '@angular/router';
import {Item} from '../../../model/item';

import { FileUploader} from 'ng2-file-upload';
// import { FileUploader } from 'ng2-file-upload';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
const api = '/api/product/file';




@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: api, itemAlias: 'image'});
  myFormData: FormData;
  filename = new Array();
  addItemFormGroup: FormGroup;
  lastFileAt: Date;
  item: Item = {
    name: '',
    price: '',
    description: '',
    tag: ''
  };

  constructor(private itemService: ItemServiceService,
              public router: Router,
              private formBuilder: FormBuilder) {
    this.formvalidate();
  }

  ngOnInit() { }

  formvalidate() {
    this.addItemFormGroup = this.formBuilder.group({
      'category': ['', Validators.required],
      'productname': ['', Validators.compose(
        [Validators.required, Validators.minLength(3)])],
      'price': ['', Validators.required],
      'description': ['', Validators.compose([
        Validators.required, Validators.minLength(5)
      ])],
      'tag': ['', Validators.required],
      'image': [null]
    });
  }

  onSubmit(value) {
    console.log(JSON.stringify(value));
    console.log(value);
  }

  onFormSubmit(value) {
    if (this.addItemFormGroup.valid && this.uploader.queue.length >= 1) {
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log("ImageUpload: uploaded:" + response);

        const data = JSON.parse(response);
        console.log(data.body);
        this.filename.push(data.body);
        console.log(this.uploader.queue.length);
        if ( this.uploader.queue.length === this.filename.length ) {
          console.log(JSON.stringify(value));
          console.log(value);
          value.image = this.filename;
          console.log('image +++ aba yaha post request faldey' );
          for ( const i of this.filename) {
            console.log('yaha print gara' + i);
          }
          this.itemService.addNewItem(value).subscribe(res => {
            console.log('enter ho gayaaa..');
          }, error => {
          });
        }
      };
    }
  }

}
