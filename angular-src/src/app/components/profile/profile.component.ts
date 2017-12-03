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
    name : String;
    username : String;
    email: String;
    skill: String;
    experience : String;
    volunteer : String;
    city : String;

    constructor(private authService: AuthService,
                private router: Router,
                private flashMessage: FlashMessagesService
                ) {
    }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
                this._id = profile.user._id;
                this.name = profile.user.name;
                this.username = profile.user.username;
                this.email = profile.user.email;
                this.skill = profile.user.skill;
                this.experience = profile.user.experience;
                this.volunteer = profile.user.volunteer;
                this.city = profile.user.city;
            },
            err => {
                console.log(err);
                return false;
            });
    }

    onUpdateProfile() {
        const updateUser = {
            _id: this._id,
            name: this.name,
            username: this.username,
            email: this.email,
            skill: this.skill,
            experience: this.experience,
            volunteer: this.volunteer,
            city: this.city
        }

        this.authService.updateProfile(updateUser).subscribe(data => {
            // this.flashMessage.show("Profile Updated", {
            //     cssClass: 'alert-success',
            //     timeout: 5000
            // });
            // this._id = data.user._id;
            // this.name = data.user.name;
            // this.username = data.user.username;
            // this.email = data.user.email;
            // this.skill = data.user.skill;
            // this.experience = data.user.experience;
            // this.volunteer = data.user.volunteer;
            // this.city = data.user.city;
        });
    }
}
