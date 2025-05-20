
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){      // Here in forEach loop we passed callbackfunction & callbackfunction do not contain name.
//     console.log(val);
// } )

// coding.forEach( (item) => {          // Here in forEach loop we used arrow function & as we know forEach take callbackfunction as parameter we do not give this function any name.
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {       // we have access of item, index, and array by forEach
//     console.log(item, index, arr);
// } )

const myCoding = [                      // Array consists of Objects.
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {               // """IMPORTANT"""- Above array consist of objects, and using forEach we can easily get access to the objects present in array.
                                            // Very useful in accessing values from Database.
    console.log(item.languageName);
} )
