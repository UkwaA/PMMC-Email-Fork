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
import { HFService } from './services/hf.service'
import { AuthGuardService } from './auth-guard.service'
import { AuthRoleGuardService} from './auth-role-guard.service'
import { AuthSystemRoleGuardService} from './auth-system-role-guard.service'
import { EmailService } from './services/email.services'
import { GroupProgramComponent } from './group-program/group-program.component' 
import { IndividualProgramComponent} from './individual-program/individual-program.component'
import { Contact } from './contact/contact.component';
import { BookingIndividualProgramComponent } from './booking-individual-program/booking-individual-program.component'
import { BookingGroupProgramComponent } from './booking-group-program/booking-group-program.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule, MatInputModule, MatListModule, MatSidenavModule } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProgramManagementComponent } from './program-management/program-management.component'
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { SetUserRoleComponent } from './system-admin-dashboard/set-user-role/set-user-role.component';
import { UserDetailsComponent } from './system-admin-dashboard/user-details/user-details.component';
import { IProgramComponent } from './components/i-program/i-program.component'; 
import { GProgramComponent } from './components/g-program/g-program.component';
import { MatRadioModule } from '@angular/material/radio';
<<<<<<< HEAD
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
=======
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
>>>>>>> 641e8faf9c11c1287138e55a5253479401a415b1


const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  /* {
    path: 'set-user-role',
    component: SetUserRoleComponent,
    canActivate: [AuthSystemRoleGuardService]
  }, */
  {
    path: 'user-details/:id', 
    component: UserDetailsComponent,
    canActivate: [AuthSystemRoleGuardService]
  },
  /* {
    path: 'createprogram', 
    component: CreateProgramComponent,
    canActivate: [AuthRoleGuardService]
  },
<<<<<<< HEAD
 */
=======
  {path: 'customer-register', component: CustomerRegisterComponent},

>>>>>>> 641e8faf9c11c1287138e55a5253479401a415b1
  {path: 'group-program', component: GroupProgramComponent},
  {path: 'individual-program', component: IndividualProgramComponent},
  {path: 'contact', component: Contact},
  {path: 'booking-individual-program', component: BookingIndividualProgramComponent},
  {path: 'booking-group-program', component: BookingGroupProgramComponent},
/*   {path: 'program-management', component: ProgramManagementComponent}, */
  {path: 'program-details/:id', component: ProgramDetailsComponent},
  
  {
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuardService], 
    children: [
      {path: '', component: CreateProgramComponent},
      {path: 'createprogram', component: CreateProgramComponent },
      {path: 'program-management', component: ProgramManagementComponent},
      {
        path: 'set-user-role',
        component: SetUserRoleComponent,
        canActivate: [AuthSystemRoleGuardService]
      }
    ]
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
    BookingGroupProgramComponent,
    ProgramManagementComponent,
    ProgramDetailsComponent,
    SetUserRoleComponent,
    UserDetailsComponent, 
    IProgramComponent,
    GProgramComponent,
<<<<<<< HEAD
=======
    // UserRegisterComponent,
    CustomerRegisterComponent
>>>>>>> 641e8faf9c11c1287138e55a5253479401a415b1
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
<<<<<<< HEAD
  providers: [ProgramServices, AuthRoleGuardService, AuthSystemRoleGuardService, AuthGuardService, AuthenticationService, HFService],
=======
  providers: [EmailService, ProgramServices, AuthRoleGuardService, AuthSystemRoleGuardService, AuthGuardService, AuthenticationService],
>>>>>>> 641e8faf9c11c1287138e55a5253479401a415b1
  bootstrap: [AppComponent]
})
export class AppModule { }
