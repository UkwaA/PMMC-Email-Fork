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
  role: string;
  UserPK: number;
  reservations = [];
  allReservations = [];
  groupReservations = [];
  individualReservations = [];
  ongoingReservations = [];
  attendedReservations = [];
  completedReservations = [];
  cancelledReservations = [];
  searchText: string;
  temp = [];
  selectedValue = 0;

  // Dropdown Menu Option
  programCategories: Array<any>;
  programCategoriesAdmin: Array<any> = [
    { id: 0, name: 'All Program' },
    { id: 1, name: 'Group Program' },
    { id: 2, name: 'Individual Program' },
    { id: 3, name: 'Ongoing Program' },
    { id: 4, name: 'Attended Program' },
    { id: 5, name: 'Completed Program' },
    { id: 6, name: 'Cancelled Program' },
  ];

  programCategoriesCustomer: Array<any> = [
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
        if (this.role === '1') {
          this.programCategories = this.programCategoriesCustomer;
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
              details.Time = item.Start.slice(12, 16) + ' - ' + item.End.slice(12, 16);
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
        } else {
          this.programCategories = this.programCategoriesAdmin;
          /* Get all Reservation details */
          this.reservationService.getAllReservationDetailsForReservationManagement().subscribe((allRes) => {
            allRes.forEach((item) => {
              const reservation = {
                ReservationPK: 0,
                ProgramName: '',
                Date: '',
                CustomerName: '',
                ReservationStatus: '',
                Total: '',
                RemainingBalance: '',
              };
              reservation.ReservationPK = item.ReservationPK;
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
    const choice = event.target.value;
    // Update the data of table
    switch (choice) {
      case '0':
        this.reservations = this.allReservations;
        break;
      case '1':
        this.reservations = this.groupReservations;
        break;
      case '2':
        this.reservations = this.individualReservations;
        break;
      case '3':
        this.reservations = this.ongoingReservations;
        break;
      case '4':
        this.reservations = this.attendedReservations;
        break;
      case '5':
        this.reservations = this.completedReservations;
        break;
      case '6':
        this.reservations = this.cancelledReservations;
        break;
    }
  }

  // viewReservationModal
  openReservationModal() {
    console.log('Reservation Details Modal called');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'reservation-modal-component';
    dialogConfig.height = '600px';
    dialogConfig.width = '750x';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    const reservationModalDialog = this.matDialog.open(ReservationDetailsModalDialog, dialogConfig);

  }

    openCancelModal() {
    // Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = 'auto';
    dialogConfig.maxHeight = '500px';
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
