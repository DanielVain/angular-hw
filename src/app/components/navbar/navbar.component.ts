import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links: string[];
  constructor() {
    this.links = ['login', 'dashboard', 'names-list'];
  }

  ngOnInit(): void {}
}
