import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('search', { static: false }) searchForm: NgForm;
  name: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.searchForm);
  }
  searchSubmit(): void {
    this.router.navigate(['/names-list'], {
      queryParams: { name: this.searchForm.value.name },
    });
  }
}
