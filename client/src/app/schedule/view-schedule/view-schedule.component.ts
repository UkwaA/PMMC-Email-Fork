import { Component } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';

@Component({
    templateUrl: './view-schedule.component.html',
    styleUrls: ['./view-schedule.component.css']
})

export class ViewScheduleComponent {
    public selectedDate: Date = new Date();
    // public allEvents: SchedulerEvent[] = [{
    //     id: 1,
    //     title: 'Breakfast',
    //     start: new Date('2018-01-02T09:00:00'),
    //     end: new Date('2018-01-02T15:30:00')
    // }]
    public allEvents: SchedulerEvent[]
    allSchedules: any = []
    constructor (private program : ProgramServices, private programScheduleServices: ProgramScheduleService) {}

    ngOnInit(){
        this.programScheduleServices.getAllSchedules().subscribe(schedules =>{
            schedules.forEach(element => {
                this.program.getProgramHeaderDeatailsByID(element.ProgramPK).subscribe(
                    program =>{
                        var event = {
                            id : element.SchedulePK,
                            title : program.Name,                            
                            start : new Date(element.Date + 'T' + element.StartTime),
                            end : new Date(element.Date + 'T' + element.EndTime)                        
                        }
                        this.allSchedules.push(event)
                    }                    
                )                
            });
        })        
        this.allEvents = this.allSchedules
    }
}