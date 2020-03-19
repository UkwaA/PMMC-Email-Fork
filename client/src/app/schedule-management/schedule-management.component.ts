import { Component } from '@angular/core'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';

@Component({
    templateUrl: './schedule-management.component.html',
    styleUrls: ['./schedule-management.component.css']
})

export class ScheduleManagementComponent {
    constructor (private program : ProgramServices) {}
}