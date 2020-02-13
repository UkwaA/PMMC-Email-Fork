import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { CreateProgramComponent } from './createprogram/createprogram.component'
import { AuthenticationService } from './authentication.service'
import { ProgramServices } from './services/program.services'
import { AuthGuardService } from './auth-guard.service'
import { AuthRoleGuardService} from './auth-role-guard.service'
import { GroupProgramComponent } from './group-program/group-program.component' 
import { IndividualProgramComponent} from './individual-program/individual-program.component'
import { Contact } from './contact/contact.component';
import { BookingIndividualProgramComponent } from './booking-individual-program/booking-individual-program.component'
import { BookingGroupProgramComponent } from './booking-group-program/booking-group-program.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule, MatInputModule } from '@angular/material';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {
    path: 'createprogram', 
    component: CreateProgramComponent,
    canActivate: [AuthRoleGuardService]
  },

  {path: 'group-program', component: GroupProgramComponent},
  {path: 'individual-program', component: IndividualProgramComponent},
  {path: 'contact', component: Contact},
  {path: 'booking-individual-program', component: BookingIndividualProgramComponent},
  {path: 'booking-group-program', component: BookingGroupProgramComponent},

  {
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateProgramComponent,
    GroupProgramComponent,
    IndividualProgramComponent, 
    Contact, 
    BookingIndividualProgramComponent,
    BookingGroupProgramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ProgramServices, AuthRoleGuardService, AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
