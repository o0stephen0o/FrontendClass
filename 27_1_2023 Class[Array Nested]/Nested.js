//If inside While Loop

var i = 0; // global scope

while (i < 10) {
    if(i == 5){
      i++
      break;
    }
    console.log(i);
    i++;
}
 
//output: 0, 1, 2, 3, 4

//If inside For Loop

var j = 0; // global scope
for (j = 0; j < 10; j++) {
    if(j == 5){
      j++
      break;
    }
    console.log(j);
}

//output: 0, 1, 2, 3, 4
