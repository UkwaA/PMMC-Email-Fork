import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ProgramData } from '../data/program-data';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PaynowModalDialog } from "../components/paynow-modal-dialog/paynow-modal-dialog.component";

declare var $: any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role:string;
  searchText: string;
  /* CHART USING NG2-CHARTS */
  title = 'Bar Chart Example Using ng2-charts';

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: '1st Year',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
    },
    { 
      label: '2nd Year',
      data: [47, 9, 28, 54, 77, 51, 24]
    }
  ];

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]
   /* FINISH CHART USING NG2-CHARTS */
  
   
/* PIE CHART*/
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
  ['Request Reservation', 'Cancel', 'Completed'],
  ['Showed', 'No Showed'],
  ['Group Programs', 'Individual Programs']];

 pieChartData = [300,500,100];

 pieChartPlugins = [];

/* END PIE CHART*/

  // Dropdown Menu Option
  programCategories: Array<Object> = [
    { id: 0, name: "All Reservations" },
    { id: 1, name: "Group Reservations" },
    { id: 2, name: "Individual Reservations" }
  ]

  constructor(private auth: AuthenticationService, public matDialog:MatDialog) { }

  ngOnInit() {
    // Add option for the dropdown menu(later)
    

    this.auth.profile().subscribe(
      user => {
          this.role = user.Role_FK;
          console.log(this.role)
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "paynow-modal-component";
    dialogConfig.height = "auto";
    dialogConfig.maxHeight = "600px";
    dialogConfig.width = "700px";
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: "Pay Now",
      mode: "paynow",
      description: "",
    }
    const paynowModalDialog = this.matDialog.open(PaynowModalDialog, dialogConfig);
    paynowModalDialog.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        console.log("Paynow Modal");
      }

    });
  }

}