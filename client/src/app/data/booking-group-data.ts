export class BookingGroupData {
  GroupProgramPK: number;
  SubProgramPK: number;
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
