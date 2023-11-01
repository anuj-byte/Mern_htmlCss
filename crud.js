const contact=document.querySelector(".contact-container") //to connect to html page to with the help of class
const form=document.querySelector(".contact-form")

const url ="https://ty7r5q-3001.csb.app/EmployeeDetails"
let output=''
fetch(url).then((res)=>res.json().then((data)=>{          //fetch for fetching data from beckend server 
    data.map((iteam)=>{                                   //map is use to iterate the card 

        output +=` <div class="col-3  ">
                
          
        <div class="card" style="width: 18rem; ">
           
            <div class="card-body" data-id=${iteam.id} > 
              <h5 class="card-title" >id-${iteam.id}</h5>
              <p class="card-text">fname-${iteam.empname}</p>
              <p class="card-text">EmpEmali-${iteam.empEmail}</p>
              <p class="card-text">EmpRole-${iteam.empRole}</p>
              <a href="#" class="btn btn-primary" >Delete</a>
            </div>
          </div>
    </div>`
   
    contact.innerHTML=output //to add to innnerhtml which is connected through 
})


contact.addEventListener('click',(e)=>{
    e.preventDefault()
    const b=e.target.parentElement.dataset.id//always give dataset id to its parents
  
    console.log(b)
    const url2=`https://ty7r5q-3001.csb.app/EmployeeDetails/${b}`
    console.log(url2)

    

 })


})).catch((err)=>console.log(err))

/*form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const uname=document.getElementById("username").value
    const uid=document.getElementById("userid").value
    const data={
        id:uid,
        empname:uname,
        empEmail:"xyz@gmail.com",
        empRole:"HR"
    }
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json().then((res)=>location.reload())).catch((err)=>{console.log(err)})
})*/


 

