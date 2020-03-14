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

  constructor() {
    this.GroupProgramPK = 0;
    this.AdultQuantity = true;
    this.Age57Quantity = true;
    this.Age810Quantity = true;
    this.Age1112Quantity = true;
    this.Age1314Quantity = true;
    this.Age1415Quantity = true;
    this.Age1517Quantity = true;
    this.TotalQuantity = true;
    this.ProgramRestriction = true;
    this.OrganizationName = true;
    this.GradeLevel = true;
    this.TeacherName = true;
    this.TeacherEmail = true;
    this.TeacherPhoneNo = true;
    this.AlternativeDate = true;
    this.EducationPurpose = true;
    this.CreatedBy = 0;
    this.CreatedDate = new Date();
  }
}
