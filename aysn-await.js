/*async function fetchdata(a){
    if(a===1){
        
        return (["name",11,"age"]) //async always return a Promise either you use then catch or await to handle the promise

    }
    
    
}
//console.log(fetchdata(1))
//fetchdata(1).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}) //Promise handling
/*const result =await fetchdata(1) // await cannot be used outside the async function
console.log(result)*/
/*async function caller(){
    const result =await fetchdata(1)
    console.log(result)
}
caller()*/

//one more way to make promise in normal function by using promise reject and resolve scenario

function newfunc(b){
    if (b===1){
    let result ={fname:"anuj",age:"12"}
    return new Promise ((resolve,reject)=>{
        result?resolve(result):reject(new Error("not found"))

    })
}}
async function caller2(){
    try{
    const result = await newfunc(1)
    console.log(result)
    }
    catch(e){
        console.log(e.message)
    }
    
    
}
caller2()