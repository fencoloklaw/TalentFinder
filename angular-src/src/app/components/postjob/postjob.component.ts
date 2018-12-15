import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  companyName: String;
  expertise: String;
  estimatedFrequency: String;
  jobDescription: String;
  optionalQuestion1: String;
  optionalQuestion2: String;
  optionalQuestion3: String;
  constructor() { }

  ngOnInit() {
  }

  onPostJobClick(){

  }
}
