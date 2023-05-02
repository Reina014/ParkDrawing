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
}

getData=async()=>{
//this one gives the weather code
  let url="https://api.open-meteo.com/v1/forecast?latitude=40.72&longitude=-73.97&daily=weathercode&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&forecast_days=1&timezone=America%2FNew_York";
  let response=await fetch(url);

  if (response.ok){
    let json=await response.json();
  weatherCodeData(json);
  }

  else{
    console.log("Error: "+ response.status);
  }
}
weatherCodeData=(response)=>  {
  let weatherC=response.daily.weathercode;
  //console.log(weatherC);
  console.log(weatherC[0]);
  let wcNum=weatherC[0];
  //GRADIENT
  var gradient2=context.createLinearGradient(0,0,0,canvas.height/2);
  //clear skies
  if (wcNum==51 || wcNum==1){
    gradient2.addColorStop(0,"#87C1FF");
    gradient2.addColorStop(1,"#A3E3FF");
    context.fillStyle=gradient2;
    context.fillRect(0,0,canvas.width,canvas.height);
  }
}

window.addEventListener('load', getData);
window.addEventListener('load', setup);
window.addEventListener('resize', setup);
window.addEventListener('resize', weatherCodeData);
window.addEventListener('load', weatherCodeData);


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
