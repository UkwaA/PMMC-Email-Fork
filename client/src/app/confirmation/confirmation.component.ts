import { Component, OnInit,Input } from '@angular/core';
import { ProgramData } from '../data/program-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramServices } from '../services/program.services';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { FormGroup } from '@angular/forms';
import { QuantiyFormData } from '../data/quantity-form-data';
import { ReservationGroupDetails } from '../data/reservation-group-details';

@Component ({
    selector: 'confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})

export class ConfirmationComponent implements OnInit{
    @Input() reservationGroupDetails: ReservationGroupDetails;
    @Input() ProgramPK: number;

    ProgramType: number;
    programData: ProgramData;

    constructor(private route: ActivatedRoute, private service: ProgramServices, private router: Router,
        public matDialog: MatDialog){}

    ngOnInit(){
        // Get Group Program Requirement
        // this.route.params.subscribe(val => {
        //     this.ProgramPK = val.id
        // })

        this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program=>{
            this.programData = program;
        })
    }
}
