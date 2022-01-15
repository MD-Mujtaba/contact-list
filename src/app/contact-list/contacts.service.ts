import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../update/update.component';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  configUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  get(){
    return this.http.get<Contact[]>(environment.apiUrl);
  }

  post(postdata: object){
    // console.log(postdata,"DATA");
    return this.http.post(this.configUrl,postdata);
  }

  delete(index:number){
    return this.http.delete(`${this.configUrl}/${index}`);
  }

  update(postData:Contact){
    // console.log(postData,"POST DATA");
    return this.http.post(`${this.configUrl}/${postData.id}`,postData);
  }
}
