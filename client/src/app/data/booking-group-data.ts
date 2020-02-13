export class BookingGroupData {
    GroupProgramPK: number;
    ProgramFK: number;
    AldultQuantity: number;
    Age57Quantity: number;
    Age810Quantity: number;
    Age1113Quantity: number;
    TotalQuantity: number;
    Price: number;
    Deposit: number;
    EducationFK: number;
    ProgramRestriction: string;
    DepositAmount: number;
    FullAmount: boolean;
    MaximumParticipant: number;
    CreatedBy: string;
    CreateDate: Date;
    OrganizationName: string;
    GradeLevel: number;
    ScoutProgram: string;
    TeacherName: string;
    TeacherEmail: string;
    TeacherPhoneNo: number;

    constructor (){
        
    }
}