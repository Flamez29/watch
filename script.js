let image = document.querySelectorAll('.image');

function showImage(e){
  for(var i = 0; i < image.length; i++){
    x = e.pageX;
    y = e.pageY;
    image[i].style.transform = `translate(${x}px,${y}px)`
  }
}

document.addEventListener('mousemove', showImage);


// MOBILE VIEW
let isPlaying = false;
let tapCount = 0;

const hiddenDiv = document.getElementById('hidden');
const playingText = hiddenDiv.querySelector('p'); // Get the paragraph element

document.addEventListener('click', () => {
  tapCount++;

  if (tapCount === 3) {
    isPlaying = true;
    hiddenDiv.textContent = 'Now Playing: Yahweh Sabaoth Drill...';
    hiddenDiv.classList.add('playing');
    hiddenDiv.style.visibility = 'visible';



    // Play your song here (replace with your audio player code)
    const audio = document.getElementById('song').getElementsByTagName('audio')[0];
    audio.play();
  } else if (tapCount > 3 && !isPlaying) {
    isPlaying = true;
    hiddenDiv.textContent = 'Now Playing: Yahweh Sabaoth Drill...';
    hiddenDiv.classList.add('playing');
    hiddenDiv.style.visibility = 'visible';


    // Play your song here (replace with your audio player code)
    const audio = document.getElementById('song').getElementsByTagName('audio')[0];
    audio.play();
  } else if (tapCount > 3 && isPlaying) {
    isPlaying = false;
    hiddenDiv.textContent = 'This content will only be visible on desktop devices';
    hiddenDiv.classList.remove('playing');
    hiddenDiv.style.visibility = 'visible';


    // Pause your song here (replace with your audio player code)
    const audio = document.getElementById('song').getElementsByTagName('audio')[0];
    audio.pause();
  }
});

// Add a blinking function
function blinkDiv() {
  hiddenDiv.style.visibility = hiddenDiv.style.visibility === 'visible' ? 'hidden' : 'visible';
}

// Call the blinkDiv function every 500 milliseconds
setInterval(blinkDiv, 500);