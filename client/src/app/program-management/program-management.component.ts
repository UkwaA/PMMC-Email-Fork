import { Component, ChangeDetectorRef } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
declare var $: any;

@Component({
    templateUrl: './program-management.component.html',
    styleUrls: ['./program-management.component.css'],
    providers: [ProgramServices]
})

export class ProgramManagementComponent {

    programs : ProgramData[];
    allPrograms : ProgramData[];
    individualProgram: ProgramData[];
    groupProgram: ProgramData[];
    searchText: string;
    selectedValue = 0;
    isDisabled= true; //temporary variabe to hold the value for enable/disable button of program

    // searchCategories: Array<Object> = [
    //     { id: 0, name: "Any" },
    //     { id: 1, name: "Program Name" },
    //     { id: 3, name: "Program Type" }
    // ]
    programCategories: Array<Object> = [
        { id: 0, name: "All Program" },
        { id: 1, name: "Group Program" },
        { id: 2, name: "Individual Program" }
    ]

    constructor(private programService: ProgramServices,
                // private http: HttpClient,
                // private services: ProgramServices, 
                // private auth: AuthenticationService, 
                // private router: Router,
                private changeDetectorRefs: ChangeDetectorRef,
                public matDialog: MatDialog) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));
        });

        this.programService.getAllPrograms().then((result) =>{
            this.programs = result;
            this.allPrograms = result
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

    selectChangeHandler(event: any) {
        // Update the variable
       switch(event.target.value) {
            case 0:
                this.programs = this.allPrograms;
                break;
            case 1:
                this.programs = this.groupProgram;
                break;
            case 1:
                this.programs = this.individualProgram;
                break;
       }
    }

    //open Modal when switching Activate/Deactivate button
    openModalSwitch(){
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        if (this.isDisabled){
            dialogConfig.data = {
                title: "Enable Program",
                description: "This program is not able to view by customers. Are you sure to enable this program?",            
                actionButtonText: "Confirm",   
                numberOfButton: "1"         
            }
        }
        else {
            dialogConfig.data = {
                title: "Disable Program",
                description: "This program is able to view by customers. Are you sure to disable this program?",            
                actionButtonText: "Confirm",   
                numberOfButton: "1"         
            }
        }
            // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //deactivate or activate the program here
                if (this.isDisabled){ 
                    //activate program here

                }
                else {
                    //deactivate program here

                }
                //switch the button
                this.isDisabled = !this.isDisabled;
            }
            else{
                //otherwise, do notthing               
            }
        })
    }
}
