import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SearchtalentComponent} from './components/searchtalent/searchtalent.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {SearchService} from './services/search.service';
import {DataService} from "./services/data.service";
import {
    MatAutocompleteModule,
    MatButtonModule, MatButtonToggleModule,
    MatCardActions,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatRadioModule, MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatToolbarModule
} from "@angular/material";
import {ScrollDispatchModule} from "@angular/cdk/scrolling";
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ToasterService} from "./services/toaster.service";
import { ToastrModule } from 'ngx-toastr';
import { PostjobComponent } from './components/postjob/postjob.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'searchtalent', component: SearchtalentComponent},
    {path: 'postjob', component: PostjobComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        DashboardComponent,
        SearchtalentComponent,
        SchedulerComponent,
        PostjobComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        MatCardModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        ScrollDispatchModule,
        MatListModule,
        MatStepperModule,
        MatDialogModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            closeButton: true
        }),
    ],
    providers: [ValidateService, AuthService, AuthGuard, SearchService, DataService, ToasterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
