// Referenced from ChatGPT 
// JSEC-> Javascript execution context

Execution Context (EC) is an environment where JavaScript code is evaluated and executed.

👉 Whenever JavaScript runs any code, it does so inside an execution context.

  Types of Execution Context

JavaScript has 3 types of execution contexts:

1️⃣ "Global Execution Context" (GEC)

Created first, when JS file starts running

Only one GEC exists

Belongs to the global scope

2️⃣ "Function Execution Context" (FEC)

Created each time a function is called

Multiple FECs can exist

Each function call → new execution context

3️⃣ "Eval Execution Context" (Rare)

Created when eval() is used

❌ Avoided in real-world code


🔹 Structure of an Execution Context

Each execution context has two phases:

▶️ Phase 1: Memory Creation Phase (Creation Phase)

Also called:
Hoisting phase
Variable Environment setup

During this phase:
Memory is allocated, Code is NOT executed

What happens in Memory Phase?
Item	            What happens
var               variables	Allocated memory → undefined
Functions	        Entire function stored
let or const	    Allocated memory but uninitialized (TDZ)
this	            Set value

> Example
var a = 10;
function foo() {
  var b = 20;
}

Memory Phase:

a → undefined
foo → function definition
  
▶️ Phase 2: Execution Phase

Code is executed line by line
Variables get actual values
Functions are invoked

Execution Phase:

a → 10

🔹 Global Execution Context in Detail 🔹

When JS starts:

Global Execution Context is created

Memory Phase runs

Execution Phase runs

**Inside Global Execution Context:**

this → window object (browser) / global (Node.js)      // very IMPORTANT

Variables declared with var become properties of window

var x = 5;
console.log(window.x); // 5

🔹 Function Execution Context in Detail 🔹

Whenever a function is called:
A new execution context is created

Pushed into Call Stack

Example
var a = 10;

function outer() {
  var b = 20;

  function inner() {
    var c = 30;
    console.log(a, b, c);
  }

  inner();
}

outer();

Execution Order:

GEC created

outer() called → FEC created

inner() called → another FEC created

inner() finishes → popped

outer() finishes → popped

GEC finishes
