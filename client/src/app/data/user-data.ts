export class UserData {
    UserPK: number
    Username: string
    Password: string
    Role_FK: number
    Email: string
    CreatedDate: string
    IsActive: boolean

    constructor(nUserPK:number, nUsername:string, nPassword:string, nRolePK:number, nEmail: string, nCreatedDate: string, nIsActive: boolean){
        this.UserPK = nUserPK;
        this.Username = nUsername;
        this.Password = nPassword;
        this.Role_FK = nRolePK;
        this.Email = nEmail;
        this.CreatedDate = nCreatedDate;
        this.IsActive = nIsActive;
    }
}