function getData(){
    let responsedata
    const xhr=new XMLHttpRequest() //these function use to do request response handle in javascript
    xhr.open('GET','https://ty7r5q-3001.csb.app/EmployeeDetails')
    xhr.onload=function(){
        console.log(xhr.response)
        const newobj=JSON.parse(xhr.response) // as my response is comming in a format of json so to convert it into array of object we use json.parse.
        console.log(JSON.stringify(newobj))
    }
    xhr.send()
}
getData()