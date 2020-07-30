interface IDataValidatorObject {
    errorMessage: string;
    errorType: string;
}


export class DataValidator    {

   private data: object;
   private benchmark: object;

   private dataValidatorObject: IDataValidatorObject = { errorMessage: "", errorType: ""};

   constructor(data: object, benchmark: object) {
    this.data = data;
    this.benchmark = benchmark;
    this.validateInput();
   }


   validateInput(): string | boolean {
       let data = this.data;
       let benchmark = this.benchmark;

    if(data === null || benchmark === null) {
        return `Expected ${data || benchmark} to be an 'object'  but recieved 'null'`;
    } else if (data === undefined || benchmark === undefined){
        return `Expected ${data || benchmark} to be an 'object'  but recieved 'undefined'`;
        
    } else if(typeof(data) != 'object' || typeof(benchmark) != 'object') {
        return `Invalid Data Type. Expected ${data || benchmark} to be an 'object'`;

    }

    if(JSON.stringify(data) !== JSON.stringify(benchmark)) {

        this.dataValidatorObject.errorType = `Equality Failed `;
        this.dataValidatorObject.errorMessage = `Provided data and benchmark objects didnt match.`;

        return JSON.stringify(this.dataValidatorObject);
    }

    this.dataValidatorObject.errorType = `Equality Passed`;
    this.dataValidatorObject.errorMessage = `Provided data and benchmark were exact match.`;

    return true;
   }





};