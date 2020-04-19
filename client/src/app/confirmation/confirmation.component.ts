import { Component, OnInit } from '@angular/core';
import { ProgramData } from '../data/program-data';
import { ActivatedRoute } from '@angular/router';
import { ProgramServices } from '../services/program.services';

@Component ({
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})

export class ConfirmationComponent implements OnInit{
    ProgramType = 0;
    ProgramPK: number;
    programData: ProgramData;

    constructor(private route: ActivatedRoute, private service: ProgramServices){}

    ngOnInit(){
        // Get Group Program Requirement
        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
            console.log(this.ProgramPK);
        })

        this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program=>{
            this.programData = program;
            console.log(this.programData);
        })
        
    }
}
