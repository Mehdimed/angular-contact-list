import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Output() onEventDelete = new EventEmitter()
  @Output() onChange = new EventEmitter()
  @Input() contact: Contact = new Contact();

  newName = new FormControl(this.contact.name)
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(contact: Contact){
    this.onEventDelete.emit(contact)

    this.contact = new Contact()
  }

  onEventChange(event: any, contact: Contact){
    this.onChange.emit([event, contact])
  }

}
