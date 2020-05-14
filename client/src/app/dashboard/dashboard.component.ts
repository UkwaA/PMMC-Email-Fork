import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { start } from 'repl';
import { formatDate } from '@angular/common';

export interface DataElement {
  no: number;
  Username: string;
  FirstName: string;
  LastName: string;
  Email: string;
  CreatedDate: string;
}

declare var $: any;

@Component({
  selector: 'dashboard.component',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /* New user Table */
  displayedColumns: string[] = ['no', 'Username', 'FirstName', 'LastName', 'Email', 'CreatedDate'];
  UserDetailsInfo = new MatTableDataSource<DataElement>();

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.UserDetailsInfo.sort = sort;
  }

  @ViewChild(MatPaginator, { static: false }) set contentpage(paginator: MatPaginator){
    this.UserDetailsInfo.paginator = paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.UserDetailsInfo.filter = filterValue.trim().toLowerCase();
  }

  role: number;
  searchText: string;
  customerRes = [];
  today = new Date();
  newDate: Date;
  range = {
    end: this.today,
    start: new Date(this.today.getTime() - (7 * 24 * 60 * 60 * 1000))
  };
  completedRes = 0;
  completedTotal = 0;
  completedDetails = [];
  ongoingRes = 0;
  ongoingTotal = 0;
  ongoingDetails = [];
  attendedRes = 0;
  attendedTotal = 0;
  attendedDetails = [];
  cancelledRes = 0;
  cancelledTotal = 0;
  cancelledDetails = [];
  pendingRes = 0;
  pendingTotal = 0;
  pendingDetails = [];

  /*Date for barchart */
  current =  formatDate(this.today, 'EEE MMM dd yyyy', 'en');
  current_1 = formatDate( new Date(this.today.getTime() - (24 * 60 * 60 * 1000)), 'EEE MMM dd yyyy', 'en');
  current_2 = formatDate( new Date(this.today.getTime() - (2 * 24 * 60 * 60 * 1000)), 'EEE MMM dd yyyy', 'en');
  current_3 = formatDate( new Date(this.today.getTime() - (3 * 24 * 60 * 60 * 1000)), 'EEE MMM dd yyyy', 'en');
  current_4 = formatDate( new Date(this.today.getTime() - (24 * 60 * 60 * 1000)), 'EEE MMM dd yyyy', 'en');
  current_5 = formatDate( new Date(this.today.getTime() - (24 * 60 * 60 * 1000)), 'EEE MMM dd yyyy', 'en');
  current_6 = formatDate( new Date(this.today.getTime() - (24 * 60 * 60 * 1000)), 'EEE MMM dd yyyy', 'en');



  /* CHART USING NG2-CHARTS */
  title = 'Reservation';

  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels = [this.current_1,this.current];
  // chartData = [];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Pending',
      data: [9,12, 4, 12, 5,12, 23]
    },
    {
      label: 'Completed',
      data: [47, 2, 28, 6, 23,3,12]
    },
    {
      label: 'Ongoing',
      data: [7, 5, 18, 54, 45,9,11]
    },
    {
      label: 'Attended',
      data: [43, 7, 12, 4, 23,4,5]
    },
    {
      label: 'Cancelled',
      data: [12, 9, 28, 24, 12, 2, 4]
    }
  ];

  // CHART COLOR.
  colors = [
    { // Pending
      backgroundColor: '#E63946'
    },
    { // Completed
      backgroundColor: '#F1FAEE'
    },
    { // Ongoing
      backgroundColor: '#A8DADC'
    },
    { // Attended
      backgroundColor: '#457B9D'
    },
    { // Cancelled
      backgroundColor: '#1D3557'
    }
  ]
  /* FINISH CHART USING NG2-CHARTS */


  /* PIE CHART*/
  title_pie = 'Comparison By Programs';

  pieChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  pieChartLabels = [
    ['Group Programs'],
    ['Individual Programs']];

  pieChartData = [300, 500];

  pieChartColors = [
    {
      backgroundColor: ['rgba(12, 86, 161, 0.7)', 'rgba(12, 161, 86, 0.7)']
    }
  ]

  pieChartPlugins = [];

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
        if (this.role === AppConstants.USER_ROLE_CODE.CUSTOMER || this.role === AppConstants.USER_ROLE_CODE.SCHOOL) {
          this.reservationService.getAllReservationDetailsForReservationManagementByUserPK(user.UserPK).subscribe((resByUser) => {
            resByUser.forEach((item) => {
              console.log(item);
              let details = {
                ReservationPK: 0,
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
              details.Total = item.Total;
              details.RemainingBalance = item.RemainingBalance;
              details.Quantity = item.NumberOfParticipant;
              details.Date = item.Start.slice(0, 10);
              details.Time = item.Start.slice(11, 16) + ' - ' + item.End.slice(11, 16);
              details.ProgramName = item.Name;
              details.ProgramType = item.ProgramType;
              switch(item.ReservationStatus) {
                case AppConstants.RESERVATION_STATUS_CODE.ON_GOING:
                  details.ReservationStatus = AppConstants.RESERVATION_STATUS_CODE.ON_GOING;
                  break;
                  case AppConstants.RESERVATION_STATUS_CODE.ATTENDED:
                    details.ReservationStatus = AppConstants.RESERVATION_STATUS_CODE.ATTENDED;
                    break;
                  case AppConstants.RESERVATION_STATUS_CODE.PENDING:
                    details.ReservationStatus = AppConstants.RESERVATION_STATUS_CODE.PENDING;
                    break;
              }

              if ((item.ReservationStatus === AppConstants.RESERVATION_STATUS_CODE.ON_GOING) ||
                (item.ReservationStatus === AppConstants.RESERVATION_STATUS_CODE.ATTENDED) ||
                (item.ReservationStatus === AppConstants.RESERVATION_STATUS_CODE.PENDING)) {
                this.customerRes.push(details);
              }
            })
          })
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
    //if (this.range.start <= this.range.end) {}
      this.range.start.setHours(0, 0, 0, 0);
      //this.range.end.setHours(0, 0, 0, 0);

      //Get Customer Infodata
      this.customerService.getAllUsersCreatedInTimeRange(this.range.start.toISOString().slice(0,10),
                                                        this.range.end.toISOString().slice(0,10))
          .subscribe(customerInfo =>{                        
            this.UserDetailsInfo.data = customerInfo as DataElement[];            
          })

      this.completedRes = 0;
      this.completedTotal = 0;
      this.completedDetails = [];
      this.ongoingRes = 0;
      this.ongoingTotal = 0;
      this.ongoingDetails = [];
      this.attendedRes = 0;
      this.attendedTotal = 0;
      this.attendedDetails = [];
      this.cancelledRes = 0;
      this.cancelledTotal = 0;
      this.cancelledDetails = [];
      this.pendingRes = 0;
      this.pendingTotal = 0;
      this.pendingDetails = [];
      this.reservationService.getAllReservationDetailsForReservationManagement().subscribe((allRes) => {
        allRes.forEach((item) => {
          //console.log(item);
          let reservation = {
            ReservationPK: 0,
            ProgramName: '',
            Date: '',
            CustomerName: '',
            NumberOfParticipant: 0,
            ReservationStatus: '',
            Total: '',
            RemainingBalance: '',
          };
          reservation.ReservationPK = item.ReservationPK;
          reservation.NumberOfParticipant = item.NumberOfParticipant;
          reservation.Total = item.Total;
          reservation.RemainingBalance = item.RemainingBalance;
          reservation.CustomerName = item.LastName + ', ' + item.FirstName;
          reservation.Date = item.Start.slice(0, 10);
          reservation.ProgramName = item.Name;
          if (item.ReservationStatus != AppConstants.RESERVATION_STATUS_CODE.PENDING){
            const resDate = new Date(item.Start);
            if (this.range.start <= resDate && this.range.end >= resDate) {
              switch (item.ReservationStatus) {
                case AppConstants.RESERVATION_STATUS_CODE.ON_GOING: {
                  this.ongoingRes += 1;
                  this.ongoingTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.ON_GOING;
                  this.ongoingDetails.push(reservation);
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.ATTENDED: {
                  this.attendedRes += 1;
                  this.attendedTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.ATTENDED;
                  this.attendedDetails.push(reservation);
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.COMPLETED: {
                  this.completedRes += 1;
                  this.completedTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.COMPLETED;
                  this.completedDetails.push(reservation);
                  break;
                }
                case AppConstants.RESERVATION_STATUS_CODE.CANCELLED: {
                  this.cancelledRes += 1;
                  this.cancelledTotal += item.Total;
                  reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.CANCELLED;
                  this.cancelledDetails.push(reservation);
                  break;
                }
              }
            }
          }
          else {
            const createdDate = new Date(item.CreatedDate);
            if (this.range.start <= createdDate && this.range.end >= createdDate) {
              this.pendingRes += 1;
              this.pendingTotal += item.Total;
              reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.PENDING;
              this.pendingDetails.push(reservation);
              console.log(this.pendingDetails);
            }
          }
          
        });
      });
  }

  // PaynowModal
  openPaynowModal() {
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

  openCancelModal(type: number) {
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
    if (type === AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM) {
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
        dialogConfig.data = [status,this.ongoingDetails];
        break;
      }
      case AppConstants.RESERVATION_STATUS_TEXT.ATTENDED: {
        dialogConfig.data = [status,this.attendedDetails];
        break;
      }
      case AppConstants.RESERVATION_STATUS_TEXT.COMPLETED: {
        dialogConfig.data = [status,this.completedDetails];
        break;
      }
      case AppConstants.RESERVATION_STATUS_TEXT.CANCELLED: {
        dialogConfig.data = [status,this.cancelledDetails];
        break;
      }
      case AppConstants.RESERVATION_STATUS_TEXT.PENDING: {
        dialogConfig.data = [status,this.pendingDetails];
        break;
      }
    }
    const adminReservationModalDialog = this.matDialog.open(AdminReservationsModalDialogComponent, dialogConfig);
  }
}
