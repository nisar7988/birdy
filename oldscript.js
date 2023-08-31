
const crow = document.querySelector('.crow')
 const topbtn =document.querySelector('#top')
 const bottombtn =document.querySelector('#bottom')
 const rightbtn = document.querySelector('#right')
 const leftbtn = document.querySelector('#left')

 document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode)
  // if (e.keyCode == 38) {
  //   if(crow.offsetTop>150)
  //   crow.style.top= (crow.offsetTop -50) + "px";
  // }

  // else 
  if (e.keyCode == 39) {
    if(crow.offsetLeft<1000)
    crow.style.left=(crow.offsetLeft +40)+"px"
  }
  else
  if (e.keyCode == 37) {
    if(crow.offsetLeft>(-300))
    crow.style.left=(crow.offsetLeft -50)+"px"
  }
  else
  if (e.keyCode == 40) {
    if(crow.offsetTop< 600)
    crow.style.top=(crow.offsetTop +50)+"px"
  }
}



//buttons
 topbtn.addEventListener('click',()=>{
 
     crow.style.top= (crow.offsetTop -50) + "px";
})

 bottombtn.addEventListener('click',()=>{
   
if(crow.offsetTop<400){
crow.style.top= (crow.offsetTop +50) + "px";
}

})





const gameContainer = document.getElementsByClassName('game')[0].offsetHeight



rightbtn.addEventListener('click',()=>{
  if(crow.offsetLeft<220)
  crow.style.left=(crow.offsetLeft +120)+"px";
  
 console.log(crow.offsetLeft)
})


leftbtn.addEventListener('click',()=>{
  if(crow.offsetLeft>-40){
    crow.style.left=(crow.offsetLeft -120)+"px"
  }

})





// egg raining

  setInterval(()=>{
    const egg = document.getElementsByClassName('egg')
  let rdb =Math.floor(Math.random()*6)
 
  setInterval(()=>{

    if(egg[rdb].offsetTop<=gameContainer){
      egg[rdb].style.visibility='visible'
      egg[rdb].style.top = (egg[rdb].offsetTop+10)+'px'
      

   
    }
 
        else egg[rdb].style.visibility='hidden'

      },100)
      egg[rdb].style.top = '14vh'
},2000)

//main logic to collapse
const cickenWidth = document.getElementsByClassName('chicken')[0].offsetWidth
console.log(cickenWidth)

