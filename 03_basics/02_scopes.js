// let a=10
// const b=20
// var c=30

//var c=300
// let a =300

// if (true){
//     let a=10
//     const b=20
//     //c=30
//     console.log(a);
// }

//console.log(a);
//console.log(b)
//console.log(c)

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if (true){
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//*****************************************************************************/
console.log(addone(5))
function addone(num){
    return num+1
}


//js m variable kuchh bhi hold kr skte
addTwo(5)                 //yahan error ayega, hoisting
const addTwo = function(num){
    return num+2
}
