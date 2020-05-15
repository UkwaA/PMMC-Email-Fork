export class IndividualEmailData {
    UserPK: number;
    SchedulePK: number;
    ResPK: number;
    ProgramPK: number;
    ProgramName: string;
    Deposit: number;

    constructor(nUserPK: number, nSchedulePK: number, nResPK: number,
        nProgramPK, nProgramName: string, nDeposit: number) {
        this.UserPK = nUserPK,
        this.SchedulePK = nSchedulePK,
        this.ResPK = nResPK,
        this.ProgramPK = nProgramPK,
        this.ProgramName = nProgramName
        this.Deposit = nDeposit;
    }
}
