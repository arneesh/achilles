export declare class DataValidator {
    private data;
    private benchmark;
    private dataValidatorObject;
    constructor(data: object, benchmark: object);
    validateInput(): string | boolean;
}
