/*Сдаю с опозданием, разбор д\з из следующего вебинара еще не смотрел, делал только своей головой*/

//  Задание 1 скопировать массив
let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];
console.log(a);

let b = a.slice();
console.log(b);

let c = b.slice();
c.reverse();
console.log(c);

//Задание 2
let basket;
basket = [{id: 1111, productName: 'prodact1', amount: 1, price: 20},
          {id: 2222, productName: 'prodact2', amount: 5, price: 10},
          {id: 3333, productName: 'prodact3', amount: 0, price: 15},
          {id: 4444, productName: 'prodact4', amount: 2, price: 334}];

function countBasketPrice(arr) {
    let basketSum = 0;
    arr.forEach( function (item) {
        basketSum = basketSum + item.amount * item.price;

    } )
return basketSum;
}

console.log(countBasketPrice(basket));


//Задание 3
for (i = 1; i <= 9; console.log(i++)) {}

//Задание 4
for (i = 1, string = "*"; i <= 20; i++, string = string + "*") {
    console.log(string);
}

