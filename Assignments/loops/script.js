// External resource inspiration: CSS aquarium / bubble animation examples

const bubbleContainer = document.getElementById('bubbles');
const WATER = document.getElementById('water');

function rand(min,max){return Math.random()*(max-min)+min}
function rint(min,max){return Math.floor(rand(min,max+1))}

function createBubble(){
  const b = document.createElement('div');
  b.className = 'bubble';

  const sizeChance = Math.random();
  if(sizeChance < 0.2) b.classList.add('big');
  else if(sizeChance < 0.5) b.classList.add('small');

  const rect = WATER.getBoundingClientRect();
  const minX = 20;
  const maxX = rect.width - 40;
  b.style.left = rand(minX,maxX) + 'px';

  const duration = rand(3.5,7.5);
  const swayDur = rand(2.4,4.8);
  const delay = rand(0,1.5);

  b.style.animationDuration = `${duration}s, ${swayDur}s`;
  b.style.animationDelay = `${delay}s, ${delay}s`;

  const initialBottomOffset = rand(10,60);
  b.style.bottom = (80 + initialBottomOffset) + 'px';

  bubbleContainer.appendChild(b);

  function onAnimationEnd(e){
    if(e.animationName === 'floatUp'){
      b.removeEventListener('animationend', onAnimationEnd);
      if(b.parentNode) b.parentNode.removeChild(b);
    }
  }

  b.addEventListener('animationend', onAnimationEnd);
}

// REQUIRED: using a for loop to create bubbles
const INITIAL_BUBBLES = 16;
for(let i=0;i<INITIAL_BUBBLES;i++){
  setTimeout(()=>createBubble(), i*120);
}

// Infinite loop effect
setInterval(()=>{
  const spawn = rint(1,3);
  for(let i=0;i<spawn;i++){
    setTimeout(()=>createBubble(), i*120);
  }
},900);
