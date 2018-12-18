import { Component, OnInit } from '@angular/core';
import {Mail} from '../../model/mail';
import {LoginCredit} from '../../model/loginCredit';
import {MailService} from '../../service/mailservice/mail.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
mail: Mail = {
  name : '',
  email : '',
  message : '',
};
  constructor(private http: MailService, private toast: ToastrService) {
  }
  ngOnInit() {
  }
formSubmit(form: NgForm) {

    if (form.valid) {
console.log(form.value);
this.http.sendMail(form.value).subscribe(res => {
  this.mail = {
    name : '',
    email : '',
    message : '',
  };
form.resetForm(this.mail);
 if (res.status === 200) {
   this.toast.success(`your message is delivered, Thankyou`, 'Success', {
     positionClass: 'toast-top-center'
   } );
 }

});
      this.mail = {
        name : '',
        email : '',
        message : '',
      };
form.reset(this.mail);
    }
}
}
