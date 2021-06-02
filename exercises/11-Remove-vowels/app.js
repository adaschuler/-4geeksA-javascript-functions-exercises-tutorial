
const rapid = (myString) => {
    myString = myString.toLowerCase();
    let consonants = [];
    for(let position in myString){
        if(['a','e','i','o','u'].includes(myString[position]) == false)
            consonants.push(myString[position])
           
    }
    return consonants.join('').toUpperCase();
    /* {
         for(let consonantes in myString)
        if(['a','e','i','o','u'].includes(myString[consonantes]) == true)
            consonants.push(myString[consonantes])
        }
        return consonantes;*/
} 

// From this line up Do not change code below
let str = "JohAna";
console.log(rapid(str));