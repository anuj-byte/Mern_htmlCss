/*function display(){
    return ("helloworld")
}
console.log(display())


function displaydetails(age,name,company){
    return{
        empage:age,
        empname:name,
        empcompany:company
    }

}
let details=displaydetails(12,"anuj","capgemin")
console.log(details)
function displayaUser(name,role="default role",user="normal"){
    return `the name is ${name} role is ${role} and user has ${user} access`
}
console.log(displayaUser("anuj","analyst","admin"))

console.log(displayaUser("anuj"))
//function expression / NFE normed function expression
const clone = function sample(){
    return "sample"
}
console.log(clone())*/
//arrow function

const clone1=(name,age)=>{
    return `name is ${name} ${age}`
}
const clone2=nam=>`the first name is ${nam}` //single line arrow function when only one input is given.
console.log(clone1("anuj",132))
console.log(clone2("anuj"))