import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modules/modal/services/modal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ng-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  event: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    desc: new FormControl('')
  })

  id: number;

  constructor(
    private modalSrv: ModalService
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalSrv.destroy();
  }

  addEvent() {
    console.log("valid: ",this.event.valid);
    console.log(this.event.value);
  }

}
