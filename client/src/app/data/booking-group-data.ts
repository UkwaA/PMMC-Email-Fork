export class BookingGroupData {
    GroupProgramPK: number;
    SubProgramPK: number;
    AdultQuantity: boolean;
    Age57Quantity: boolean;
    Age810Quantity: boolean;
    Age1112Quantity: boolean;
    Age1314Quantity: boolean;
    Age1415Quantity: boolean;
    Age1517Quantity: boolean;
    TotalQuantity: boolean;
    ProgramRestriction: boolean;
    OrganizationName: boolean;
    GradeLevel: boolean;
    TeacherName: boolean;
    TeacherEmail: boolean;
    TeacherPhoneNo: boolean;
    AlternativeDate: boolean;
    EducationPurpose: boolean;
    CreatedBy: number;
    CreatedDate: Date;

    constructor (AdultQuantity: boolean, 
                Age57Quantity: boolean,
                Age810Quantity: boolean,
                Age1112Quantity: boolean,
                Age1314Quantity: boolean,
                Age1415Quantity: boolean,
                Age1517Quantity: boolean,
                TotalQuantity: boolean, 
                ProgramRestriction: boolean, 
                OrganizationName: boolean, 
                GradeLevel: boolean, 
                TeacherName: boolean, 
                TeacherEmail: boolean, 
                TeacherPhoneNo: boolean,
                AlternativeDate: boolean,
                EducationPurpose: boolean){
            this.AdultQuantity = AdultQuantity;
            this.Age57Quantity = Age57Quantity;
            this.Age810Quantity = Age810Quantity;
            this.Age1112Quantity = Age1112Quantity;
            this.Age1314Quantity = Age1314Quantity;
            this.Age1415Quantity = Age1415Quantity;
            this.Age1517Quantity = Age1517Quantity;
            this.TotalQuantity = TotalQuantity;
            this.ProgramRestriction = ProgramRestriction;
            this.OrganizationName = OrganizationName;
            this.GradeLevel = GradeLevel;
            this.TeacherName = TeacherName;
            this.TeacherEmail = TeacherEmail;
            this.TeacherPhoneNo = TeacherPhoneNo;
            this.AlternativeDate = AlternativeDate;
            this.EducationPurpose = EducationPurpose;
    }
}