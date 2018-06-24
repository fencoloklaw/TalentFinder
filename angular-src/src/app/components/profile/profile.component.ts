import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    _id : String;
    // name : String;
    firstName: String;
    lastName: String;
    // username : String;
    email: String;
    skill: String;
    experience : String;
    volunteer : String;
    city : String;
    description : String;

    constructor(private authService: AuthService,
                private router: Router,
                private flashMessage: FlashMessagesService
                ) {
    }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
                this._id = profile.user._id;
                this.firstName = profile.user.firstName;
                this.lastName = profile.user.lastName;
                this.email = profile.user.email;
                this.skill = profile.user.skill;
                this.experience = profile.user.experience;
                this.volunteer = profile.user.volunteer;
                this.city = profile.user.city;
                this.description = profile.user.description;
            },
            err => {
                console.log(err);
                return false;
            });
    }

    onUpdateProfile() {
        const updateUser = {
            _id: this._id,
            firstName : this.firstName,
            lastName : this.lastName,
            email: this.email,
            skill: this.skill,
            experience: this.experience,
            volunteer: this.volunteer,
            city: this.city,
            description: this.description
        };

        this.authService.updateProfile(updateUser).subscribe(data => {
            this.flashMessage.show("Profile Updated", {
                cssClass: 'alert-success',
                timeout: 5000
            });
            this._id = data.user._id;
            this.firstName = data.user.firstName;
            this.lastName = data.user.lastName;
            this.email = data.user.email;
            this.skill = data.user.skill;
            this.experience = data.user.experience;
            this.volunteer = data.user.volunteer;
            this.city = data.user.city;
            this.description = data.user.description;

        });
    }
}
