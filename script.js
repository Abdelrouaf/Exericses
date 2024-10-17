const arrayNum = document.getElementById('arrayNum')
const arrayStr = document.getElementById("arrayStr")

const nums = [1, 2, 3, 4, 5, 6, 6]
const string = 'Web Master'

arrayNum.innerHTML = nums
arrayStr.innerHTML = string

// Exercise One ( Filtering an array )
function pickEvenNumbers(array) {
    let arr = []
    for (var i = 0; i < array.length; i++) {
        if ( array[i] % 2 === 0 ) {
            arr.push(array[i])
        }
    }
    return arr;
}

document.getElementById("even-numbers").innerText = pickEvenNumbers(nums).join(", ");

// Exercise Two ( Find the Largest Number )
function findLargestNum(array) {
    let largest = array[0];
    for ( var i = 0; i < array.length; i++ ) {
        if ( array[i] > largest ) {
            largest = array[i]
        } 
    }
    return largest 
}

document.getElementById("largest-number").innerText = findLargestNum(nums);

// Exercise Three ( Reverse a String )
function reverseString(str) {
    let string = ''
    for ( var i = str.length - 1; i >= 0; i-- ) {
        string += str[i]
    }
    return string

}

document.getElementById("reversed-string").innerText = reverseString(string);

// Exercise Four ( Remove Duplicates )
function removeDuplicatesNums(arr) {
    for ( var i = 0; i < arr.length; i++ ){
        for ( var j = i + 1; j < arr.length; j++ ) {
            if ( arr[i] === arr[j] ) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}

document.getElementById("after-duplicates").innerText = removeDuplicatesNums([...nums]).join(", ");

// **************** //

