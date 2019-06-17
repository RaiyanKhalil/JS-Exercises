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

//Task 3: Email Validation with regex

function validateEmail(email){
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

}

var checkEmail = validateEmail('1511081@iub.edu.bd');
console.log(checkEmail);
console.log(validateEmail('asdasdaddsada.com'));
console.log(validateEmail('asd...3////'));

//Task 4: Access object property at a scpecial index of array

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    
    function getProp(index, prop){
        return library[index][prop]
    }

    console.log(getProp(1, 'author'))

    function getReadingstatus(index){
        return library[index].readingStatus;
    }

    console.log(getReadingstatus(1))

//Task 5a: Add a new item

var cart = [ 
    {
        name: 'Shoes',
        price: 560,
        quantity: 4
    },
    {
        name: 'Regular Tees',
        price: 455.50,
        quantity: 6
    },
    {
        name: 'Socks',
        price: 65.99,
        quantity: 2
    }];

function addItem(newItem){
    cart.push(newItem);

}

addItem({
    name: 'Gloves',
    price: 200,
    quantity: 10
})

//Task 5b: Sort by a given property

function sortCart(prop){
    cart.sort(function(a, b){
        if (a[prop] < b[prop]){
            return -1;
        }
        if (a[prop] > b[prop]){
            return 1;
        }
        return 0;
    })
}

sortCart('quantity')
console.log(cart)

//Task 5c: Find Item by name

findByName = function(name){
var newArr =  cart.filter(function(item) {
    return item.name == name;
});

console.log(newArr)
}

findByName("Gloves")
findByName("Shoes")

//Task 5d: Get total cost

var totalCost = null

function getTotalCost() {
    cart.forEach(function(value, index, arry){
        totalCost += value.price;
       });
}

getTotalCost()
console.log(totalCost)
