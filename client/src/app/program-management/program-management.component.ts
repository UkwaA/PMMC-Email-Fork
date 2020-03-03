import { Component, ChangeDetectorRef } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
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
                private changeDetectorRefs: ChangeDetectorRef) { }

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
}
