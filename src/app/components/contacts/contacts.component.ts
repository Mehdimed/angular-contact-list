import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Output() onEventClick = new EventEmitter()
  @Output() onChangeOrder = new EventEmitter()
  @Input() contacts:Contact[] = []

  constructor() { }

  ngOnInit(): void {
  }

  showContact(contact: Contact){
    this.onEventClick.emit(contact)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.contacts, event.previousIndex, event.currentIndex);
    this.onChangeOrder.emit(this.contacts)
  }

}
