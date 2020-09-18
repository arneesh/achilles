export declare class DataValidator {
    private data;
    private benchmark;
    private dataValidatorObject;
    constructor(data: object, benchmark: object);
    validateInput(): string | boolean;
    static compareObjectKeys(object1: object, object2: object): boolean | string;
}
