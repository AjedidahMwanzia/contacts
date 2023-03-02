import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service'; 
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contactForm: Contact={
    id:0,
    firstname:'',
    lastname:'',
    phonenumber:0,
    email:''
  }
  constructor(private ContactService:ContactService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  getById(id: number) {
    this.ContactService.getById(id).subscribe((data) => {
      this.contactForm = data;
    });
  }
 
  edit() {
    this.ContactService.edit(this.contactForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
