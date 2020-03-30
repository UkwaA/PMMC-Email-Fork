export class AppConstants {
    public static get BASE_URL(): string { return "http://localhost:4200/"; }
    public static get EXPRESS_SERVER_URL(): string { 
       // return (window.location.origin.toString() + "/"); 
        return "http://localhost:3000/";
        //return "http://ec2-54-219-216-92.us-west-1.compute.amazonaws.com:3000/";
    }
    public static get ERR_USER_NOT_FOUND(): string { return "http://localhost:4200/api"; }
    public static get ERR_EMAIL_NOT_FOUND(): string { return "http://localhost:4200/api"; }
    public static get ERR_EMAIL_DUPLICATE(): string { return "http://localhost:4200/api"; }
    public static get ERR_WRONG_PASSWORD(): string { return "http://localhost:4200/api"; }
    

}