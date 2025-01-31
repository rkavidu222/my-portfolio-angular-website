// profile.component.ts
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
  openResume() {
    window.open('/assets/projects/W.A.D.Kavindu.pdf', '_blank');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/kavindu-rashmika-wasala-arachchi', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/rkavidu222', '_blank');
  }

  goToBlogger() {
    window.open('https://rkavidu222.blogspot.com', '_blank');
  }

  goToBehance() {
    window.open('https://www.behance.net/kavidurashmika2', '_blank'); // Replace with your Behance URL
  }
}
