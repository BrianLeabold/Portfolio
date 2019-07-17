import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from './Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  topics = ['A free consultation', 'New Construction', 'Remodeling', 'Planning', 'Other'];
  contactModel = new Contact ('', '', '', '', '', '', 'evening', false);
  submitted = false;
  errorMsg = '';
  successMsg = '';

  constructor(private contact: ContactService) { }

  onSubmit() {
    this.submitted = true;
    this.contact.contactUser(this.contactModel)
    .subscribe(
      data => this.successMsg = 'Thank you for your interest. I will be in touch shortly. Have a great day.',
      error => this.errorMsg = error.statusText
    );
  }

  ngOnInit() {
  }

}
