let a=10
if(a>=5){
    console.log("eligible")
}
else{
    console.log("not eligible")
}
let itema=10
switch(itema){
    case 10:
        console.log("anuj")
        break
    case 12:
        console.log("modak")
}
let StudentsDetails=[1,"Anuj","capgemini","Analyst"]
StudentsDetails[5]="xyz"
StudentsDetails[4]="Mern"
StudentsDetails[6]="Anuj"
/*console.log(StudentsDetails)
for (let StudentsDetail of StudentsDetails){ //for-of loop we can access directly element without index moreover we can use break and continue statement here.
    if(StudentsDetail==="capgemini"){
        continue
    }
    console.log(StudentsDetail)
    
}
for(let i=0 ;i<StudentsDetails.length;i++){//for-loop we can access element with the help of index number here moreover we can use break and continue statement here .
    if(StudentsDetails[i]==='capgemini'){
        continue
    }
    console.log(StudentsDetails[i])
}
StudentsDetails.forEach(function(iteam,index){ //for-each loop we can access both index and name moreover break statement doesnt work here.
    console.log(`${iteam} is present in index number ${index}`)

})
const anuj=StudentsDetails.map((iteam,b)=>{
    return (iteam +" is present on position "+ b)
})
console.log(anuj)
const anuj =StudentsDetails.find(function(iteam){ //it return one value
    return iteam === "Anuj"
})
console.log(anuj)
const anuj1=StudentsDetails.filter(function(iteam){//it return array.
    return iteam==="Anuj"
})
console.log(anuj1)
console.log(StudentsDetails)*/



