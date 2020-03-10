export class ProgramData {
    ProgramPk: number
    Name: string
    Description: string
    DepositAmount: number
    PricePerParticipant: number
    MaximumParticipant: number
    ImgData: any
    ProgramType: number
    CreatedDate: string
    CreatedBy: number
    IsActive: boolean
    SubProgramPk: number

    constructor(nTitle:string,
                nDescription:string, 
                nImageURL:string, 
                deposit: number,
                price:number,
                participant: number){
        this.ProgramPk = 0;
        this.Name = nTitle;
        this.Description = nDescription;
        this.DepositAmount = deposit;
        this.PricePerParticipant = price;
        this.MaximumParticipant = participant;
        this.ImgData = nImageURL;
    }
}