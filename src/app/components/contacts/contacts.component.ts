import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Output() onEventClick = new EventEmitter()
  @Input() contacts:Contact[] = []

  constructor() { }

  ngOnInit(): void {
  }

  showContact(contact: Contact){
    this.onEventClick.emit(contact)
  }

}
