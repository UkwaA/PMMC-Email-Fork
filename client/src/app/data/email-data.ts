export class EmailData {
    EmailPK: number;
    Type: string;
    Subject: string;
    Body: string;
    IsActive: boolean;
    HasAttachments: number;
    AttachmentNames: string;

    constructor(nEmailPK: number, nType: string, nSubject: string, nBody: string, nIsActive: boolean, 
                nHasAttachments: number , nAttachmentNames: string) {
        this.EmailPK = nEmailPK,
        this.Type = nType,
        this.Subject = nSubject,
        this.Body = nBody,
        this.IsActive = nIsActive;
        this.HasAttachments = nHasAttachments;
        this.AttachmentNames = nAttachmentNames;
    }
}
