

//es5 / old way
let getPersonInfo = () => {
    return {
        op: 'plus',
        lhs: 'left-side',
        rhs: 'right-side'
    }
}

var tmp = getPersonInfo();
// console.log(tmp);
// var op = tmp.op;
// var lhs = tmp.lhs;
// var rhs = tmp.rhs;

//short ES 6 -- object de-struct 
//[] {}
let { op, lhs, rhs } = getPersonInfo(); //object 
console.log(op, lhs, rhs);


let cmpy = {
    name_ss: 'thbs',
    noOfEmp: 100,
    foundation: 'March 2020',
    address: {
        premant: {
            city: 'nellore'
        },
        current: {
            city: 'nellore',
            pin: 524315
        }
    }
};

//cmpy.address.current.city// 
//cmpy.address.current.pin// 
//cmpy.address.current.abc// 


//nested object property destructiing 
let {
    noOfEmp,
    foundation,
    address: { premant: { city } },
    address: { current: { pin } }
} = cmpy;

console.log(noOfEmp, foundation, city, pin);
