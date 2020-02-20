export class UserData {
    UserPk: number
    Username: string
    Password: string
    Role_FK: string
    Email: string
    CreatedDate: string

    constructor(nUserPK:number, nUsername:string, nPassword:string, nRolePK:string, nEmail: string, nCreatedDate: string){
        this.UserPk = nUserPK;
        this.Username = nUsername;
        this.Password = nPassword;
        this.Role_FK = nRolePK;
        this.Email = nEmail;
        this.CreatedDate = nCreatedDate;
    }
}