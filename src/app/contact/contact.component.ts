import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  sendMessage() {
    // Placeholder for sending message logic
    console.log('Message sent!', this.name, this.email, this.message);
  }
}
