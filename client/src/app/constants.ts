import { MatDialogConfig } from "@angular/material";

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

    public static get LOGIN_DIALOG_CONFIG(): MatDialogConfig {
        const loginDialogConfig = new MatDialogConfig();
        loginDialogConfig.id = "modal-component";
        loginDialogConfig.minHeight = "450px";
        loginDialogConfig.width = "400px";
        loginDialogConfig.autoFocus = false;
        loginDialogConfig.data = {
          routerRedirect: false
         };
        return loginDialogConfig;
    }

    public static get SYSTEM_USER_PK(): number { return 6868; }
    //Set additional session's ScheduleSettingPK to 0
    public static get ADDITIONAL_SESSION_DETAIL(): number { return 0; }
    
    public static PROGRAM_TYPE_CODE = {
        GROUP_PROGRAM: 0,
        INDIVIDUAL_PROGRAM: 1
    }

    public static PROGRAM_TEXT = {
        GROUP_PROGRAM: "Group Program",
        INDIVIDUAL_PROGRAM: "Individual Program"
    }
  
    public static RESERVATION_STATUS_CODE = {
        ON_GOING: 1,
        ATTENDED: 2,
        COMPLETED: 3,
        CANCELLED: 4
    }

    public static RESERVATION_STATUS_TEXT = {
        ON_GOING: "On Going",
        ATTENDED: "Attended",
        COMPLETED: "Completed",
        CANCELLED: "Cancelled"
    }
    public static USER_ROLE = {
        CUSTOMER: 1,
        MANAGER: 2,
        SYSTEM: 3
    }
    
    public static SUB_GROUP_PROGRAM_TEXT = {
        FIELD_TRIP: "Field Trip",
        SCOUT_PROGRAM:  "Scout Program"
    }

    public static SUB_PROGRAM_CODE = {
        FIELD_TRIP: 1,
        SCOUT_PROGRAM: 2
    }

}