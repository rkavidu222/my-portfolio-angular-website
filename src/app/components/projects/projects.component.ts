import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap'],
      src: './assets/projects/portfolio.jpg',
      link: 'https://github.com/rkavidu222/my-portfolio-angular-website',
    },
    {
      name: 'BMI Calculator',
      description: 'You can easily calculate your BMI value',
      technologies: ['Netbeans', 'Java', ],
      src: './assets/projects/bmi.jpg',
      link: 'https://github.com/rkavidu222/BMI_Calculator_Java-',
    },
    {
      name: 'Notepad Project',
      description: 'I created a simple notepad application. You can easily edit text using it. ',
      technologies: ['Netbeans', 'Java',],
      src: './assets/projects/notepad.jfif',
      link: 'https://github.com/rkavidu222/notePad_Project_Using_Java-',
    },
    {
      name: 'Hotel Management System',
      description: 'There are several features in this project like room allocation, customer check in/ check out, generate invoice',
      technologies: ['Java', 'Neteans', 'MySQL Workbench', ],
      src: './assets/projects/hotel.png',
      link: 'https://github.com/rkavidu222/hotel-management-system-using-java',
    },
    {
      name: 'Registation Form',
      description: 'I created a registation form using angular and springboot',
      technologies: ['Angular', 'Springboot', 'MySQL workbench'],
      src: './assets/projects/crud.png',
      link: 'https://github.com/rkavidu222/Springboot-crud-application-for-customer-registation',
    },
    {
      name: 'Figma UI for Cake app',
      description: 'I design a userfriendly mobile app UI for cake ordering system',
      technologies: ['Figma', 'Behance'],
      src: './assets/projects/cake.jpg',
      link: 'https://www.behance.net/gallery/217744757/Cake-Ordering-App',
    },
    {
      name: 'Figma UI for Tea Powder Oderig Website',
      description: 'This is userfriendly websie design for ordering tea powder',
      technologies: ['Figma', 'Behance'],
      src: './assets/projects/tea.jpg',
      link: 'https://www.behance.net/gallery/218339089/Tea-powder-ordering-website-UI',
    },
    {
      name: 'Figma UI for shoue order app',
      description: 'mobile app design',
      technologies: ['Figma', 'Behance'],
      src: './assets/projects/shoe.jpeg',
      link: 'https://www.behance.net/gallery/219171963/Shoes-ordering-mobile-app-design',
    }
  ];
}
