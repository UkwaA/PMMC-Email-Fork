import { Component, OnInit } from '@angular/core';
import { ProgramData } from '../data/program-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramServices } from '../services/program.services';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { Observable } from 'rxjs';

@Component ({
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})

export class ConfirmationComponent implements OnInit{
    ProgramType: number;
    ProgramPK: number;
    programData: ProgramData;

    constructor(private route: ActivatedRoute, private service: ProgramServices, private router: Router,
        public matDialog: MatDialog){}

    ngOnInit(){
        // Get Group Program Requirement
        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
        })

        this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program=>{
            this.programData = program;
        })
    }

    confirm(){
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Thank you",
            description: "Your reservation is successful. Check your email for details.",            
            actionButtonText: "OK",   
            numberOfButton: "1"         
        }

        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //Save data here

                //route to the confirmation page
                this.router.navigateByUrl("/");
            }
            else{
                //otherwise, do nothing               
            }
        })
    }
}
