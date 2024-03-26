
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