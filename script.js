/* JavaScript code here */
console.log("External Javascript")

//Task 2: Array Sum
function sum(arr){
    var sum = 0;
    arr.forEach(function(item, index){
        sum = sum + item;
    });
    return sum;
}

console.log(sum([1, 2, 3, 4]))

//Task 3: RegExp

function validateEmail(email){
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

}

var checkEmail = validateEmail('1511081@iub.edu.bd');
console.log(checkEmail);
console.log(validateEmail('asdasdaddsada.com'));
console.log(validateEmail('asd...3////'));