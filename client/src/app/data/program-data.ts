export class ProgramData {
    ProgramPk: number
    Name: string
    Description: string
    FullAmount: number
    CreatedDate: string
    CreatedBy: number
    ImgData: any
    ProgramType: number
    IsActive: boolean

    constructor(nTitle:string, nDescription:string, nImageURL:string, nURL:string, price: number){
        this.ProgramPk = 0;
        this.Name = nTitle;
        this.Description = nDescription;
        this.FullAmount = price;
        this.ImgData = nImageURL;
    }
}