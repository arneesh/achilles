import { DataValidator } from './components/errors/DataValidator';

console.log("Achilles Setup");

let item = new DataValidator({name:'arn'}, {name:'arn'});

// console.log("Item", item);

console.log("Testing equality", item.validateInput())


console.log("Testing equality Instance methods", DataValidator.compareObjectKeys({name:'arn'}, {name:'arn'}))



