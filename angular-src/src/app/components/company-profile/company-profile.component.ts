import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  lastName: String;
  firstName: String;
  city: String;
  region: String;
  skill: String;
  description: String;
  experience: String;
  certificates: String;
  awards: String;

  constructor() { }

  ngOnInit() {
  }

  onUpdateProfile(){

  }
}
