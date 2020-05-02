import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ProgramData } from '../data/program-data';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PaynowModalDialog } from "../components/paynow-modal-dialog/paynow-modal-dialog.component";
import { FixedGroupTemplateDirective } from '@progress/kendo-angular-dropdowns';
import { ReservationService } from '../services/reservation.services';
import { ProgramScheduleService } from '../services/schedule.services';
import { ProgramServices } from '../services/program.services';

declare var $: any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role:string;
  searchText: string;
  customerRes = [];
  today = new Date();
  newDate: Date;
  /* CHART USING NG2-CHARTS */
  //title = 'Bar Chart Example Using ng2-charts';

  // ADD CHART OPTIONS. 
  // chartOptions = {
  //   responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  // }

  // labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

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
 // colors = [
   // { // 1st Year.
  //    backgroundColor: 'rgba(77,83,96,0.2)'
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
  programCategories: Array<Object> = [
    { id: 0, name: "All Reservations" },
    { id: 1, name: "Group Reservations" },
    { id: 2, name: "Individual Reservations" }
  ]

  constructor(private auth: AuthenticationService, public matDialog:MatDialog,
    private reservationService: ReservationService,
    private scheduleService: ProgramScheduleService,
    private programService: ProgramServices) { }

  ngOnInit() {
    // Add option for the dropdown menu(later)
    
    this.auth.profile().subscribe(
      user => {
        this.role = user.Role_FK;
        if (this.role == '1'){
          this.reservationService.getAllReservationByUserPK(user.UserPK).subscribe((resByUser)=>{
              resByUser.forEach((item)=>{
                  let details = {
                      ReservationPK: 0,
                      SchedulePK: 0,
                      PaymentPK: 0,
                      ProgramPK: 0,
                      Quantity: 0,
                      ProgramName: '',
                      Date: '',
                      Time: '',
                      Total:'',
                      RemainingBalance: '',
                  }
                  details.ReservationPK = item.ReservationPK;
                  details.SchedulePK = item.SchedulePK;
                  details.Total = item.Total;
                  details.RemainingBalance = item.RemainingBalance;
                  details.Quantity = item.NumberOfParticipant;

                  this.scheduleService.getScheduleById(details.SchedulePK).subscribe((schedule) => {
                      details.Date = schedule[0].Start.slice(0, 10);
                      details.Time = schedule[0].Start.slice(12,16) + " - " + schedule[0].End.slice(12,16);
                      details.ProgramPK = schedule[0].ProgramPK;
                      this.programService.getProgramHeaderDeatailsByID(details.ProgramPK).subscribe((program)=>{
                          details.ProgramName = program.Name;
                      })

                     /*  only display the current reservation, not past reservations */
                     this.newDate = new Date(details.Date)
                      if (this.newDate >= this.today){
                        this.customerRes.push(details);
                      }
                  })
              })
          })
      }

      },
      err => {
          console.error(err)
      }
  )
  }
  clearSearch() {
    this.searchText = "";
  }

  //On Click event of chart
  onChartClick(event) {
    console.log(event);
  }

  // Catch the event dropdown menu (later)

  // PaynowModal
  openPaynowModal(){
    console.log("Paynow Modal called")
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "paynow-modal-component";
    dialogConfig.height = "750px"
    dialogConfig.maxHeight = "100%";
    dialogConfig.width = "580px";
    dialogConfig.maxWidth = "100%"
    // dialogConfig.autoFocus = false;
   
    const paynowModalDialog = this.matDialog.open(PaynowModalDialog, dialogConfig);
  }

}