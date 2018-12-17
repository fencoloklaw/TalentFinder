import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {ToasterService} from "../../services/toaster.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  companyName: String;
  expertise: String;
  estimatedFrequency: String;
  location: String;
  jobDescription: String;
  optionalQuestion1: String;
  optionalQuestion2: String;
  optionalQuestion3: String;
  constructor(private validateService: ValidateService,
              private toasterService : ToasterService,
              private router: Router,
              private authService: AuthService,) { }

  ngOnInit() {
  }

  onPostJobClick(){
    const jobPost = {
      companyName: this.companyName,
      expertise: this.expertise,
      estimatedFrequency: this.estimatedFrequency,
      location: this.location,
      jobDescription: this.jobDescription,
      optionalQuestion1: this.optionalQuestion1,
      optionalQuestion2: this.optionalQuestion2,
      optionalQuestion3: this.optionalQuestion3
    };

    //Required Fields
    if (!this.validateService.validateJobPost(jobPost)) {
      this.toasterService.warning('Fill in all required fields');
      return false;
    }

    //Register User
    this.authService.createJobPost(jobPost).subscribe(data => {
      if(data.err){
        this.router.navigate(['/postjob']).then(()=>{
          this.toasterService.error('Something went wrong: ' + data.err);
        });
      }
      this.router.navigate(['/my-job-posts']).then(()=>{
        this.toasterService.success('Job has been Posted!');
      });
    });

  }
}
