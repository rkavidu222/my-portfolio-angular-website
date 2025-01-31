import { Component } from '@angular/core';
import { ViewportScroller, CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [CommonModule],  // ✅ Import CommonModule for @for directive
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  protected navItems: string[] = ['About', 'Skill Set', 'Projects', 'Contacts'];

  scrollTo(section: string) {
    const sectionIds: { [key: string]: string } = {
      'About': 'about',
      'Skill Set': 'skill-set',
      'Projects': 'projects',
      'Contacts': 'contact'
    };

    let elementId = sectionIds[section] || section.toLowerCase().replace(/\s+/g, '-');
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
