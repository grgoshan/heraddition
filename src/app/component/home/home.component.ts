import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';
import {LocalstoreService} from '../../service/localStorage/localstore.service';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modal: NgbModal, private storage: LocalstoreService) {

  }

open() {
    const modalRef = this.modal.open(ModalComponent);
 //  modalRef.componentInstance.ram = 'Worldgg';
}
ngOnInit() {
  if (this.storage.getUsername() === '0' || this.storage.getUsername() === null || this.storage.getUsername() === '') {
    ( async () => {
      await this.delay(15000);
      this.open();
    } )();
  } else {
    // this.username = this.storage.getUsername();
  }
}

  async delay(ms: number) {
return new Promise<void>(resolve => {
  setTimeout(resolve, ms);
});
  }
}
