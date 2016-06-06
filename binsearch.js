var binsearch = function (arr, val, high, low) {
  console.log('call');
  if(low >= high){ console.log('not');return -1; }
  var mid = 1 + parseInt((low + high) / 2);
  console.log(low, mid, high);
  console.log(val, arr[low], arr[mid], arr[high]);
  if( val < arr[mid] ){
    console.log('low');
    return binsearch(arr, val, mid - 1, low);
  }else if( val > arr[mid] ){
    console.log('high');
    return binsearch(arr, val, high, mid + 1);
  }else if( val == arr[mid] ){
    console.log('equal');
    return arr[mid];
  }
  console.log('failed');
  return -1;
}

var arr = [1, 3, 4, 6, 10, 13, 17, 21, 31];
console.log(binsearch(arr, 1, arr.length  - 1 , 0));
