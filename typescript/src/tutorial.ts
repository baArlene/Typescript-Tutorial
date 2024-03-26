
let greeting = "Hello, Typescript";
greeting = greeting.toUpperCase()

let age = 36
age = age + 10

let isAdult = age >= 18
isAdult = !isAdult

console.log(isAdult);

let tax: number | string = 15;
tax = 100;
tax = 'R100'


let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: string | number = 10;
discount = '10%'

let prices:number[] = [100, 90, 75]

let fruit:string[] = ['apple', 'orange']


let emptyValues:number[] = [];

let names = ['peter', 'john', 'regis', 10]


// objects & func

let car:{brand:string; year: number} = {brand: 'audi', year: 2021}

let book = {title: 'Clear In the rain', cost: 200}
let pencil = {title: 'Bic', cost: 25}
let ruler = {title: 'Tape'}

let items:{title:string; cost?:number}[] = [book, pencil, ruler]

let itemsPlus = [book, pencil, ruler]


// Functions

const nameList = ['john', 'joe', 'mary', 'jim']

function isNameInList(name:string){
    return nameList.includes(name)
}

let nameToCheck = 'jim'

if (isNameInList(nameToCheck)) {
    console.log(`${nameToCheck} is in the list`);
    
} else {
    console.log(`${nameToCheck} is not the list`);
    
}
