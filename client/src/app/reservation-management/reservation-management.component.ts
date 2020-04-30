import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ReservationHeader } from '../data/reservation-header';
import { ReservationService } from '../services/reservation.services';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReservationDetailsModalDialog } from '../components/reservation-details-modal-dialog/reservation-details-modal-dialog.component';
import { ProgramServices } from '../services/program.services';
import { templateJitUrl } from '@angular/compiler';
import { ProgramScheduleService } from '../services/schedule.services';
import { CustomerService } from '../services/customer.services';
import { AppConstants } from '../constants';

declare var $: any;

@Component ({
    templateUrl: '/reservation-management.component.html',
    styleUrls: ['./reservation-management.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ReservationManagement implements OnInit{
    role:string;
    reservations = [];
    allReservations = [];
    groupReservations = [];
    individualReservations = [];
    searchText: string;
    selectedValue = 0;

    // Dropdown Menu Option
    programCategories: Array<Object> = [
        { id: 0, name: "All Program" },
        { id: 1, name: "Group Program" },
        { id: 2, name: "Individual Program" }
    ]

    constructor(private auth: AuthenticationService,
        private reservationSerivce: ReservationService,
        public matDialog:MatDialog,
        private scheduleService: ProgramScheduleService,
        private customerService: CustomerService,
        private programService: ProgramServices){}
    
    ngOnInit(){
        this.auth.profile().subscribe(
            user => {
                this.role = user.Role_FK;
            },
            err => {
                console.error(err)
            }
        )

        // Add option for the dropdown menu
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));
        });

        /* Get all Reservation details */
        this.reservationSerivce.getAllReservation().subscribe((allRes)=>{
                allRes.forEach((item) =>{
                    let reservation = {
                        ReservationPK: 0,
                        SchedulePK: 0,
                        UserPK: 0,
                        PaymentPK: 0,
                        ProgramPK: 0,
                        ProgramName: '',
                        Date: '',
                        CustomerName: '',
                        ReservationStatus:'',
                        Total:'',
                        RemainingBalance: '',
                    }
                    reservation.ReservationPK = item.ReservationPK;
                    reservation.SchedulePK = item.SchedulePK;
                    reservation.UserPK = item.UserPK;
                    
                    this.customerService.getCustomerInfoByID(reservation.UserPK).subscribe(customer => {
                        reservation.CustomerName = customer.LastName + ", " + customer.FirstName;
                    })
                    switch(item.ReservationStatus){
                        case AppConstants.RESERVATION_STATUS_CODE.ON_GOING: {
                            reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.ON_GOING;
                            break;
                        }
                        case AppConstants.RESERVATION_STATUS_CODE.ATTENDED:{
                            reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.ATTENDED;
                            break;
                        }
                        case AppConstants.RESERVATION_STATUS_CODE.COMPLETED:{
                            reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.COMPLETED;
                            break;
                        }
                        case AppConstants.RESERVATION_STATUS_CODE.CANCELLED:{
                            reservation.ReservationStatus = AppConstants.RESERVATION_STATUS_TEXT.CANCELLED;
                            break;
                        }
                    }

                    reservation.Total = item.Total;
                    reservation.RemainingBalance = item.RemainingBalance;
                    this.scheduleService.getScheduleById(reservation.SchedulePK).subscribe((schedule) => {
                        reservation.Date = schedule[0].Start.slice(0, 10);
                        reservation.ProgramPK = schedule[0].ProgramPK;
                        this.programService.getProgramHeaderDeatailsByID(reservation.ProgramPK).subscribe((program)=>{
                            reservation.ProgramName = program.Name;
                            if (program.ProgramType == AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM){
                                this.groupReservations.push(reservation);
                            }
                            else{
                                this.individualReservations.push(reservation);
                            }
                        })
                    })

                    this.allReservations.push(reservation);
                })
            }
        )
        this.reservations = this.allReservations;
    }

    clearSearch() {
        this.searchText = "";
    }

    // Catch the event dropdown menu
    selectChangeHandler(event: any) {
        let choice = event.target.value;
        // Update the data of table
       switch(choice) {
            case '0':
                this.reservations = this.allReservations;
                break;
            case '1':
                this.reservations = this.groupReservations;
                break;
            case '2':
                this.reservations = this.individualReservations;
                break;
       }
    }

    // viewReservationModal
    openReservationModal(){
    console.log("Reservation Details Modal called")
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "reservation-modal-component";
    dialogConfig.height = "600px";
    dialogConfig.width = "750x";
    dialogConfig.autoFocus = false;
   
    const reservationModalDialog = this.matDialog.open(ReservationDetailsModalDialog, dialogConfig);
  }
}