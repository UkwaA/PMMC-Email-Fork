import { MatDialogConfig } from '@angular/material';

export class AppConstants {
  public static get BASE_URL(): string {
    return 'http://localhost:4200/';
  }
  public static get EXPRESS_SERVER_URL(): string {
    return 'http://localhost:3000/';
    // return "http://ec2-54-153-55-225.us-west-1.compute.amazonaws.com:8080/";
  }

  public static get LOGIN_DIALOG_CONFIG(): MatDialogConfig {
    const loginDialogConfig = new MatDialogConfig();
    loginDialogConfig.id = 'modal-component';
    loginDialogConfig.minHeight = '550px';
    loginDialogConfig.width = '450px';
    loginDialogConfig.autoFocus = false;
    loginDialogConfig.data = {
      routerRedirect: false,
    };
    return loginDialogConfig;
  }

  public static get SYSTEM_USER_PK(): number {
    return 6868;
  }

  // Set additional session's ScheduleSettingPK to 0
  public static get ADDITIONAL_SESSION_DETAIL(): number {
    return 0;
  }

  public static PROGRAM_TYPE_CODE = {
    GROUP_PROGRAM: 0,
    INDIVIDUAL_PROGRAM: 1,
  };

  public static PROGRAM_TEXT = {
    GROUP_PROGRAM: 'Group Program',
    INDIVIDUAL_PROGRAM: 'Individual Program',
  };

  public static RESERVATION_STATUS_CODE = {
    ON_GOING: 1,
    ATTENDED: 2,
    COMPLETED: 3,
    CANCELLED: 4,
    PENDING: 5
  };

  public static RESERVATION_STATUS_TEXT = {
    ON_GOING: 'On Going',
    ATTENDED: 'Attended',
    COMPLETED: 'Completed',
    CANCELLED: 'Cancelled',
    PENDING: 'Pending'
  };

  public static PAYMENT_TYPE_CODE = {
    CARD: 1,
    CASH: 2,
    CHECK: 3,
  };

  public static PAYMENT_TYPE_TEXT = {
    CARD: 'Card',
    CASH: 'Cash',
    CHECK: 'Check',
  };

  public static USER_ROLE_CODE = {
    CUSTOMER: 1,
    MANAGER: 2,
    SYSTEM: 3,
    SCHOOL: 4
  };

  public static SUB_GROUP_PROGRAM_TEXT = {
    FIELD_TRIP: 'Field Trip',
    SCOUT_PROGRAM: 'Scout Program',
    DISTANCE_LEARNING: 'Distance Learning',
    SPECIAL_FIELD_TRIP: 'Specialty Field Trips'
  };

  public static SUB_PROGRAM_CODE = {
    FIELD_TRIP: 1,
    SCOUT_PROGRAM: 2,
    DISTANCE_LEARNING: 3,
    SPECIAL_FIELD_TRIP: 4
  };

  public static MARKETTING_INFO = {
    PMMC_SITE: 'PMMC Website',
    ADS: 'Advertisement',
    FRIEND: 'Friend/Family',
    ONLINE: 'Online Search',
    EMAIL: 'Email',
    OTHER: 'Other'
  }
}
