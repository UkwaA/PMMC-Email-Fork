import { Component, OnInit } from '@angular/core';
import {ProgramData} from '../data/program-data';

@Component({
    templateUrl: './individual-program.component.html',
    styleUrls: ['./individual-program.component.css']
})

export class IndividualProgramComponent implements OnInit{
    programs:ProgramData[];
    constructor(){

    }
    ngOnInit(){
        this.programs = this.createPrograms();
    }

    createPrograms():ProgramData[]{
        let  i;
        let result = [];
        for (i = 1; i < 9; ++i){
            let program = new ProgramData('Title'.concat(i.toString()), 'This is the Description of '.concat(i.toString()), "https://d.newsweek.com/en/full/615399/grey-seals.jpg", "https://www.pacificmmc.org/", 300);
            result.push(program);
        }
        return result;
    }
}