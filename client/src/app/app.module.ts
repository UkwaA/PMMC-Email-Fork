import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerRegisterComponent } from './customer-info/customer-info.component';
import { HomeComponent } from './home/home.component';
import { CreateProgramComponent } from './createprogram/createprogram.component';
import { AuthenticationService } from './authentication.service';
import { ProgramServices } from './services/program.services';
import { AuthGuardService } from './auth-guard.service';
import { AuthRoleGuardService} from './auth-role-guard.service';
import { AuthCustomerGuardService } from './auth-customer-guard.service';
import { PaymentServices } from './services/payment.services';
import { AuthSystemRoleGuardService} from './auth-system-role-guard.service';
import { EmailService } from './services/email.services';
import { EmailDetailsComponent } from './email-details/email-details.component';
import { CustomerService } from './services/customer.services';
import { ProgramScheduleService } from './services/schedule.services';
=======
import { ProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component'
import { CreateProgramComponent } from './createprogram/createprogram.component'
import { AuthenticationService } from './authentication.service'
import { ProgramServices } from './services/program.services'
import { AuthGuardService } from './auth-guard.service'
import { AuthRoleGuardService} from './auth-role-guard.service'
import { AuthCustomerGuardService } from './auth-customer-guard.service'
import { PaymentServices } from "./services/payment.services";
import { AuthSystemRoleGuardService} from './auth-system-role-guard.service'
import { EmailService } from './services/email.services'
import { EmailDetailsComponent } from './email-details/email-details.component'
import { CustomerService } from './services/customer.services'
import { ProgramScheduleService } from './services/schedule.services'
>>>>>>> Stashed changes
import { ReservationService } from './services/reservation.services';
import { GroupProgramComponent } from './group-program/group-program.component';
import { IndividualProgramComponent} from './individual-program/individual-program.component';
import { Contact } from './contact/contact.component';
<<<<<<< Updated upstream
import { BookingIndividualProgramComponent } from './booking-individual-program/booking-individual-program.component';
import { BookingGroupProgramComponent } from './booking-group-program/booking-group-program.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
>>>>>>> Stashed changes
import { MatFormFieldModule, MatInputModule, MatListModule, MatSidenavModule } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProgramManagementComponent } from './program-management/program-management.component';
import { EmailManagementComponent } from './email-management/email-management.component';
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
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ConfirmationComponent } from './confirmation/confirmation.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { LoginPromptModal } from './components/login-prompt-modal/login-prompt-modal.component';
import { RegisterModalDialogComponent } from './components/register-modal-dialog/register-modal-dialog.component';
import { CustomerModalDialogComponent } from './components/customer-modal-dialog/customer-modal-dialog.component';
import { AddScheduleModalDialogComponent } from './components/add-schedule-modal-dialog/add-schedule-modal-dialog.component';
import { ScheduleManagementComponent } from './schedule/schedule-management/schedule-management.component';
import { ViewScheduleComponent } from './schedule/view-schedule/view-schedule.component';
import { SetProgramScheduleComponent } from './schedule/set-program-schedule/set-program-schedule.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SafeHtmlPipe } from './services/SafeHtmlPipe';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DataStorage } from './services/dataProvider';
import { NgxStripeModule } from 'ngx-stripe';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReportManagementComponent } from './report-management/report-management.component';
import { PaynowModalDialog } from './components/paynow-modal-dialog/paynow-modal-dialog.component';
import { ReservationDetailsModalDialog } from './components/reservation-details-modal-dialog/reservation-details-modal-dialog.component';
import { AdminReservationsModalDialogComponent } from './components/admin-reservations-modal-dialog/admin-reservations-modal-dialog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
<<<<<<< Updated upstream
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {
  //   path: 'customer-register/:id',
  //   component:CustomerRegisterComponent,
  //   canActivate: [AuthCustomerGuardService],
  // },
  {path: 'group-program', component: GroupProgramComponent},
  {path: 'individual-program', component: IndividualProgramComponent},
  {path: 'contact', component: Contact},
  // {
  //   path: 'booking-individual-program/:id',
  //   component: BookingIndividualProgramComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'booking-group-program/:id',
  //   component: BookingGroupProgramComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {path: 'program-schedule/:id', component: ProgramScheduleComponent},
=======
  {path: 'group-program', component: GroupProgramComponent},
  {path: 'individual-program', component: IndividualProgramComponent},
  {path: 'contact', component: Contact},
>>>>>>> Stashed changes
  {path: 'reservation/:id', component: ReservationComponent},
  {path: 'login/forgot-password', component: ForgotPasswordComponent},
  {path: 'login/reset-password/:token', component: ResetPasswordComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: '', component: DashboardComponent, canActivate: [AuthGuardService]},
<<<<<<< Updated upstream
      {path: 'reservation-management', component: ReservationManagementComponent, canActivate: [AuthGuardService]},
=======
      {path: 'reservation-management', component: ReservationManagement, canActivate: [AuthGuardService]},
>>>>>>> Stashed changes
      {path: 'email-management', component: EmailManagementComponent, canActivate: [AuthRoleGuardService]},
      {path: 'email-details/:id/:mode', component: EmailDetailsComponent, canActivate: [AuthRoleGuardService]},
      {path: 'createprogram', component: CreateProgramComponent, canActivate: [AuthRoleGuardService]},
      {path: 'program-management', component: ProgramManagementComponent, canActivate: [AuthRoleGuardService]},
      {
        path: 'view-schedule/:mode',
        component: ViewScheduleComponent,
        canActivate: [AuthRoleGuardService]
      },
      {path: 'schedule-management', component: ScheduleManagementComponent, canActivate: [AuthRoleGuardService]},
      {path: 'report-management', component: ReportManagementComponent, canActivate: [AuthRoleGuardService]},
      {
        path: 'program-details/:id/set-program-schedule',
        component: SetProgramScheduleComponent,
        canActivate: [AuthRoleGuardService]
      },
      {
<<<<<<< Updated upstream
        path: 'program-details/:id/:mode',
=======
        path: 'program-details/:id/:mode', 
>>>>>>> Stashed changes
        component: ProgramDetailsComponent,
        canActivate: [AuthRoleGuardService],
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        canActivate: [AuthSystemRoleGuardService],
      },
      {
<<<<<<< Updated upstream
        path: 'user-details/:id',
=======
        path: 'user-details/:id', 
>>>>>>> Stashed changes
        component: UserDetailsComponent,
        canActivate: [AuthSystemRoleGuardService],
      },
      {
<<<<<<< Updated upstream
        path: 'create-new-user',
=======
        path: 'create-new-user', 
>>>>>>> Stashed changes
        component: CreateNewUserComponent,
        canActivate: [AuthSystemRoleGuardService],
      },
      {
<<<<<<< Updated upstream
        path: 'profile-info/:id',
=======
        path: 'profile-info/:id', 
>>>>>>> Stashed changes
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
    HomeComponent,
    CreateProgramComponent,
    GroupProgramComponent,
    IndividualProgramComponent,
    Contact,
<<<<<<< Updated upstream
    BookingIndividualProgramComponent,
    BookingGroupProgramComponent,
=======
>>>>>>> Stashed changes
    ProgramManagementComponent,
    ProgramDetailsComponent,
    EmailManagementComponent,
    EmailDetailsComponent,
    UserManagementComponent,
    UserDetailsComponent,
    IProgramComponent,
    GProgramComponent,
    ReservationComponent,
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
    PaymentComponent,
    SafeHtmlPipe,
    ConfirmationComponent,
    ReservationManagementComponent,
    ReportManagementComponent,
    PaynowModalDialog,
    ReservationDetailsModalDialog,
    AdminReservationsModalDialogComponent
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
    ChartsModule,
    MatTabsModule,
    NgxStripeModule.forRoot('pk_test_Z6rVNt6q0I5cKzAfeGOYp7wV00zAX9dQ8W'),
  ],
  providers: [EmailService, ProgramServices, CustomerService, AuthRoleGuardService, AuthSystemRoleGuardService, AuthGuardService,
              AuthCustomerGuardService, AuthenticationService, ProgramScheduleService, ReservationService, PaymentServices, DataStorage
              // {
              //   provide: HTTP_INTERCEPTORS,
              //   useClass: AuthInterceptor,
              //   multi: true,
              // }
            ],
  bootstrap: [AppComponent],
  entryComponents: [ModalDialogComponent, RegisterModalDialogComponent, CustomerModalDialogComponent,
            AddScheduleModalDialogComponent, LoginPromptModal, PaynowModalDialog, ReservationDetailsModalDialog, AdminReservationsModalDialogComponent]
})
export class AppModule { }
