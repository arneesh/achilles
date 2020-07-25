"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataValidator_1 = require("./components/errors/DataValidator");
console.log("Achilles Setup");
var item = new DataValidator_1.DataValidator({ name: 'arn' }, { name: 'arn' });
console.log("Item", item);
console.log("Testing equality", item.validateInput());
