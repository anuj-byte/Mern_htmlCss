//get method using fetch by default it take GET
/*function getData(){
   fetch("https://ty7r5q-3001.csb.app/EmployeeDetails").then((
    data=>data.json().then((result)=>console.log(result))))
    .catch((err)=>console.log(err))//as in xhr that is lengthy process to get promise and handle it so in es6 version we have got these fetch method to hanlde url promise and handle it by using .then method.
}
getData()
//POST data using fetch method//
function getData2(){
    const value2={
      "id": 103,
      "empname": "hero21",
      "empEmail": "hero21@gmail.com",
      "empRole": "Trainee"
    }
    const url ="https://ty7r5q-3001.csb.app/EmployeeDetails"
   fetch(url,{
        method:'POST',
        body:JSON.stringify(value2),
        headers:{
            'Content-Type':'application/json'

        }
    }).then((answer)=>answer.json().then((result)=>console.log(result)))
}
getData2()

//to update  from the given data using id attribute
function Updatedata(){
    const url ="https://ty7r5q-3001.csb.app/EmployeeDetails/4" //carries a id attribute to compare and exchange the given value
    const data={
        empEmail:"sanuj3781@gmail.com"
    }
   fetch(url,{
        method:'PATCH', //use to update
       body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'

        }
    }).then((answer)=>answer.json().then((result)=>console.log(result)))
}
Updatedata()
function Updatedata(){
    const url ="https://ty7r5q-3001.csb.app/EmployeeDetails/4" //carries a id attribute to compare and exchange the given value
    const data={
        empname:"manish",
        empEmail:"sanuj3781@gmail.com",
        empRole:"admin"


    }
   fetch(url,{
        method:'PUT', //use to completely update
       body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'

        }
    }).then((answer)=>answer.json().then((result)=>console.log(result)))
}
Updatedata()
function getdelete(){
    const url ="https://ty7r5q-3001.csb.app/EmployeeDetails/5"
    fetch(url,{
        method:'Delete', //use to completely delete
       
    }).then((answer)=>answer.json().then((result)=>console.log(result)))
}
getdelete()
*/
function getData(){
    fetch("https://ty7r5q-3001.csb.app/EmployeeDetails").then((
     data=>data.json().then((result)=>console.log(result))))
     .catch((err)=>console.log(err))//as in xhr that is lengthy process to get promise and handle it so in es6 version we have got these fetch method to hanlde url promise and handle it by using .then method.
 }
 getData()



