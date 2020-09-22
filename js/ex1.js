name = prompt(("Enter your name: "));
const number = (Number(prompt("Enter number of units completed: ")));


console.log("Hello " + name);

if ((number >= 0) && (number <= 30)) {
    console.log("Your grade standing is Freshman");
} else if ((number >= 31) && (number <= 60)) {
    console.log("Your grade standing is Sophomore");
} else if ((number >= 61) && (number <= 90)) {
    console.log("Your grade standing is Junior");
} else if (number >= 91) {
    console.log("Your grade standing is Senior");
}


