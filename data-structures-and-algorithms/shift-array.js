const insertShiftArray = (arr, value) => {

  const midPointIndex = Math.floor(arr.length/2);
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if(i < midPointIndex){
      result[i] = arr[i];
    } else if( i === midPointIndex){
      result[i] = value;
    } else {
      result[i] = arr[i-1];
    }
  }
  return result;
}

console.log(insertShiftArray([0,1,2,3,4,5,6], 100));
console.log(insertShiftArray([0,1,2,3,4,5], 100));
