import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramServices } from '../services/program.services';
import { ProgramData } from '../data/program-data';
import { ProgramScheduleService } from '../services/schedule.services';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Component({
    templateUrl: './program-schedule.component.html',
    styleUrls: ['./program-schedule.component.css']
})

export class ProgramScheduleComponent implements OnInit{
    ProgramPK: number;
    ProgramType: number;
    programDetails: ProgramData;
    public selectedDate: Date = new Date();
    public allEvents: SchedulerEvent[]
    allSchedules: any = []
    
    constructor(private route: ActivatedRoute,
        private service: ProgramServices,
        private programScheduleServices: ProgramScheduleService){

    }
    ngOnInit(){
        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
        })

        this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(details => {
            this.programDetails = details;
            this.ProgramType = details.ProgramType;
            document.getElementById("program_name").innerHTML = this.programDetails.Name;
            document.getElementById("program_desc").innerHTML = this.programDetails.Description;
      })

        this.programScheduleServices.getScheduleById(this.ProgramPK).subscribe(schedules =>{
            schedules.forEach(element =>{
                    var event = {
                        id : element.SchedulePK,
                        title : this.programDetails.Name,                            
                        start : new Date(element.Date + 'T' + element.StartTime),
                        end : new Date(element.Date + 'T' + element.EndTime)                        
                    }
                    this.allSchedules.push(event)
                }                    
            )                
        })        
        this.allEvents = this.allSchedules
    }
}