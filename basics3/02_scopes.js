//var c = 300

let a = 300                             // Global Scope

if (true) {
    let a = 10                          // Block scope
    const b = 20
    //var c = 30                        // The problem with var is that it is also access outside the scope which create problem hence var is not used in variable declaration.
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);            // Not accessible due to out of scope, when this shows error next line will "NOT" execute.

     two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);        // hitesh youtube
    }
    // console.log(website);
}

console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))          // accessible as we are calling function.

function addone(num){
    return num + 1
}



// addTwo(5)                       // cannot access variable before initialization, it is accessible after variable initialization.
const addTwo = function(num){
    return num + 2
}
