import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  @Output() onEventSubmit = new EventEmitter();

  addContactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    pseudo: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email])
  })

  get form(){
      return this.addContactForm.controls;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onEventSubmit.emit(this.addContactForm.value)
    this.addContactForm.reset()
  }

}
