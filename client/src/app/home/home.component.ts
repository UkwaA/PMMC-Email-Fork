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
    programs : ProgramData[];

    constructor( private programService: ProgramServices){   }
    ngOnInit(){
        this.programService.getAllPrograms().then((result) =>{
            this.programs = result;
            this.programs.forEach(e => {
                e.ImgData = AppConstants.SERVER_URL + e.ImgData
            });
        })
    }
}