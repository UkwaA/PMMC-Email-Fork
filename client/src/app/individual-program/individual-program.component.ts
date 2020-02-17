import { Component, OnInit } from '@angular/core';
import {ProgramData} from '../data/program-data';
import { ProgramServices } from '../services/program.services';

@Component({
    templateUrl: './individual-program.component.html',
    styleUrls: ['./individual-program.component.css']
})

export class IndividualProgramComponent implements OnInit{
    programs:ProgramData[];
    constructor(private programService: ProgramServices){

    }
    ngOnInit(){
        this.programService.getAllPrograms().then((result) =>{
            this.programs = result;
        })
    }
}