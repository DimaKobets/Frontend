
// Task 1 ____________________
console.log("Task - 1");

function filterArray (numbers, min, max){

    var result = [];
    var j = 0;

    for (var i = 0; i < numbers.length; i++){

        if (numbers[i] >= min && numbers[i] <= max){
            result[j] = numbers[i];
            j++;            
        }

    }
    return result;
}

var someArray = [2, 1, 5, 6, 8, 9, 3, 7, 4, 10, 11];
console.log("Array before filtering: " + someArray);

var newArray = filterArray(someArray, 3, 6);
console.log("Array after filtering(from 3 to 6): " + newArray);

// Task 2 ____________________
console.log("Task - 2");

function isObjectEmpty(obj){

    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            return false;
        }            
    }
    return true;
}

function showMessage (expression){
    if (expression){
        console.log("object is empty")
    }
    else{
        console.log("object is NOT empty")  
    }
}

obj1 = {};
obj2 = {
    param1: 100
};

showMessage(isObjectEmpty(obj1));
showMessage(isObjectEmpty(obj2));

// Task 3 ____________________
console.log("Task - 3");

function keysOfObject (obj){

    var arrayOfKeys = [];
    var i = 0;

    for (var key in obj){
        arrayOfKeys[i] = obj[key];
        i++;
    }
    return arrayOfKeys;
}

object1 = {
    prop1: 1,
    prop2: 12,
    prop3: 123,
    prop4: "lastKey"
};

console.log("Keys of object: " + keysOfObject(object1));

  