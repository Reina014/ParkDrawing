const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let width;
let height;

// set the number of canvas pixels, scaled for screen resolution
let pxScale = window.devicePixelRatio;

function setup() {
  width=window.innerWidth;
  height=window.innerHeight;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  canvas.width = width * pxScale;
  canvas.height = height * pxScale;
console.log("canvas width: " + canvas.style.width);
//console.log(width);
  context.scale(pxScale, pxScale);
  context.fillStyle='black';
  context.fillRect(0,0,canvas.width,canvas.height);
  console.log(canvas.style.width, canvas.style.height);
}




window.addEventListener('load', setup);
window.addEventListener('resize', setup);


/*
WEATHER CODE KEY
0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
*/
