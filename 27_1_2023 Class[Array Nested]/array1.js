var Array1 = ["a", "b" ,"c"];

//function list the index 2 of the array
function getArrayIndexValue() {
    console.log(Array1[2]);
}

function getArrayLength() {
    console.log(Array1.length);
}

function pushArray(value) {
    Array1.push(value);
}

function changeArrayValue(index, value) {
    Array1[index] = value;
    console.log("The Array1 index" + index + "is change to value: " + Array1[index]);
}

function deleteArrayValue(index) {
    delete Array1[index];
    console.log(Array1)
    console.log( "index " + index + "+1 is \' " +Array1[index+1] + "\'");
}

function spliceArray(index, value, replacevalue1, replacevalue2) {
    Array1.splice(index, value, replacevalue1, replacevalue2);
    console.log(Array1)
}

//Sample function for pop() Array1
function popArray(value) {
    Array1.pop(value);
    console.log(Array1)
}
    
//Sample function for shift() Array1
function shiftArray() {
    Array1.shift();
    console.log(Array1)
}

//function to slice() Array1
function sliceArray(index, value) {
    let Array2 = Array1.slice(index, value);
    Array2.push("h");
    console.log("Array2 is [" + Array2 + "]");
}


getArrayIndexValue();
getArrayLength();
pushArray("d");
console.log(Array1)
changeArrayValue(2, "e");
deleteArrayValue(2);
spliceArray(2, 1, "f", "g");
popArray("d");
shiftArray();
sliceArray(1, 3);

