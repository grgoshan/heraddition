import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user: User = {
  firstname: '',
  lastname: '',
  phone: null,
  email: '',
  password: ''
};
response: any;

  constructor(private api: AuthService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
  }
onSubmit({value, valid}: {value: User, valid: boolean}) {
if (valid) {
  this.api.userSignUp(value).subscribe(res => {
     this.response = res;
    this.toast.success('Registration completed', 'Success', {
      positionClass: 'toast-top-center'
    } );
  }, (err) => {
    console.log(err);
  });
}
}
}
