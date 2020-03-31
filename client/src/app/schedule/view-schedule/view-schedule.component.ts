import { Component } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';

@Component({
    templateUrl: './view-schedule.component.html',
    styleUrls: ['./view-schedule.component.css']
})

export class ViewScheduleComponent {
    constructor (private program : ProgramServices) {}
}