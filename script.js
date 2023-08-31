const crow = document.querySelector('.crow');
const topbtn = document.querySelector('#top');
const bottombtn = document.querySelector('#bottom');
const rightbtn = document.querySelector('#right');
const leftbtn = document.querySelector('#left');
const gameContainer = document.getElementsByClassName('game')[0].offsetHeight;
document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode)
  if (e.keyCode == 38) {
    if(crow.offsetTop>150)
    crow.style.top= (crow.offsetTop -50) + "px";
  }

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




// Function to check collision between two elements (bird and egg)
function checkCollision(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

// Function to handle collision detection
function handleCollisions() {
  const eggs = document.querySelectorAll('.egg');
  eggs.forEach((egg) => {
    if (checkCollision(crow, egg)) {
      egg.style.visibility = 'hidden';
      // alert("game over");
    
console.log(egg);
      // Handle collision action (e.g., decrease score, game over)
      // You can customize this part based on your game's logic
    }
  });
}

// Main game loop


// Egg raining logic

setInterval(()=>{
  const egg = document.getElementsByClassName('egg')
let rdb =Math.floor(Math.random()*6)

setInterval(()=>{

  if(egg[rdb].offsetTop<=gameContainer){
    egg[rdb].style.visibility='visible'
    egg[rdb].style.top = (egg[rdb].offsetTop+10)+'px'
    
    handleCollisions();
 
  }

      else egg[rdb].style.visibility='hidden'

    },100)
    egg[rdb].style.top = '14vh'
},2000)

// Existing code for button event listeners ...

// Rest of your existing code ...
