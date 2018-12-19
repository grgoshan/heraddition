import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() name;
  constructor(private activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
  }
loginClick() {
    this.activeModal.close('Close click');
    this.router.navigate(['login']);
}
}
