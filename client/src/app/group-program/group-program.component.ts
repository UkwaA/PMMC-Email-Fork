import { Component, OnInit } from '@angular/core';
import {ProgramData} from '../data/program-data';
import { ProgramServices } from '../services/program.services';

@Component({
    templateUrl: './group-program.component.html',
    styleUrls: ['./group-program.component.css']
})

export class GroupProgramComponent implements OnInit{
    programs:ProgramData[];
    constructor(private programService: ProgramServices){

    }
    ngOnInit(){
        this.programService.getAllPrograms().then((result) =>{
            this.programs = result;
        })
    }

}