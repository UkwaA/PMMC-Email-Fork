import { OnInit, Component,  ViewChild, ElementRef} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ReservationService } from '../services/reservation.services';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReservationDetailsModalDialog } from '../components/reservation-details-modal-dialog/reservation-details-modal-dialog.component';
import { ProgramServices } from '../services/program.services';
import { ProgramScheduleService } from '../services/schedule.services';
import { CustomerService } from '../services/customer.services';
import { AppConstants } from '../constants';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { NumericTextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})

export class ReservationManagementComponent implements OnInit {
  p: number;
  choice = '';
  role: number;
  UserPK: number;
  reservations = [];
  allReservations = [];
  groupReservations = [];
  individualReservations = [];
  ongoingReservations = [];
  attendedReservations = [];
  completedReservations = [];
  cancelledReservations = [];
  pendingReservations = [];
  filterReservations = [];
  searchText: string;
  temp = [];
  selectedValue = 0;

  // Dropdown Menu Option
  typeCategories: Array<any> = [
    { id: 1, name: 'On Going' },
    { id: 2, name: 'Attended' },
    { id: 3, name: 'Completed' },
    { id: 4, name: 'Cancelled' },
    { id: 5, name: 'Pending' }
  ];

  programCategories: Array<any> = [
    { id: 0, name: 'All Program' },
    { id: 1, name: 'Group Program' },
    { id: 2, name: 'Individual Program' },
  ];

  constructor(
    private auth: AuthenticationService,
    private reservationService: ReservationService,
    public matDialog: MatDialog,
    private scheduleService: ProgramScheduleService,
    private customerService: CustomerService,
    private programService: ProgramServices
  ) {}
  ngOnInit() {
    this.auth.profile().subscribe(
      (user) => {
        this.role = user.Role_FK;
        this.UserPK = user.UserPK;
        if (this.role === AppConstants.USER_ROLE_CODE.CUSTOMER || this.role === AppConstants.USER_ROLE_CODE.SCHOOL) {
          this.reservationService.getAllReservationDetailsForReservationManagementByUserPK(user.UserPK).subscribe((resByUser) => {
            resByUser.forEach((item) => {
              const details = {
                ReservationPK: 0,
                Quantity: 0,
                ProgramName: '',
                ReservationStatus: '',
                Date: '',
                Time: '',
                Total: '',
                RemainingBalance: '',
              };
              details.ReservationPK = item.ReservationPK;
              details.Total = item.Total;
              details.RemainingBalance = item.RemainingBalance;
              details.Quantity = item.NumberOfParticipant;
              details.Date = item.Start.slice(0, 10);
              details.Time = item.Start.slice(11, 16) + ' - ' + item.End.slice(11, 16);
              details.ProgramName = item.Name;
              switch (item.ReservationStatus) {
                case AppConstants.RESERVATION_STATUS_CODE.ON_GOING: {
                  details.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.ON_GOING;
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.ATTENDED: {
                  details.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.ATTENDED;
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.COMPLETED: {
                  details.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.COMPLETED;
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.CANCELLED: {
                  details.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.CANCELLED;
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.PENDING: {
                  details.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.PENDING;
                  break;
                }
              }
              if (item.ProgramType === AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM) {
                this.groupReservations.push(details);
              } else {
                this.individualReservations.push(details);
              }
              this.allReservations.push(details);
            });
          });
          this.reservations = this.allReservations;
          this.filterReservations = this.allReservations;
        } else {
          /* Get all Reservation details for Admin */
          this.reservationService.getAllReservationDetailsForReservationManagement().subscribe((allRes) => {
            allRes.forEach((item) => {
              const reservation = {
                ReservationPK: 0,
                UserPK: 0,
                ProgramType: 0,
                ProgramName: '',
                Date: '',
                CustomerName: '',
                ReservationStatus: '',
                Total: '',
                RemainingBalance: '',
                SchedulePK: 0
              };
              reservation.ReservationPK = item.ReservationPK;
              reservation.UserPK = item.UserPK;
              reservation.SchedulePK = item.SchedulePK,
              reservation.ProgramType = item.ProgramType;
              reservation.CustomerName = item.LastName + ', ' + item.FirstName;
              reservation.Total = item.Total;
              reservation.RemainingBalance = item.RemainingBalance;
              reservation.Date = item.Start.slice(0, 10);
              reservation.ProgramName = item.Name;
              switch (item.ReservationStatus) {
                case AppConstants.RESERVATION_STATUS_CODE.ON_GOING: {
                  reservation.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.ON_GOING;
                  this.ongoingReservations.push(reservation);
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.ATTENDED: {
                  reservation.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.ATTENDED;
                  this.attendedReservations.push(reservation);
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.COMPLETED: {
                  reservation.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.COMPLETED;
                  this.completedReservations.push(reservation);
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.CANCELLED: {
                  reservation.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.CANCELLED;
                  this.cancelledReservations.push(reservation);
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.PENDING: {
                  reservation.ReservationStatus =
                    AppConstants.RESERVATION_STATUS_TEXT.PENDING;
                  this.pendingReservations.push(reservation);
                  break;
                }
              }
              if (item.ProgramType === AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM) {
                this.groupReservations.push(reservation);
              } else {
                this.individualReservations.push(reservation);
              }
              this.allReservations.push(reservation);
            });
          });
          this.reservations = this.allReservations;
          this.filterReservations = this.allReservations;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  clearSearch() {
    this.searchText = '';
  }

  // Catch the event dropdown menu
  selectChangeHandler(event: any) {
    this.choice = event.target.value;
    // Update the data of table
    switch (this.choice) {
      case '0':
        this.reservations = this.allReservations;
        this.filterReservations = this.reservations;
        break;
      case '1':
        this.reservations = this.groupReservations;
        this.filterReservations = this.reservations;
        break;
      case '2':
        this.reservations = this.individualReservations;
        this.filterReservations = this.reservations;
        break;
    }
  }

  selectTypeHandler(type: any){
    const status = type.target.value;
    this.filterReservations = [];
    if(status != 0){
      this.reservations.forEach((res)=> {
        switch(status){
          case '1':
            if (res.ReservationStatus === 'On Going'){
              this.filterReservations.push(res);
            }
            break;
          case '2':
            if (res.ReservationStatus === 'Attended'){
              this.filterReservations.push(res);
            }
            break;
          case '3': 
            if (res.ReservationStatus === 'Completed'){
              this.filterReservations.push(res);
            }
            break;
          case '4':
            if (res.ReservationStatus === 'Cancelled'){
              this.filterReservations.push(res);
            }
            break;
          case '5':
            if (res.ReservationStatus === 'Pending'){
              this.filterReservations.push(res);
            }
            break;
        }
      });
    } else {
      switch (this.choice) {
        case '0':
          this.reservations = this.allReservations;
          this.filterReservations = this.reservations;
          break;
        case '1':
          this.reservations = this.groupReservations;
          this.filterReservations = this.reservations;
          break;
        case '2':
          this.reservations = this.individualReservations;
          this.filterReservations = this.reservations;
          break;
        }
    }
  }

  // viewReservationModal
  openReservationModal(reservation: any) {
    console.log('Reservation Details Modal called');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'reservation-modal-component';
    //dialogConfig.height = 'auto';
    //dialogConfig.maxWidth = '750x';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    
    dialogConfig.data = reservation;
    const reservationModalDialog = this.matDialog.open(ReservationDetailsModalDialog, dialogConfig);

  }

    openCancelModal() {
    // Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = 'auto';
    dialogConfig.maxHeight = '600px';
    dialogConfig.width = '350px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
        title: 'Cancel Confirmation',
        description: 'Are you sure you would like to cancel this reservation for the customer?',
        actionButtonText: 'Confirm',
        numberOfButton: '2'
    };

    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        // Update Database
        // Make the refund
        // Send cancel email
      } else {
        // Do nothing
      }
    });
  }

  openPaynowModal() {

  }
}
