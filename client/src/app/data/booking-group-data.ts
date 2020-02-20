export class BookingGroupData {
    GroupProgramPK: number;
    ProgramFK: number;
    AdultQuantity: boolean;
    Age57Quantity: boolean;
    Age810Quantity: boolean;
    Age1113Quantity: boolean;
    TotalQuantity: boolean;
    Price: boolean;
    Deposit: boolean;
    EducationFK: boolean;
    ProgramRestriction: boolean;
    DepositAmount: boolean;
    FullAmount: boolean;
    MaximumParticipant: boolean;
    CreatedBy: number;
    CreatedDate: Date;
    OrganizationName: boolean;
    GradeLevel: boolean;
    ScoutProgram: boolean;
    TeacherName: boolean;
    TeacherEmail: boolean;
    TeacherPhoneNo: boolean;

    constructor (AdultQuantity: boolean, Age57Quantity: boolean, Age810Quantity: boolean, Age1113Quantity: boolean,
        TotalQuantity: boolean, Price: boolean, Deposit: boolean, EducationFK: boolean, ProgramRestriction: boolean, 
        DepositAmount: boolean, FullAmount: boolean, MaximumParticipant: boolean, OrganizationName: boolean, 
        GradeLevel: boolean, ScoutProgram: boolean, TeacherName: boolean, TeacherEmail: boolean, TeacherPhoneNo: boolean){
            this.AdultQuantity = AdultQuantity;
            this.Age57Quantity = Age57Quantity;
            this.Age810Quantity = Age810Quantity;
            this.Age1113Quantity = Age1113Quantity;
            this.TotalQuantity = TotalQuantity;
            this.Price = Price;
            this.Deposit = Deposit; 
            this.EducationFK = EducationFK; 
            this.ProgramRestriction = ProgramRestriction;
            this.DepositAmount = DepositAmount;
            this.FullAmount = FullAmount; 
            this.MaximumParticipant = MaximumParticipant;
            this.OrganizationName = OrganizationName;
            this.GradeLevel = GradeLevel;
            this.ScoutProgram = ScoutProgram;
            this.TeacherName = TeacherName;
            this.TeacherEmail = TeacherEmail;
            this.TeacherPhoneNo = TeacherPhoneNo;
    }
}