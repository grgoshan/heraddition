import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';

import {Router} from '@angular/router';
import { LoginCredit} from '../../model/loginCredit';
import {ToastrService} from 'ngx-toastr';
import {LocalstoreService} from '../../service/localStorage/localstore.service';

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

  constructor( private router: Router, private api: AuthService, private toast: ToastrService, private storage: LocalstoreService) { }

  ngOnInit( ) {
  }
  onsubmit({value, valid}: {value: LoginCredit, valid: boolean}) {
if (valid) {
  console.log(this.loginCredit.email);
  this.api.userLogin(value).subscribe(res => {
    const val = res.user;
    this.storage.setUsername(val);
    this.storage.setToken(res.token);
    this.storage.providetoSetUsername(val);
    this.toast.success(`welcome ${val} `, 'Success', {
      positionClass: 'toast-top-center'
    } );
this.router.navigate(['']);
  }, (err) => {
    console.log(err);
  });
}
}


}
