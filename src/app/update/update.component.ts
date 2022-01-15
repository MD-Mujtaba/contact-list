import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ContactsService } from '../contact-list/contacts.service';

export interface Contact{
  id:any,
  name:string,
  email:string,
  mobile:string
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  contact: any;
  uObj:Contact[]=[];
  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService : MessageService) {}

  ngOnInit(): void {
    this.getContacts(this.route.snapshot.params['id']);
  }

  getContacts(nid:number){
    this.contactsService.get().subscribe((result:Contact[]) => {
      this.contact = result.find((item) => {
        return item.id == nid;
      })
    });
  }
  // uid = this.route.snapshot.params['id'];

  update(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Update ?',
      accept: () => {
        this.contactsService.update(this.contact).subscribe((data:any)=>{
        this.messageService.add({severity:'success', summary: 'Updated', detail: 'Contact Updated Successfully'});
        window.location.href="http://localhost:4200/contact-list";
        });
      },reject:()=>{
        this.messageService.add({severity:'error', summary: 'Cancelled', detail: 'Action Aborted'});
      }
    });
  }



}
