import { Component, OnInit } from '@angular/core';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services';
import { AppConstants } from '../constants';

@Component({
    templateUrl: './group-program.component.html',
    styleUrls: ['./group-program.component.css']
})

export class GroupProgramComponent implements OnInit{
    programs:ProgramData[];
    searchText = "";
    constructor(private programService: ProgramServices){

    }
    ngOnInit(){
        this.programService.getAllPrograms().then((result) =>{
            this.programs = result;
            this.programs.forEach(e => {
                e.ImgData = AppConstants.SERVER_URL + e.ImgData
            });
        })
    }

    /* onReady(editor) {
        console.log(editor)
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.getEditableElement()
        );
    } */

    clearSearch() {
        this.searchText = "";
    }

}