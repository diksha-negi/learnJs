const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(  function (val){          //callback fun
//     console.log(val)
// }
// )

// coding.forEach((item)=>{    //callback fun
//     console.log(item);    
// })

function printMe(item){
 //   console.log(item);
}

//coding.forEach(printMe)


// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })


const myCoding = [
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
        languageFileName: "python"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})