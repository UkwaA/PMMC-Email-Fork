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
    CreatedBy: boolean;
    CreatedDate: boolean;
    OrganizationName: boolean;
    GradeLevel: boolean;
    ScoutProgram: boolean;
    TeacherName: boolean;
    TeacherEmail: boolean;
    TeacherPhoneNo: boolean;
    PowerPoint: boolean; //added//

    constructor (AdultQuantity: boolean, Age57Quantity: boolean, Age810Quantity: boolean, Age1113Quantity: boolean,
        TotalQuantity: boolean, Price: boolean, Deposit: boolean, EducationFK: boolean, ProgramRestriction: boolean, 
        DepositAmount: boolean, FullAmount: boolean, MaximumParticipant: boolean, CreatedBy: boolean, CreatedDate: boolean, 
        OrganizationName: boolean, GradeLevel: boolean, ScoutProgram: boolean, TeacherName: boolean, TeacherEmail: boolean, 
        TeacherPhoneNo: boolean, PowerPoint: boolean){
            this.AdultQuantity = AdultQuantity;
            this.Age57Quantity = Age57Quantity;
            this.Age810Quantity = Age810Quantity;
            this.Age1113Quantity = Age1113Quantity;
            this.TotalQuantity = TotalQuantity;
            this.Price = Price; 
            this.Deposit = Deposit; /*????*/
            this.EducationFK = EducationFK; /*????*/
            this.ProgramRestriction = ProgramRestriction; /*????*/
            this.DepositAmount = DepositAmount; /*????*/
            this.FullAmount = FullAmount; /*????*/
            this.MaximumParticipant = MaximumParticipant;/*????*/
            this.CreatedBy = CreatedBy; /*????*/
            this.CreatedDate = CreatedDate; /*????*/
            this.OrganizationName = OrganizationName;
            this.GradeLevel = GradeLevel;
            this.ScoutProgram = ScoutProgram;
            this.TeacherName = TeacherName;
            this.TeacherEmail = TeacherEmail;
            this.TeacherPhoneNo = TeacherPhoneNo;
            this.PowerPoint = PowerPoint;

        
    }
}