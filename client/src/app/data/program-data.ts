export class ProgramData {
    title:string;
    description: string;
    imageURL: string;
    url: string;

    constructor(nTitle:string, nDescription:string, nImageURL:string, nURL:string){
        this.title = nTitle;
        this.description = nDescription;
        this.imageURL = nImageURL;
        this.url = nURL;
    }
}