export class ProgramScheduleData {
    SchedulePK: number
    ProgramPK: number
    Date: string    
    StartTime: string
    EndTime: string
    MaximumParticipant: number
    CurrentNumberParticipant: number
    IsActive: boolean
    CreatedBy: number

    constructor(nSchedulePK: number, nProgramPK: number, nDate: string, nStartTime: string,
        nEndTime: string, nMaximumParticipant: number, ncurrentNumberParticipant: number, nIsActive: boolean, nCreatedby: number){
            this.SchedulePK = nSchedulePK
            this.ProgramPK = nProgramPK
            this.Date = nDate
            this.StartTime = nStartTime
            this.EndTime = nEndTime
            this.MaximumParticipant = nMaximumParticipant
            this.CurrentNumberParticipant = ncurrentNumberParticipant
            this.IsActive = nIsActive
            this.CreatedBy = nCreatedby
    }
}