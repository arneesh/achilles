import { DataValidator } from './components/errors/DataValidator';

console.log("Achilles Setup");

let item = new DataValidator({name:'arn'}, {name:'arn'});

console.log("Item", item);

console.log("Testing equality", item.validateInput())

