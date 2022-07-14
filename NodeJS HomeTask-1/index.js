const operation=process.argv[2];
const arr=process.argv;

let result=0;

if (operation === "addition"){
    for (let index = 3; index < arr.length; index++) {
        result=result+parseInt(arr[index]);
    }
    console.log(result);
}
else if(operation === "subtraction"){
    result=parseInt(arr[3])-parseInt(arr[4]);
    console.log(result);
}
else if(operation === "multiply"){
    result=1;
    for (let index = 3; index < arr.length; index++) {
        result=result*parseInt(arr[index]);
    }
    console.log(result);
}
else if(operation === "division"){
    if(arr[4]==='0'){
        console.log("Divide by zero is invalid");
    }
    else{
        result=parseInt(arr[3])/parseInt(arr[4]);
        console.log(result);
    }
}
else{
    console.log("Invalid Operation or Unsupported ");
}