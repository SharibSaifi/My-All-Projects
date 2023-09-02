let arr = ["hellospcialperson    ",
           "iam", 
           " i am special    ",
           "I am a web developer", 
           "        Bob is areally special boy",
           "      Orange is the most Special fruit in this entire world        "
        ]

let newArray1 = arr.map(string => string.trim())
let final_newArray = newArray1.map((str) => str.toUpperCase());
console.log(final_newArray);
let newArray2 = arr.filter(word => word.includes('special'));
console.log(newArray2);