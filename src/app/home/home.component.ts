import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact'
import { ContactService } from '../contact.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allContacts: Contact[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private ContactService:ContactService  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.ContactService.get().subscribe((data) => {
      this.allContacts = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.ContactService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allContacts = this.allContacts.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
