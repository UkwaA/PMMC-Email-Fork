import { Component, OnInit } from '@angular/core';
import { ProgramData } from '../data/program-data';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { ProgramServices } from '../services/program.services';
import { AppConstants } from '../constants';
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ ProgramServices ]
})

export class HomeComponent implements OnInit{
    faClock = faClock;
    faComment = faComment;
    programs : ProgramData [];

    constructor( private programService: ProgramServices){   }
    ngOnInit(){
        this.programService.getActivePrograms().then((result) =>{
            var count = 0;
            if (result.length < 4){
                count = result.length;
            } 
            else if (result.length < 8){
                count = 4;
            }
            else {
                count = 8;
            }
            this.programs = result.map((prog: ProgramData) => {
                prog.ImgData = AppConstants.EXPRESS_SERVER_URL +  prog.ImgData
                return prog;
            })

            this.programs = this.programs.slice(0, count);
       
        })
    }
}