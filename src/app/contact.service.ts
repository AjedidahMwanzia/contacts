import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Contact[]>('http://localhost:3000/user');
  }

  add(payload: Contact) {
    return this.http.post<Contact>('http://localhost:3000/user', payload);
  }

  edit(payload:Contact){
    return this.http.put(`http://localhost:3000/user/${payload.id}`,payload);
   }

   getById(id: number) {
    return this.http.get<Contact>(`http://localhost:3000/user/${id}`);
   }
   delete(id:number){
    return this.http.delete<Contact>(`http://localhost:3000/user/${id}`);
 }
}

