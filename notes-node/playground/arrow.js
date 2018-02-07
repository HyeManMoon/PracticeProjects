var square = num => Math.sqrt(num);
var result = square(49);
console.log(result);

var user = {
    name: "Henry",
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`)
    }
}
user.sayHiAlt(1,2,3,4);