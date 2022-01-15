import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Contact } from '../update/update.component';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts:Contact[] = [];
  // data:[] = [];

  constructor(
    private contactsService: ContactsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Contact Added!'});
}

  showConfig() {
    this.contactsService.get().subscribe((data: any) => {
      // console.log(data);
      this.contacts = data;
    });
  
  }

  

  onAdd(postData:Contact) {
    // console.log(postData,"Post-Data")
    this.contactsService.post(postData).subscribe(
      (data) => {
        this.showConfig();
      } 
    );
    
  }
  onDelete(index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.contactsService.delete(index).subscribe((data) => {
          this.showConfig();
          this.messageService.add({severity:'error', summary: 'Deleted', detail: 'Contact Deleted!'});
        });
        // console.log(event);
      },reject:() => {
        this.messageService.add({severity:'info', summary: 'Cancelled', detail: 'Action Aborted'});
      }
    });
    
  }
  ngOnInit() {
    this.showConfig();
  }
}
