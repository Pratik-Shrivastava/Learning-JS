// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


/// The only difference between switch case in Java and Javascript is that we can use string value also
/// as cases.

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
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}