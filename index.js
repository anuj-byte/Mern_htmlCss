/*a=2.5
console.log(typeof(a))
b='su'
console.log(typeof(b))
const a=10

{
    let b=20
    console.log(b)
    
    
}
console.log(a)
console.log(b)
let array1=["aaray",1,true]
console.log(array1[0])
let value  ={
    fname:"sumit",
    roll:24
}
console.log(value.roll)
function fun(a,b){
    
    return a+b

}

console.log(fun(3,4))
let a;
a=10
let b= true
console.log(typeof(b))
console.log(!b)
let a="10"
console.log(typeof(+a))
let c=Number(a)
let d= +c



b=String(a)
console.log(typeof(b))
let a
console.log(a || 'ten')
console.log(a??"ten")
x=(a!==undefined&& a!==null)?a:'ten'
 //condition
let a=3
if(a>5 && a<2){
    console.log("sumit")

}
else{
    console.log("nt")
}
let item =10
switch(item){
    case 10:
        console.log("sumit")
        break
    case 11:
        console.log("anuj")
}
let Studentdetails=["aauj","manish","sumit"]
Studentdetails[4]="modak"
console.log(Studentdetails)
let StudentsDetails=["aauj","manish","sumit"]
for (let StudentsDetail of StudentsDetails){ //for-of loop we can access directly element without index moreover we can use break and continue statement here.
   if(StudentsDetail==="manish"){
        continue
   }
    console.log(StudentsDetail)
    
}
let a= 10
let b= "10"
console.log(a===b)
let StudentsDetails=["aauj","manish","sumit"]
for(let i=0;i<StudentsDetails.length;i++){
    console.log(StudentsDetails[2])
}
let StudentsDetails=["aauj","manish","sumit"]
StudentsDetails.forEach(function(iteam,index){ //for-each loop we can access both index and name moreover break statement doesnt work here.
    console.log(`${iteam} is present ${index}`)

})
let StudentsDetails=["aauj","manish","sumit"]
const value = StudentsDetails.map((iteam,index)=>{
    console.log(`${iteam} is present in ${index}`)
    
})
let StudentsDetails=["aauj","manish","sumit","manish"]
const anuj =StudentsDetails.find(function(iteam){ //it return one value
    return iteam === "manish"
})
console.log(anuj)
let StudentsDetails=["aauj","manish","sumit","manish"]
const anuj =StudentsDetails.filter(function(iteam){ //it return one value
    return iteam === "manish"
})
console.log(anuj)
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
const clone1=(name,age)=>{
    return `${name} is ${age}`
}
console.log(clone1('anuj',12))
//searching the index
let str1="Rajan is a good boy and great"
console.log(str1.indexOf('g'))
console.log(str1.lastIndexOf('g'))
let pos1=str1.indexOf('g')
let pos2=str1.indexOf('g',pos1+1)
console.log(pos1,pos2)

console.log(str1.substring(0,5))
str2="how to change the language java to java2"
let arr=str2.split(" ") 
console.log(arr)*/
//Binding of object with function
let StudentOne={
    name1:"anuj",
    display:function(){
        console.log(`${this.name1} is the name of developer`)

    }
}
let StudentTwo={
    name1:"anmol",

}
StudentOne.display()
let osc=StudentOne.display.bind(StudentTwo)
osc()
StudentOne.display()
let osc2=StudentOne.display.bind(StudentTwo)
osc()








