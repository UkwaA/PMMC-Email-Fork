import { Component } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProgramScheduleService } from 'src/app/services/schedule.services';

declare var $: any;

@Component({
    templateUrl: './schedule-management.component.html',
    styleUrls: ['./schedule-management.component.css']
})

export class ScheduleManagementComponent {
    //Define variables for program info
    programs : ProgramData[];
    allPrograms : ProgramData[];
    individualProgram: ProgramData[] = [];
    groupProgram: ProgramData[] = [];
    searchText: string;
    selectedValue = 0;
    isDisabled= true; //temporary variabe to hold the value for enable/disable button of program
    
    //Define variable to hold all schedule settings
    allScheduleSettings:any = []

    // Dropdown Menu Option
    programCategories: Array<Object> = [
        { id: 0, name: "All Program" },
        { id: 1, name: "Group Program" },
        { id: 2, name: "Individual Program" }
    ]

    constructor(private programService: ProgramServices, private programScheduleServices: ProgramScheduleService,
                public matDialog: MatDialog) { }

    ngOnInit() {
        // Add option for the dropdown menu
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));
        });

        // Service call to get data from server
        this.programScheduleServices.getAllProgramsWithScheduleSettingsRequirements().subscribe((result) =>{
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

    //open Modal when switching Activate/Deactivate button
    setBlackoutDateforAllPrograms(){
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "add-blackout-date-for-all-programs-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Add blackout date for ALL program",
            mode: "removeschedule",
			description: "This action will add blackout date for ALL programs and affect ongoing reservations. "
				+ "Customers will receive emails about this cancellation. Are you sure to continue?",
            actionButtonText: "Yes",
            numberOfButton: "2"            
            }
        const addScheduleModalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
				
            }
            else{
                console.log("stop")                
            }
        })
    }
}