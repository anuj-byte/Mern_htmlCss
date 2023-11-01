/*function getData(){
    let responsedata
    const xhr=new XMLHttpRequest() //these function use to do request response handle in javascript
    xhr.open('GET','https://ty7r5q-3001.csb.app/EmployeeDetails')
    xhr.onload=function(){
        console.log(xhr.response)
        const newobj=JSON.parse(xhr.response) // as my response is comming in a format of json so to convert it into array of object we use json.parse.
        console.log(JSON.stringify(newobj))
    }
    xhr.onerror=function(){
        console.log("Error is comming") //xhr basically use to send a request to server and recieve a response and process it
    }
    xhr.send()
}
getData()
function postData(){
    const xhr =new XMLHttpRequest() //basically hr is synchronous to make asynchoronous to use async await
    xhr.open("POST",'https://ty7r5q-3001.csb.app/EmployeeDetails')
    xhr.setRequestHeader("Content-Type",'application/json') //if we have to post certain type of data we have to specify its type here before sending
    xhr.onload=function(){
        console.log(xhr.response)
    }
    xhr.onerror=function(){
        console.log("Error")
    }
    const data={
        "id":88,
        "fname":"manish",
        "Role":"admin",
        "email":"manish@gmail.com"
    }
    xhr.send(JSON.stringify(data)) //browser will default take it as java object we have to convert and send to //
}
postData()

function UseData(){
    const promise=new Promise((resolve,reject)=>{
        let responsedata
        const xhr=new XMLHttpRequest() 
        xhr.open('GET','https://ty7r5q-3001.csb.app/EmployeeDetails')
        xhr.onload=function(){
            const normalobj=JSON.parse(xhr.response) //converting the json to array of obj to access the data easily
            resolve(normalobj)
           
        }
        xhr.onerror=function(){
            reject(new Error("Error is comming")) 
        }
         xhr.send()
    })
    return promise
    }
console.log(UseData())//knowing the promise state
UseData().then((answer)=>console.log(answer)).catch((err)=>console.log(err)) //handling promise and getting status

function getData(){
    let responsedata
    const xhr=new XMLHttpRequest() //these function use to do request response handle in javascript
    xhr.open('GET','https://ty7r5q-3001.csb.app/EmployeeDetails')
    xhr.onload=function(){
        console.log(xhr.response)
        const newobj=JSON.parse(xhr.response) // as my response is comming in a format of json so to convert it into array of object we use json.parse.
        console.log(JSON.stringify(newobj))
    }
    xhr.onerror=function(){
        console.log("Error is comming") //xhr basically use to send a request to server and recieve a response and process it
    }
    xhr.send()
}
getData()*/
function postData(){
    const xhr =new XMLHttpRequest() //basically hr is synchronous to make asynchoronous to use async await
    xhr.open("POST",'https://ty7r5q-3001.csb.app/EmployeeDetails')
    xhr.setRequestHeader("Content-Type",'application/json') //if we have to post certain type of data we have to specify its type here before sending
    xhr.onload=function(){
        console.log(xhr.response)
    }
    xhr.onerror=function(){
        console.log("Error")
    }
    const data={
        "id":88,
        "fname":"manish",
        "Role":"admin",
        "email":"manish@gmail.com"
    }
    xhr.send(JSON.stringify(data)) //browser will default take it as java object we have to convert to json and send to server //
}
postData()




