import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { CustomerRegisterComponent } from './customer-info/customer-info.component';
import { HomeComponent } from './home/home.component'
import { CreateProgramComponent } from './createprogram/createprogram.component'
import { AuthenticationService } from './authentication.service'
import { ProgramServices } from './services/program.services'
import { AuthGuardService } from './auth-guard.service'
import { AuthRoleGuardService} from './auth-role-guard.service'
import { AuthCustomerGuardService } from './auth-customer-guard.service'
import { StepperServices } from './services/stepper.services'
import { AuthSystemRoleGuardService} from './auth-system-role-guard.service'
import { EmailService } from './services/email.services'
import { CustomerService } from './services/customer.services'
import { ProgramScheduleService } from './services/schedule.services'
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
import { UserManagementComponent } from './system-admin-dashboard/user-management/user-management.component';
import { UserDetailsComponent } from './system-admin-dashboard/user-details/user-details.component';
import { CreateNewUserComponent } from './system-admin-dashboard/create-new-user/create-new-user.component';
import { IProgramComponent } from './components/i-program/i-program.component'; 
import { GProgramComponent } from './components/g-program/g-program.component';
import { ForgotPasswordComponent} from './password-service/forgot-password/forgot-password.component';
import { ResetPasswordComponent} from './password-service/reset-password/reset-password.component';
import { ChangeCurrentPasswordComponent} from './password-service/change-current-password/change-current-password.component';
import { AccountSetting } from './account-setting/account-setting.component';
import { ProfileInfo } from './profile-info/profile-info.component';
import { ProgramScheduleComponent } from './program-schedule/program-schedule.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { LoginPromptModal } from './components/login-prompt-modal/login-prompt-modal.component';
import { RegisterModalDialogComponent } from './components/register-modal-dialog/register-modal-dialog.component';
import { CustomerModalDialogComponent } from './components/customer-modal-dialog/customer-modal-dialog.component';
import { AddScheduleModalDialogComponent } from './components/add-schedule-modal-dialog/add-schedule-modal-dialog.component';
import { ScheduleManagementComponent } from './schedule/schedule-management/schedule-management.component'
import { ViewScheduleComponent } from './schedule/view-schedule/view-schedule.component'
import { SetProgramScheduleComponent } from './schedule/set-program-schedule/set-program-schedule.component'
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SafeHtmlPipe } from './services/SafeHtmlPipe';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DataStorage } from "./services/dataProvider";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ReservationManagement } from './reservation-management/reservation-management.component'

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},  
  {
    path: 'customer-register/:id',
    component:CustomerRegisterComponent,
    canActivate: [AuthCustomerGuardService],
  },
  {path: 'group-program', component: GroupProgramComponent},
  {path: 'individual-program', component: IndividualProgramComponent},
  {path: 'contact', component: Contact},
  {
    path: 'booking-individual-program/:id', 
    component: BookingIndividualProgramComponent,
    canActivate: [AuthGuardService]
  },
  // {
  //   path: 'booking-group-program/:id', 
  //   component: BookingGroupProgramComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {path: 'program-schedule/:id', component: ProgramScheduleComponent},
  {path: 'reservation/:id', component: ReservationComponent},
  {path: 'payment/:id', component: PaymentComponent, canActivate: [AuthGuardService]},
  {path: 'confirmation/:id', component: ConfirmationComponent, canActivate: [AuthGuardService]},
  {path: 'login/forgot-password', component: ForgotPasswordComponent},
  {path: 'login/reset-password/:token', component: ResetPasswordComponent},
  {
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuardService], 
    children: [
      {path: '', component: DashboardComponent, canActivate: [AuthGuardService]},
      {path: 'reservation-management', component: ReservationManagement, canActivate: [AuthGuardService]},
      {path: 'createprogram', component: CreateProgramComponent, canActivate: [AuthRoleGuardService]},
      {path: 'program-management', component: ProgramManagementComponent, canActivate: [AuthRoleGuardService]},
      {
        path: 'view-schedule/:mode', 
        component: ViewScheduleComponent, 
        canActivate: [AuthRoleGuardService]
      },
      {path: 'schedule-management', component: ScheduleManagementComponent, canActivate: [AuthRoleGuardService]},
      {
        path: 'program-details/:id/set-program-schedule', 
        component: SetProgramScheduleComponent, 
        canActivate: [AuthRoleGuardService]
      },
      { 
        path: 'program-details/:id/:mode', 
        component: ProgramDetailsComponent,
        canActivate: [AuthRoleGuardService], 
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        canActivate: [AuthSystemRoleGuardService],
      },
      { 
        path: 'user-details/:id', 
        component: UserDetailsComponent,
        canActivate: [AuthSystemRoleGuardService], 
      },
      { 
        path: 'create-new-user', 
        component: CreateNewUserComponent,
        canActivate: [AuthSystemRoleGuardService], 
      },
      { 
        path: 'profile-info/:id', 
        component: ProfileInfo,
        canActivate: [AuthGuardService], 
      },
      { 
        path: 'account-setting/:id', 
        component: AccountSetting,
        canActivate: [AuthGuardService], 
      },
      { 
        path: 'change-current-password', 
        component: ChangeCurrentPasswordComponent,
        canActivate: [AuthGuardService], 
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
    UserManagementComponent,
    UserDetailsComponent, 
    IProgramComponent,
    GProgramComponent,
    ReservationComponent,
    CustomerRegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent, 
    ChangeCurrentPasswordComponent,
    DashboardComponent,
    ModalDialogComponent,
    RegisterModalDialogComponent,
    CustomerModalDialogComponent,
    AddScheduleModalDialogComponent,
    LoginPromptModal,
    ScheduleManagementComponent,
    ViewScheduleComponent,
    AccountSetting,
    ProfileInfo,
    CreateNewUserComponent,
    SetProgramScheduleComponent,
    ProgramScheduleComponent,
    PaymentComponent,
    SafeHtmlPipe,
    ConfirmationComponent, 
    ReservationManagement
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    CKEditorModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    SchedulerModule,
    DateInputsModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonToggleModule,
    InputsModule,
    ButtonsModule,
    DropDownsModule,
    ChartsModule
  ],
  providers: [EmailService, ProgramServices, CustomerService, AuthRoleGuardService, AuthSystemRoleGuardService, AuthGuardService, 
              AuthCustomerGuardService, AuthenticationService, ProgramScheduleService, DataStorage, StepperServices,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true,
              }],
  bootstrap: [AppComponent],
  entryComponents: [ModalDialogComponent, RegisterModalDialogComponent, CustomerModalDialogComponent,
    AddScheduleModalDialogComponent, LoginPromptModal]
})
export class AppModule { }
