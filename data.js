//Your code comes here













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
