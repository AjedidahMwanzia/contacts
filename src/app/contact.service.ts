import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  constructor(private http: HttpClient) { 
    
  }
  get() {
    return this.http.get<Contact[]>('http://localhost:3000/user');
  }
}
