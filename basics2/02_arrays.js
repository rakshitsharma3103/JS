const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)          // push directly makes change in original array, Pushes the entire dc_heros array as a single element into marvel_heros.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);         //flash

const allHeros = marvel_heros.concat(dc_heros)          // Concat do not change original array it need to store in new place.
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]       // This is called "Spread" , best way to merge two arrays.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // here in place of (Infinity) we can give depth upto which we have to check array.
console.log(real_another_array);



console.log(Array.isArray("Rakshit"))   // check isArray or not
console.log(Array.from("Rakshit"))      // convert in Array.
console.log(Array.from({name: "rakshit"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));