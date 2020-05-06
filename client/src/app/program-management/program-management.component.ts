import { Component } from '@angular/core'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProgramScheduleService } from '../services/schedule.services';

declare var $: any;

@Component({
    templateUrl: './program-management.component.html',
    styleUrls: ['./program-management.component.css'],
    providers: [ProgramServices]
})

export class ProgramManagementComponent {
    p: number;
    programs : ProgramData[];
    allPrograms : ProgramData[];
    individualProgram: ProgramData[] = [];
    groupProgram: ProgramData[] = [];
    searchText: string;
    selectedValue = 0;
    isDisabled= true; //temporary variabe to hold the value for enable/disable button of program
  
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
    openModalSwitch(programPK: number, status: boolean){
        this.isDisabled = status
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        if (this.isDisabled){
            dialogConfig.data = {
                title: "Disable Program",
                description: "This action will prevent this program from being viewed by customers. Are you sure you would like to continue?",            
                actionButtonText: "Confirm",   
                numberOfButton: "2"         
            }
        }
        else {
            dialogConfig.data = {
                title: "Enable Program",
                description: "This action will now allow this program to be viewed by customers. Are you sure you would like to continue?",            
                actionButtonText: "Confirm",   
                numberOfButton: "2"         
            }
        }

        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //deactivate or activate the program here
                if (this.isDisabled){ 
                    //disable program here
                    this.programService.setProgramActiveStatus(programPK, false)
                    .subscribe((res) =>{
                        window.location.reload();

                    })
                }
                else {
                    //enable program here
                    this.programService.setProgramActiveStatus(programPK, true)
                    .subscribe((res) =>{
                        console.log(res.message)
                        window.location.reload();
                    })
                }
                //switch the button
                this.isDisabled = !this.isDisabled;
            }
            else{
                //otherwise, do nothing               
            }
        })
    }
}
