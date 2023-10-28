const number=document.querySelector(".number")
const question=document.querySelector(".question")
const option =document.querySelector(".option")
const btn_move =document.querySelector(".btn_move")



/*questions.forEach(function(element,index) {
    
  
    if(element.numb==given_value){
        console.log(given_value)
        
        number.innerHTML = `
        <h2>${element.numb}</h2>
        <h3>${element.question}</h3>
        <h3>${element.options}</h3>`
        
    }
    btn_move.addEventListener("click",myfunction)

    
});*/
let index=0
function newfunction(index){

        console.log(index)
        
        number.innerHTML = `
        <h2>${questions[index].numb}</h2>
        <h3>${questions[index].question}</h3>
        <h3>${questions[index].options}</h3>`
        index=index+1
    }


document.getElementById("demo").onclick = function() {myFunction()};
let a=0
function myFunction() {
   
  document.getElementById("demo2").innerHTML = `
  <h2>${questions[index].numb}</h2>
  <h3>${questions[index].question}</h3>
  <h3>${questions[index].options}</h3>
  `
  index=index+1
 
  
  if(questions.length<=index){
    index=0
  }
}
function hero(){
    count=count+1
    console.log(count)
}




