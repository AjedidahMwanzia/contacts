import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allContacts: Contact[] = [];
  constructor(private ContactService:ContactService  ) { }

  ngOnInit(): void {
    // this.get();
  }

  get() {
    this.ContactService.get().subscribe((data) => {
      this.allContacts = data;
    });
  }
}
