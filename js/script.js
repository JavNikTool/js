"use strict";




const box = document.querySelector('.box');
box.addEventListener('click', () =>  {
box.classList.toggle('test');
});


let arr = ['nikita', 'sveta', 'katya', 'Gena', 1, 44, 'aleksey', -13, 441, - 3, {name: 'Кирилл', age: 25}, 42];

/* arr.forEach(i => console.log(i)); */

/* const nerArr = arr.map(element => {
    return element;
});
console.log(nerArr); */
let newArr = arr.filter(element => element <= 0 && typeof(element) != 'string');
console.log(newArr);

let arr2 = [131,1,43,5,476,245,9,5,134,345,444,23];
let max = 0;
let b = arr2.reduce( (value, item) => {
        if(value > max){
            max = value;
        }else{
            return item;
        }
},0)

console.log(max);


let arr3 = [414, -134, 43 ,12 ,52 ,63 ,-14 ,-341 ,-54 ,134 ,-4];

let new2 = arr3.map((elem, i) => {
   return elem = `значение элемента под номером ${i} равно ${elem}`;
});
box.append(arr3);
console.log(new2);



/* let nnaarr = arr3.filter(element => element <= 0);

console.log(nnaarr); */