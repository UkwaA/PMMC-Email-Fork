export class UserData {
    UserPk: number
    Username: string
    Password: string
    Role_FK: string
    Email: string
    CreatedDate: string
    IsActive: boolean

    constructor(nUserPK:number, nUsername:string, nPassword:string, nRolePK:string, nEmail: string, nCreatedDate: string, nIsActive: boolean){
        this.UserPk = nUserPK;
        this.Username = nUsername;
        this.Password = nPassword;
        this.Role_FK = nRolePK;
        this.Email = nEmail;
        this.CreatedDate = nCreatedDate;
        this.IsActive = nIsActive;
    }
}