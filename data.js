//Your code comes here
let thisText = "global_variable";

function logIntoTerminal(toLog, secondToLog){
    console.log(thisText);
    let localText = "local_variable";
    console.log(localText);

    function fourthFunction(){
        console.log("inside the fourthFunction function");
    }
    fourthFunction();
    console.log(toLog);
    console.log(secondToLog);
}

let a = 3;
logIntoTerminal("first argument", a);

function anotherFunction (){
    let b = 47;
    logIntoTerminal("argument to use as parameter inside function", b);
}

anotherFunction();

const thirdFunction = function (){
    let c = 81;
    logIntoTerminal("third argument", c); 
}

thirdFunction();

function greetings(firstName){
    return "Greetings, " + firstName;
}

console.log(greetings("Sophia"));
console.log(greetings("Robert"));
console.log(greetings("Charlotte"));
console.log(greetings("Amelia"));
console.log(greetings("Benjamin"));




// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "thisText", content: thisText, type: "string"},
        {name: "logIntoTerminal", content: logIntoTerminal, type: "function"},
        {name: "anotherFunction", content: anotherFunction, type: "function"},
        {name: "thirdFunction", content: thirdFunction, type: "function"},
        {name: "greetings", content: greetings, type: "function"},

	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
