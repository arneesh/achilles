"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataValidator = void 0;
var DataValidator = /** @class */ (function () {
    function DataValidator(data, benchmark) {
        this.dataValidatorObject = { errorMessage: "", errorType: "" };
        this.data = data;
        this.benchmark = benchmark;
        this.validateInput();
    }
    DataValidator.prototype.validateInput = function () {
        var data = this.data;
        var benchmark = this.benchmark;
        if (data === null || benchmark === null) {
            return "Expected " + (data || benchmark) + " to be an 'object'  but recieved 'null'";
        }
        else if (data === undefined || benchmark === undefined) {
            return "Expected " + (data || benchmark) + " to be an 'object'  but recieved 'undefined'";
        }
        else if (typeof (data) != 'object' || typeof (benchmark) != 'object') {
            return "Invalid Data Type. Expected " + (data || benchmark) + " to be an 'object'";
        }
        if (JSON.stringify(data) !== JSON.stringify(benchmark)) {
            this.dataValidatorObject.errorType = "Equality Failed ";
            this.dataValidatorObject.errorMessage = "Provided data and benchmark objects didnt match.";
            return JSON.stringify(this.dataValidatorObject);
        }
        this.dataValidatorObject.errorType = "Equality Passed";
        this.dataValidatorObject.errorMessage = "Provided data and benchmark were exact match.";
        return true;
    };
    DataValidator.compareObjectKeys = function (object1, object2) {
        if (object1 === null || object2 === null) {
            return "Expected " + (object1 || object2) + " to be an 'object'  but recieved 'null'";
        }
        else if (object1 === undefined || object2 === undefined) {
            return "Expected " + (object1 || object2) + " to be an 'object'  but recieved 'undefined'";
        }
        else if (typeof (object1) != 'object' || typeof (object2) != 'object') {
            return "Invalid Data Type. Expected " + (object1 || object2) + " to be an 'object'";
        }
        var object1Keys = Object.keys(object1).sort();
        var object2Keys = Object.keys(object2).sort();
        return JSON.stringify(object1Keys) === JSON.stringify(object2Keys);
    };
    return DataValidator;
}());
exports.DataValidator = DataValidator;
;
