// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        //break;                  // "IMP NOTE":- if we remove break then it will execute all values below this except default value
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}