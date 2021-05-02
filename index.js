$(document).ready(function(){
  animateDiv();
  removeBall();
});

let int = document.getElementById('number');
let integer = 0;
const watch = document.querySelector("#watch");
let milliseconds = 0;
let timer;

const startWatch = () => {
  watch.classList.remove('paused');
  clearInterval(timer);
  timer = setInterval(() => {
    milliseconds +=10;
    let dateTimer = new Date (milliseconds);
    watch.innerHTML = 
    ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
    ('0' + dateTimer.getUTCMilliseconds()).slice(-3,-1);
  }, 10);
};

const pauseWatch = () => {
  watch.classList.add('paused');
  clearInterval(timer);
};

document.addEventListener('click', (e) => {
  const element = e.target;
  if (element.id === 'start') startWatch();
  if (element.id === 'pause') pauseWatch();

})

function makeNewPosition(){
    
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}


function animateDiv(){
  var newq = makeNewPosition();
  var oldq = $('.ball1').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);
  
  $('.ball1').animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv();        
  });
  
};

function calcSpeed(prev, next) {
    
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  
  var greatest = x > y ? x : y;
  
  var speedModifier = 0.5;

  var speed = Math.ceil(greatest/speedModifier);

  return speed;

}
function removeBall(){
$('#one').click(function(){
  $("#one").toggle();
  console.log("click");
  integer += 1;
  int.innerHTML = integer;
  startWatch();
});
};

let timeDuration = setInterval(() => {
  if (removeBall){
    $('#one').show();
  }
}, 3000);
