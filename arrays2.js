//Given an array of unsorted numbers, return the index of the following 
//target if the target exists in the array. 
//If the target is not found, return null
let num = [45,12,6,89,2,5]
let targett = 6;
let left= 0;
let right = num.length-1;
let middle = Math.floor((left+right)/2);
while(num[middle]!==left<=right){
    console.log(middle);
    console.log(left);
    console.log(right);
    if(num[middle]>6){
        right=middle-1;
    }  else{
        right=middle+1;
    }
    middle=Math.floor((left+right)/2);{
    }
    return num[middle]===right-1;
    }




//Given an unsorted array of numbers return the sorted array in descending order
let arrO=[123,89,5,23,9,56]
arr = mergeSort(arr);
console.log(arr);
function findTarget(arr, target) {
      arr = mergeSort(arr);
      let left = 0;
      let right = arr.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
          return mid;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return null;
    }
    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      let mid = Math.floor(arr.length / 2);
      let left = arr.slice(0, mid);
      let right = arr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
    }
    function merge(left, right) {
      let result = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      return [...result, ...left, ...right];
    }
    let arr0 = [123, 89, 5, 23, 9, 56];
    arr = mergeSort(arr);
    console.log(arr);
  function findTarget(arr, target) {
          arr = mergeSort(arr);
          let left = 0;
          let right = arr.length - 1;
          while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
              return mid;
            } else if (arr[mid] < target) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
          }
          return null;
        }
        function mergeSort(arr) {
          if (arr.length <= 1) {
            return arr;
          }
          let mid = Math.floor(arr.length / 2);
          let left = arr.slice(0, mid);
          let right = arr.slice(mid);
          return merge(mergeSort(left), mergeSort(right));
        }
        function merge(left, right) {
          let result = [];
          while (left.length && right.length) {
            if (left[0] < right[0]) {
              result.push(left.shift());
            } else {
              result.push(right.shift());
            }
          }
          return [...result, ...left, ...right];
        }


//Given the following array, search for the following target
let target2 = 34;
          let arr2 = [1, 4, 78, 2, 67, 3];
          let index = findTarget(arr2, target);
          console.log(index);




    