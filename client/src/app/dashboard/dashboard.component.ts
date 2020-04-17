import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ProgramData } from '../data/program-data';

declare var $: any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role:string;
  searchText: string;
  

  // Dropdown Menu Option
  programCategories: Array<Object> = [
    { id: 0, name: "All Reservations" },
    { id: 1, name: "Group Reservations" },
    { id: 2, name: "Individual Reservations" }
  ]

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    // Add option for the dropdown menu(later)
    

    this.auth.profile().subscribe(
      user => {
          this.role = user.Role_FK;
          console.log(this.role)
      },
      err => {
          console.error(err)
      }
  )
  }
  clearSearch() {
    this.searchText = "";
  }

  // Catch the event dropdown menu (later)

}