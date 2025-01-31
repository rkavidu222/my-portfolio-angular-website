import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // Method to open your LinkedIn profile
  goToLinkedin() {
    window.open('https://www.linkedin.com/in/kavindu-rashmika-wasala-arachchi/', '_blank');
  }

  // Getter for your email address
  get email(): string {
    return 'rkavidu222@gmail.com';
  }
}
