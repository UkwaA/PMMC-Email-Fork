import {Component, OnInit, Input, Inject} from '@angular/core';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';

declare var $: any;

@Component({
    selector: 'payment-management',
    templateUrl: './payment-management.component.html',
    styleUrls: ['./payment-management.component.css'],
    providers: [ProgramServices]
})

export class PaymentManagementComponent {

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

    constructor(private programService: ProgramServices,
                public matDialog: MatDialog) { }

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

}