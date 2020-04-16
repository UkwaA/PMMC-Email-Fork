export class ReservationGroupDetails {
    ReservationPK: number;
    ProgramPK: number;
    AdultQuantity: number;
    Age57Quantity: number;
    Age810Quantity: number;
    Age1112Quantity: number;
    Age1314Quantity: number;
    Age1415Quantity: number;
    Age1517Quantity: number;
    TotalQuantity: number;
    ProgramRestriction: string;
    OrganizationName: string;
    GradeLevel: string;
    TeacherName: string;
    TeacherEmail: string;
    TeacherPhoneNo: string;
    AlternativeDate: Date;
    EducationPurpose: string;
    CreatedBy: number;
    CreatedDate: Date;
  
    constructor() {
      this.ReservationPK = 0;
      this.ProgramPK = 0;
      this.AdultQuantity = 0;
      this.Age57Quantity = 0;
      this.Age810Quantity = 0;
      this.Age1112Quantity = 0;
      this.Age1314Quantity = 0;
      this.Age1415Quantity = 0;
      this.Age1517Quantity = 0;
      this.TotalQuantity = 0;
      this.ProgramRestriction = "";
      this.OrganizationName = "";
      this.GradeLevel = "";
      this.TeacherName = "";
      this.TeacherEmail = "";
      this.TeacherPhoneNo = "";
      this.AlternativeDate = null;
      this.EducationPurpose = "";
      this.CreatedBy = 0;
      this.CreatedDate = new Date();
    }
  }
  