const shiftArray = require('../shift-array.js');

const testArr = [0,1,2,3,4,5,6,7,8];
const testArrAns = [0,1,2,3,4,100,5,6,7,8];
const testArrTwo = [0,1,2,3,4,5,6,7,8,9];
const testArrTwoAns = [0,1,2,3,4,100,5,6,7,8,9];

const value = 100;

describe('insertShiftArray', () => {
  test('Function should return an array with the value inserted in the middle of an odd length array, where the inserted element will be at the midpoint plus +1 since the resulting length will be even.', ()=>{
    expect(insertShiftArray(testArr)).toEqual(testArrAns);
  })

  test('Function should return an array with the value inserted in the middle of an even length array.', ()=>{
    expect(insertShiftArray(testArr)).toEqual(testArrAns);
  })
})
