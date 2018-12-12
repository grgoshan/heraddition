import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';

import {Router} from '@angular/router';
import { LoginCredit} from '../../model/loginCredit';
import {ToastrService} from 'ngx-toastr';
// import {LocalstorageService} from '../../service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: '';
loginCredit: LoginCredit = {
  email: '',
  password: ''
};

  constructor( private router: Router, private api: AuthService, private toast: ToastrService) { }

  ngOnInit( ) {
  }
  onsubmit({value, valid}: {value: LoginCredit, valid: boolean}) {
if (valid) {
  console.log(this.loginCredit.email);
  this.api.userLogin(value).subscribe(res => {
    const val = res.user;
    // this.storage.storeToken(res.token);
    // this.storage.storeName(val);
   // console.log('sssshell......' + val);
    this.toast.success(`welcome ${val} `, 'Success', {
      positionClass: 'toast-top-center'
    } );

  }, (err) => {
    console.log(err);
  });
}
}


}
