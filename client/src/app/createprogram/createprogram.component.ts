import { Component } from '@angular/core'
import { AuthenticationService, UserDetails} from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices} from '../services/program.services'

@Component({
    templateUrl: './createprogram.component.html',
    styleUrls: ['./createprogram.component.css'],
    providers: [ ProgramServices ]
})

export class CreateProgramComponent {
    user: UserDetails
    programData : ProgramData = {
        ProgramPk: 0,
        Name: '',
        Description: '',
        FullAmount: 0,
        CreatedDate: '',
        CreatedBy: 0,
        ImgData: ''
    }

    constructor(private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
      
    }

    createProgram() {
        this.user = this.auth.getUserDetails();
        this.programData.CreatedBy = this.user.UserPK
        this.services.addNewProgram(this.programData).then(() => {
            console.log(this.programData)
            this.router.navigateByUrl("/createprogram")
        })
    }

}