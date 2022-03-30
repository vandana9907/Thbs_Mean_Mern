let myArr = ['hello', 'how', 'are', 'you'];
//trandiational for loop inside javascript
for (let i = 0; i < myArr.length; i++) {
    console.log(`for loop number ${i} array val at iteration "${myArr[i]}"`)
}

// forEach();
console.log('starting loop with forEach method');
myArr.forEach((ele, index, arr) => {
    console.log(`for loop number ${index} array val at iteration "${ele}"--> ${arr}`)
});

//filtere element base on condition 
let numberList = [200, 40, 15, 51, 22, 7];

let elemeless_5 = numberList.filter((val, indx, arr) => {
    // on what we want filter elemnts
    console.log(val, indx, arr)
    return val > 5;
});
// [20, 15, 7]
console.log(elemeless_5);

//filter array of object
let personList = [
    {name: 'Vandana',skills:['java']},
    {name: 'Chnnu', skills:['java','javascript','html','css']},
    {name: 'Bharath', skills:['java','html','css']},
     {name: 'Siri', skills:['java','html']},
];
let filteredPerson = personList.filter((val, indx) => {
    // console.log(val)
    return val.name.startsWith('C');
    // return val.skill.includes('css'); // true or false 
});

console.log('========Fillter Result=======');
console.log(filteredPerson)