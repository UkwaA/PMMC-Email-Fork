import {Component, OnInit, Input, Inject} from '@angular/core';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { AuthenticationService } from '../authentication.service';
import { Observable, Observer } from 'rxjs';

declare var $: any;


@Component({
    selector: 'report-management',
    templateUrl: './report-management.component.html',
    styleUrls: ['./report-management.component.css'],
    providers: [ProgramServices]
})

export class ReportManagementComponent {

    programs : ProgramData[];
    allPrograms : ProgramData[];
    individualProgram: ProgramData[] = [];
    groupProgram: ProgramData[] = [];
    searchText: string;
    selectedValue = 0;
    
    // Dropdown Menu Option
    programCategories: Array<Object> = [
        { id: 0, name: "All Program" },
        { id: 1, name: "Group Program" },
        { id: 2, name: "Individual Program" }
    ]

    constructor(
      private programService: ProgramServices,
      public matDialog: MatDialog) 
      {
      }

    ngOnInit() {
        // Add option for the dropdown menu
        this.programCategories.forEach(e => {
            $("#paymentCat").append(new Option(e['name'], e['id']));
        });

        // Service call to get data from server
        this.programService.getAllPrograms().then((result) =>{
            this.programs = result;
            this.allPrograms = result

            // Filter program into Group and Individual
            this.programs.forEach(e => {
                if(e.ProgramType == 0) {
                    this.groupProgram.push(e);
                } else {
                    this.individualProgram.push(e);
                }
            });
        })
    }
    
    clearSearch() {
        this.searchText = "";
    }

    // Catch the event dropdown menu
    selectChangeHandler(event: any) {
        let choice = event.target.value;
        // Update the data of table
       switch(choice) {
            case '0':
                this.programs = this.allPrograms;
                break;
            case '1':
                this.programs = this.groupProgram;
                break;
            case '2':
                this.programs = this.individualProgram;
                break;
       }
    }


     //On Click event of chart
  onChartClick(event) {
    console.log(event);
  }

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

}

