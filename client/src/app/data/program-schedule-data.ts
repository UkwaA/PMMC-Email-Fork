export class ProgramScheduleData {
    SchedulePK: number
    ProgramPK: number    
    Start: string
    End: string
    MaximumParticipant: number
    CurrentNumberParticipant: number
    CreatedBy: number
    IsActive: boolean

    constructor(nSchedulePK: number, nProgramPK: number, nStartTime: string,
        nEndTime: string, nMaximumParticipant: number, ncurrentNumberParticipant: number, nIsActive: boolean, nCreatedby: number, nCreatedDate: string){
            this.SchedulePK = nSchedulePK
            this.ProgramPK = nProgramPK
            this.Start = nStartTime
            this.End = nEndTime
            this.MaximumParticipant = nMaximumParticipant
            this.CurrentNumberParticipant = ncurrentNumberParticipant
            this.IsActive = nIsActive
            this.CreatedBy = nCreatedby
    }
}