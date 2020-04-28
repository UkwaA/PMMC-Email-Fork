import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ReservationHeader } from '../data/reservation-header';
import { ReservationService } from '../services/reservation.services';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReservationDetailsModalDialog } from '../components/reservation-details-modal-dialog/reservation-details-modal-dialog.component';
import { ProgramServices } from '../services/program.services';

@Component ({
    templateUrl: '/reservation-management.component.html',
    styleUrls: ['./reservation-management.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ReservationManagement implements OnInit{
    role:string;
    allReservations: any;
    programInfo: any;

    constructor(private auth: AuthenticationService,
        private reservationSerivce: ReservationService,
        public matDialog:MatDialog,
        private programService: ProgramServices){}
    
    ngOnInit(){
        this.auth.profile().subscribe(
            user => {
                this.role = user.Role_FK;
                console.log(this.role)
            },
            err => {
                console.error(err)
            }
        )

        this.reservationSerivce.getAllReservation().subscribe(
            allRes =>{
            this.allReservations = allRes;
            console.log(this.allReservations);
            }
        )

        this.programService.getAllPrograms
    }

    // viewReservationModal
    openReservationModal(){
    console.log("Reservation Details Modal called")
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "paynow-modal-component";
    dialogConfig.maxHeight = "600px";
    dialogConfig.width = "750x";
    dialogConfig.autoFocus = false;
   
    const reservationModalDialog = this.matDialog.open(ReservationDetailsModalDialog, dialogConfig);
  }
}