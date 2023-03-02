import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contactForm: Contact={
    id:0,
    firstname:'',
    lastname:'',
    phonenumber:0,
    email:''
  }
  constructor(private ContactService:ContactService, private router:Router) { }

  ngOnInit(): void {
  }
  add(){
    this.ContactService.add(this.contactForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
