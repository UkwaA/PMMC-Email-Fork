import { Component, OnInit } from '@angular/core';
import {ProgramData} from '../data/program-data';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    programs:ProgramData[];
    constructor(){

    }
    ngOnInit(){
        this.programs = this.createPrograms();
    }

    createPrograms():ProgramData[]{
        let  i;
        let result = [];
        for (i = 1; i < 5; ++i){
            let program = new ProgramData('Title'.concat(i.toString()), 'Description'.concat(i.toString()), "https://s.abcnews.com/images/International/grey-seal-stock-gty-jef-190621_hpMain_16x9_992.jpg", "https://www.pacificmmc.org/");
            result.push(program);
        }
        return result;
    }

}