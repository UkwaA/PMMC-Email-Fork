export class EmailData{
    EmailPK: number
    Type: string
    Subject: string
    Body: string
    IsActive: boolean

    constructor(nEmailPK: number, nType: string, nSubject: string, nBody: string, nIsActive: boolean){
        this.EmailPK = nEmailPK,
        this.Type = nType,
        this.Subject = nSubject,
        this.Body = nBody,
        this.IsActive = nIsActive
    }
}