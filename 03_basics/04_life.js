//Immediately invoked function expressions (IIFE)

//global scope ke pollution ko hatane ke liye IIFE ka use kita

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();

(function chai(){                       //named IIFI
    console.log(`DB CONNECTED`);
})();         //-> yahan semicolon lagana jaruri h kyonki usko pta ni lgega ki context rokna kahan h

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})("hitesh");


