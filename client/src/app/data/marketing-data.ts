export class MarketingData {
    MarketingPK: number;
    ProgramPK: number;
    UserPK: number;
    MarketingContentPK: number;
    Memo: string;

    constructor(ProgramPK: number, UserPK:number, MarketingContentPK:number, Memo:string) {
        this.MarketingPK = 0,
        this.ProgramPK = ProgramPK,
        this.UserPK = UserPK,
        this.MarketingContentPK = MarketingContentPK,
        this.Memo = Memo;
    }
}
