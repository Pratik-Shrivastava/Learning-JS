const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// If we push one array to another array then whole array is pushed as a single element in the array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// if we want to add to array element wise then we use concat method.
// But this is an old practice
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//  A good practice to merge two or more arrays.
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);


//If we want to flat multidimensional array element wise then use flat function.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

//If we want to convert object to array then we need to specify that whether
//we want to convert the keys or the values.
//If we donot specify this then we get an empty array.
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

//An interesting way to combine elements to form an array.
console.log(Array.of(score1, score2, score3));