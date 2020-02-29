import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'

@Component({
    templateUrl: './program-management.component.html',
    styleUrls: ['./program-management.component.css'],
    providers: [ProgramServices]
})

export class ProgramManagementComponent {
    programs : ProgramData[];
    programCategories: Array<Object> = [
        { id: 0, name: "Group Program" },
        { id: 1, name: "Individual Program" }
    ]

    constructor(private programService: ProgramServices,private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.programService.getAllPrograms().then((result) =>{
            this.programs = result; 
        })
    }
}
