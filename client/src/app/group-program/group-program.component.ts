import { Component, OnInit } from '@angular/core';
import {ProgramData} from '../data/program-data';

@Component({
    templateUrl: './group-program.component.html',
    styleUrls: ['./group-program.component.css']
})

export class GroupProgramComponent implements OnInit{
    programs:ProgramData[];
    constructor(){

    }
    
    ngOnInit(){
        this.programs = this.createPrograms();
    }

    createPrograms():ProgramData[]{
        let  i;
        let result = [];
        for (i = 1; i < 7; ++i){
            let program = new ProgramData('Title'.concat(i.toString()), 'This is the Description of '.concat(i.toString()), "https://d.newsweek.com/en/full/615399/grey-seals.jpg", "https://www.pacificmmc.org/");
            result.push(program);
        }
        return result;
    }

}