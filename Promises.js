/*let getUser = new Promise(
    (resolve,reject)=>{
        let User = {
            fname:"joe",
            email:"joe@gmail.com"
        }
        setTimeout(()=>resolve(User),3000) //Promuse work in asynchronous way if there is delay in sending data than it will execute that iis in prallel manner to other promises or data .

    }
)
getUser.then((result)=>console.log(result))

let NewUser = new Promise(
    (resolve,reject)=>{
        let User={
            fname:"anuj"
        };
        User?resolve(User):reject(new Error ("User not found")) //ternery operator to compare the user and print resolve or reject state in proper and efficent manner as it is used by client to know the error clearly

    }
)
NewUser.then((result)=>console.log(result))
NewUser.catch((err)=>console.log(err.message))


//Promise chain used for proper error handling

let newUser2 =new Promise((resolve,reject)=>{
    let user ={
        fname:"Anuj",
        role:"Tranee"
    }
    user?resolve(user):reject(new Error("User not found"))
})
newUser2.then((result)=>{
    return new Promise((resolve,reject)=>
    {
        if(result.role!=="admin")
    {
        reject(new Error("user is not allowed"))
    }
    else{
        resolve("user is allowed")}
    }
    )})
    .then((res)=>{console.log(res)
}).catch((err)=>console.log(err.message)) //we can use one catch statement to handle all the error which we are getting it will encounter first error and show to us


/*newUser2.then((result)=>{
    return 
    new Promise((resolve,reject)=>{
        if (result.role!== "admin"){
            reject(new Error("user is not allowed"))
        }
        else{
            resolve("accesss is granted")
        }
    })
}).then((res)=>console.log(res)).catch((err)=>console.log(err.message))*/

//newUser2.catch((err)=>{console.log(err.message)})*/


//pending ,resolve,reject -3 phase in promise
let getUser = new Promise(
    (resolve,reject)=>{
        let User = {
            fname:"joe",
            email:"joe@gmail.com"
        }
        setTimeout(()=>resolve(User),3000) //Promise work in asynchronous way if there is delay in sending data than it will execute that iis in prallel manner to other promises or data .

    }
)
getUser.then((result)=>console.log(result))


let NewUser = new Promise(
    (resolve,reject)=>{
        let User={
            fname:"anuj"
        };
        User?resolve(User):reject(new Error ("User not found")) //ternery operator to compare the user and print resolve or reject state in proper and efficent manner as it is used by client to know the error clearly

    }
)

NewUser.then((res)=>console.log(res))
NewUser.catch((err)=>console.log(err.message))
