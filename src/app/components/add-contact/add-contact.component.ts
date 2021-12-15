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
  },{updateOn:'change'})

  get form(){
      return this.addContactForm.controls;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.addContactForm.valid){
      this.onEventSubmit.emit(this.addContactForm.value);

      // retire le focus sur l'input actif ( au cas ou l'utilisateur valide le formulaire en appuyant sur entrée )
      (document.activeElement as HTMLElement).blur();

      this.addContactForm.reset();
    }else{
      this.addContactForm.markAllAsTouched();
    }
  }

}
