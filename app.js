const a =5;
const b =2;
let myName = "cy";

console.log(a+b);

console.log(a*b);
console.log(a/b);


console.log("My name is " + myName);

myName = "Jcy";

console.log("My New Name is " + myName);


const IamGosu = null;
let something;

console.log(IamGosu, something);


//object 

const player = {
    name: crypto,
    points : 100,
    fat: true
}


console.log(player);
player.lastName = "nico"
console.log(player);

player.points = player.points + 50;
console.log(player.points);


//function for receive
function sayHello(name, numb) {
    for(let i=0; i<numb; i++) {
console.log("Hello My name is " +name[i]);
    }
}
const names = ["nico", "cy", "backJun"];
sayHello(names, names.length);






const player2 = {
    name: "prot",
    sayHello : function(fname) {
        console.log("hello" + " " + fname+ "My name is " + player2.name);
    }
}

player2.sayHello("fasd");



const calc = {
    add: function(a,b) {
        console.log(a+b);
    },
    minus: function(a,b) {
        console.log(a-b);
    },
    divide: function(a,b) {
        console.log(a/b);
    },
    power: function(a,b) {
        console.log(a**b);
    }
}


calc.add(1,5);
calc.minus(10,4);
calc.divide(20,5);
calc.power(2,10);



const age = 96;

function krAge(ageOfForeigner) {
    return ageOfForeigner +2;
}

console.log(krAge(age));