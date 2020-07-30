import { DataValidator,  } from './DataValidator';
import { TestScheduler } from 'jest';

// Generated sample item
/**
 * @param {name: 'value'} data
 * @param {name: 'value'} benchmark
 */

// Test Objects
let item_equal = new DataValidator({name:'sample'}, {name:'sample'});
let item_unequal = new DataValidator({name:'sample'}, {name: 'sample1'});

// Tests for Data Validator

// Data Validator Test - similar objects
test('it should return boolean value true when both the data and benchmark are same', () => {
    expect(item_equal.validateInput()).toBe(true);
});

// Data Validator Test - not similar objects
test('it should return a string stating the  objects passed are not similar to sach other', () => {
    expect(item_unequal.validateInput()).toBe("{\"errorMessage\":\"Provided data and benchmark objects didnt match.\",\"errorType\":\"Equality Failed \"}")
});
