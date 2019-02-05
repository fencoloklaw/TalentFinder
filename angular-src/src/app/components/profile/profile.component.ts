import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToasterService} from "../../services/toaster.service";
import {FileUploader} from "ng2-file-upload";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    _id : String;
    avatar: String = "uploads/profile_image.png";
    firstName: String;
    lastName: String;
    email: String;
    skill: String;
    experience : String;
    volunteer : String;
    city : String;
    region : String;
    description : String;
    certificates: String;
    awards: String;

    selectedFile: File;

    constructor(private authService: AuthService,
                private router: Router,
                private toasterService: ToasterService
                ) {
    }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
                this._id = profile.user._id;
                if(profile.user.avatar.length > 0) {
                    this.avatar = "uploads/" + profile.user.avatar;
                }
                this.firstName = profile.user.firstName;
                this.lastName = profile.user.lastName;
                this.email = profile.user.email;
                this.skill = profile.user.skill;
                this.experience = profile.user.experience;
                this.volunteer = profile.user.volunteer;
                this.city = profile.user.city;
                this.region = profile.user.region;
                this.description = profile.user.description;
                this.certificates = profile.user.certificates;
                this.awards = profile.user.awards;
            },
            err => {
                console.log(err);
                return false;
            });
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
    }

    onUpdatePicture(){
        let uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this._id.toString());
        this.authService.uploadPicture(uploadData).subscribe(data => {
            if(data.err){
                this.toasterService.error('Error');
            }
            else{
                this.avatar = "uploads/" + data.filename;
                this.toasterService.success('Updated Profile Picture');
            }
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
            region: this.region,
            description: this.description,
            certificates: this.certificates,
            awards: this.awards
        };

        this.authService.updateProfile(updateUser).subscribe(data => {
            this.toasterService.success('Profile Updated');

            this._id = data.user._id;
            this.firstName = data.user.firstName;
            this.lastName = data.user.lastName;
            this.email = data.user.email;
            this.skill = data.user.skill;
            this.experience = data.user.experience;
            this.volunteer = data.user.volunteer;
            this.city = data.user.city;
            this.region = data.user.region;
            this.description = data.user.description;
            this.certificates = data.user.certificates;
            this.awards = data.user.awards;
        });
    }
}
