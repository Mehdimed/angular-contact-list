import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact';
  contacts: Contact[] = [];
  contactToShow: Contact = new Contact();
  

  constructor(private contactService: ContactService){

  }
  

  ngOnInit(){
    this.contacts = this.contactService.contacts
  }

  addContact(event: any){
    this.contacts.push(event)
    this.contactService.contacts = this.contacts;
  }

  deleteContact(event: any){
    const index = this.contacts.indexOf(event);
    if (index >= 0) this.contacts.splice(index, 1);

    this.contactService.contacts = this.contacts;
  }

  showContact(event: any){
    this.contactToShow = event
  }

  changeName(tab: any[]){
    let value = tab[0].target.value
    let contact = tab[1]

    let contactToModify = this.contacts.find(c => c === contact)

    if(contactToModify){
      contactToModify.name = value;
    }
    this.contactService.contacts = this.contacts
  }

  changeOrder(event: any){
    this.contacts = event;
    this.contactService.contacts = this.contacts
  }
}
