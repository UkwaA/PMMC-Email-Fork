export class AppConstants {
    public static get BASE_URL(): string { return "http://localhost:4200/"; }
    public static get EXPRESS_SERVER_URL(): string { 
        return "http://localhost:3000/";
        //return "http://ec2-54-219-216-92.us-west-1.compute.amazonaws.com:3000/";
    }
    public static get ERR_USER_NOT_FOUND(): string { return "http://localhost:4200/api"; }
    public static get ERR_EMAIL_NOT_FOUND(): string { return "http://localhost:4200/api"; }
    public static get ERR_EMAIL_DUPLICATE(): string { return "http://localhost:4200/api"; }
    public static get ERR_WRONG_PASSWORD(): string { return "http://localhost:4200/api"; }
    
    public static PROGRAM_TYPE_CODE = {
        GROUP_PROGRAM: "0",
        INDIVIDUAL_PROGRAM: "1"
    }

    public static PROGRAM_TEXT = {
        GROUP_PROGRAM: "Group Program",
        INDIVIDUAL_PROGRAM: "Individual Program"
    }
  
    public static USER_ROLE = {
        CUSTOMER: "1",
        MANAGER: "2",
        SYSTEM: "3"
    }
    
    public static SUB_GROUP_PROGRAM_TEXT = {
        SCOUT_PROGRAM:  "Scout Program",
        FIELD_TRIP: "Field Trip"
    }

    public static SUB_PROGRAM_CODE = {
        FIELD_TRIP: "1",
        SCOUT_PROGRAM: "2"
    }

}