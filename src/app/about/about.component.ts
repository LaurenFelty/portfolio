import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name = 'Lauren Felty';
  bio = `
    I am a full stack software engineer passionate about building dynamic, user-friendly 
    web applications. I enjoy working on both front-end and back-end systems, and am always 
    looking for opportunities to learn and grow. In my spare time, I enjoy snowboarding, 
    pickleball, and traveling.
  `;
}
