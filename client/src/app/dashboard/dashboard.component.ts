import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ProgramData } from '../data/program-data';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PaynowModalDialog } from '../components/paynow-modal-dialog/paynow-modal-dialog.component';
import { FixedGroupTemplateDirective } from '@progress/kendo-angular-dropdowns';
import { ReservationService } from '../services/reservation.services';
import { ProgramScheduleService } from '../services/schedule.services';
import { ProgramServices } from '../services/program.services';
import { AppConstants } from '../constants';
import { AdminReservationsModalDialogComponent } from '../components/admin-reservations-modal-dialog/admin-reservations-modal-dialog.component';
import { CustomerService } from '../services/customer.services';
import { Breakpoints } from '@angular/cdk/layout';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role: string;
  searchText: string;
  customerRes = [];
  today = new Date();
  newDate: Date;
  range = { start: new Date(this.today.getFullYear(), this.today.getMonth(), 1),
            end: new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0)};
  completedRes = 0;
  completedTotal = 0;
  completedDetails = {range: {}, reservations: []};
  ongoingRes = 0;
  ongoingTotal = 0;
  ongoingDetails = {range: {}, reservations: []};
  attendedRes = 0;
  attendedTotal = 0;
  attendedDetails = {range: {}, reservations: []};
  cancelledRes = 0;
  cancelledTotal = 0;
  cancelledDetails = {range: {}, reservations: []};

  /* CHART USING NG2-CHARTS */
  // title = 'Bar Chart Example Using ng2-charts';

  // ADD CHART OPTIONS.
  /* chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['On Going', 'Completed', 'Attended', 'Cancelled'];
  chartData = []; */

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  // chartData = [
  //   {
  //     label: '1st Year',
  //     data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
  //   },
  //   { 
  //     label: '2nd Year',
  //     data: [47, 9, 28, 54, 77, 51, 24]
  //   }
  // ];

  // CHART COLOR.
 //colors = [
   // { // 1st Year.
    //  backgroundColor: 'rgba(77,83,96,0.2)'
  //  },
  //  { // 2nd Year.
  //    backgroundColor: 'rgba(30, 169, 224, 0.8)'
   // }
//  ]
   /* FINISH CHART USING NG2-CHARTS */
  
   
/* PIE CHART*/
// pieChartOptions = {
//   responsive: true,
//   legend: {
//     position: 'top',
//   },
//   plugins: {
//     datalabels: {
//       formatter: (value, ctx) => {
//         const label = ctx.chart.data.labels[ctx.dataIndex];
//         return label;
//       },
//     },
//   }
// };
//  pieChartLabels = [
//   ['Request Reservation', 'Cancel', 'Completed'],
//   ['Showed', 'No Showed'],
//   ['Group Programs', 'Individual Programs']];

//  pieChartData = [300,500,100];

//  pieChartPlugins = [];

/* END PIE CHART*/

  // Dropdown Menu Option
  programCategories: Array<object> = [
    { id: 0, name: 'All Reservations' },
    { id: 1, name: 'Group Reservations' },
    { id: 2, name: 'Individual Reservations' }
  ]

  constructor(private auth: AuthenticationService, public matDialog: MatDialog,
              private reservationService: ReservationService,
              private scheduleService: ProgramScheduleService,
              private programService: ProgramServices,
              private customerService: CustomerService) { }

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.role = user.Role_FK;
        if (this.role === '1'){
          this.reservationService.getAllReservationByUserPK(user.UserPK).subscribe((resByUser) => {
              resByUser.forEach((item) => {
                  let details = {
                      ReservationPK: 0,
                      SchedulePK: 0,
                      PaymentPK: 0,
                      ProgramPK: 0,
                      Quantity: 0,
                      ReservationStatus: 0,
                      ProgramName: '',
                      ProgramType: 0,
                      Date: '',
                      Time: '',
                      Total: '',
                      RemainingBalance: '',
                  };
                  details.ReservationPK = item.ReservationPK;
                  details.SchedulePK = item.SchedulePK;
                  details.Total = item.Total;
                  details.RemainingBalance = item.RemainingBalance;
                  details.Quantity = item.NumberOfParticipant;

                  this.scheduleService.getScheduleById(details.SchedulePK).subscribe((schedule) => {
                      details.Date = schedule[0].Start.slice(0, 10);
                      details.Time = schedule[0].Start.slice(12, 16) + ' - ' + schedule[0].End.slice(12, 16);
                      details.ProgramPK = schedule[0].ProgramPK;
                      this.programService.getProgramHeaderDeatailsByID(details.ProgramPK).subscribe((program) => {
                          details.ProgramName = program.Name;
                          details.ProgramType = program.ProgramType;
                      });

                      if (item.ReservationStatus === AppConstants.RESERVATION_STATUS_CODE.ON_GOING) {
                        details.ReservationStatus = AppConstants.RESERVATION_STATUS_CODE.ON_GOING;
                      }

                     /*  only display the current reservation, not past reservations */
                      if ((item.ReservationStatus === AppConstants.RESERVATION_STATUS_CODE.ON_GOING) ||
                      (item.ReservationStatus === AppConstants.RESERVATION_STATUS_CODE.ATTENDED)) {
                        this.customerRes.push(details);
                      }
                  });
              });
          });
        } else {
          this.onChangeDate();
        }
      },
      err => {
          console.error(err);
      }
    )
  }
  clearSearch() {
    this.searchText = '';
  }

  // On Click event of chart
  onChartClick(event) {
    console.log(event);
  }

  /* Change the Start and End Date */
  onChangeDate() {
    if (this.range.start <= this.range.end) {
      this.range.start.setHours(0, 0, 0, 0);
      this.range.end.setHours(23, 59, 59, 999);
      this.completedRes = 0;
      this.completedTotal = 0;
      this.completedDetails = {range: this.range, reservations: []};
      this.ongoingRes = 0;
      this.ongoingTotal = 0;
      this.ongoingDetails = {range: this.range, reservations: []};
      this.attendedRes = 0;
      this.attendedTotal = 0;
      this.attendedDetails = {range: this.range, reservations: []};
      this.cancelledRes = 0;
      this.cancelledTotal = 0;
      this.cancelledDetails = {range: this.range, reservations: []};

      this.reservationService.getAllReservation().subscribe((allRes) => {
        allRes.forEach((item) =>{
          /* Object for reservation details */
          let reservation = {
            ReservationPK: 0,
            SchedulePK: 0,
            UserPK: 0,
            PaymentPK: 0,
            ProgramPK: 0,
            ProgramName: '',
            Date: '',
            CustomerName: '',
            ReservationStatus: '',
            Total: '',
            RemainingBalance: '',
          };
          reservation.ReservationPK = item.ReservationPK;
          reservation.SchedulePK = item.SchedulePK;
          reservation.UserPK = item.UserPK;
          this.customerService.getCustomerInfoByID(reservation.UserPK).subscribe(customer => {
              reservation.CustomerName = customer.LastName + ', ' + customer.FirstName;
          });
          reservation.Total = item.Total;
          reservation.RemainingBalance = item.RemainingBalance;
          this.scheduleService.getScheduleById(reservation.SchedulePK).subscribe((schedule) => {
              reservation.Date = schedule[0].Start.slice(0, 10);
              reservation.ProgramPK = schedule[0].ProgramPK;
              this.programService.getProgramHeaderDeatailsByID(reservation.ProgramPK).subscribe((program)=>{
                  reservation.ProgramName = program.Name;
              });
          });
          this.scheduleService.getScheduleById(item.SchedulePK).subscribe((schedule) => {
            /* ??? before one date if change to Date */
            const resDate = new Date(schedule[0].Start);
            if (this.range.start <= resDate && this.range.end >= resDate) {
              switch (item.ReservationStatus) {
                case AppConstants.RESERVATION_STATUS_CODE.ON_GOING: {
                  this.ongoingRes += 1;
                  this.ongoingTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.ON_GOING;
                  this.ongoingDetails.reservations.push(reservation);
                  // this.ongoingDetails.range = this.range;
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.ATTENDED: {
                  this.attendedRes += 1;
                  this.attendedTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.ATTENDED;
                  this.attendedDetails.reservations.push(reservation);
                  // this.attendedDetails.range = this.range;
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.COMPLETED: {
                  this.completedRes += 1;
                  this.completedTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.COMPLETED;
                  this.completedDetails.reservations.push(reservation);
                  // this.completedDetails.range = this.range;
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.CANCELLED: {
                  this.cancelledRes += 1;
                  this.cancelledTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.CANCELLED;
                  this.cancelledDetails.reservations.push(reservation);
                  // this.cancelledDetails.range = this.range;
                  break;
                }
              }
            }
          });
        });
      });
    }
  }

  // PaynowModal
  openPaynowModal(){
    console.log('Paynow Modal called');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'paynow-modal-component';
    dialogConfig.height = '750px';
    dialogConfig.maxHeight = '100%';
    dialogConfig.width = '580px';
    dialogConfig.maxWidth = '100%';
    // dialogConfig.autoFocus = false;
    const paynowModalDialog = this.matDialog.open(PaynowModalDialog, dialogConfig);
  }

  openCancelModal(type: number){
    console.log('Cancel Modal called')
    // Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = 'auto';
    dialogConfig.maxHeight = '500px';
    dialogConfig.width = '350px';
    dialogConfig.autoFocus = false;
    if (type === AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM){
      dialogConfig.data = {
        title: 'Cancel Confirmation',
        description: 'Are you sure you would like to cancel this reservation? Your payment for this reservation will be refunded soon!',            
        actionButtonText: 'Confirm',
        numberOfButton: '2'
      };
    } else {
      dialogConfig.data = {
        title: 'Cancel Confirmation',
        description: 'Are you sure you would like to cancel this reservation for customer? We will collect the $25 deposit and refund the rest of your payment!',            
        actionButtonText: 'Confirm',
        numberOfButton: '2'
      };
    }

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

  // viewReservationModal
  openReservationModal(status: string) {
    console.log('Admin Reservations Modal called');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = 'admin-reservations-modal-component';
    dialogConfig.maxHeight = '650px';
    dialogConfig.width = '1000px';
    dialogConfig.autoFocus = false;
    switch (status) {
      case AppConstants.RESERVATION_STATUS_TEXT.ON_GOING: {
        dialogConfig.data = this.ongoingDetails;
        break;
      }
      case AppConstants.RESERVATION_STATUS_TEXT.ATTENDED: {
        dialogConfig.data = this.attendedDetails;
        break;
      }
      case AppConstants.RESERVATION_STATUS_TEXT.COMPLETED: {
        dialogConfig.data = this.completedDetails;
        break;
      }
      case AppConstants.RESERVATION_STATUS_TEXT.CANCELLED: {
        dialogConfig.data = this.cancelledDetails;
        break;
      }
    }
    const adminReservationModalDialog = this.matDialog.open(AdminReservationsModalDialogComponent, dialogConfig);
  }
}
