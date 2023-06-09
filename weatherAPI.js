let weatherLayer = document.querySelector('.weatherLayer');

getData=async()=>{
//this one gives the weather code
  let url="https://api.open-meteo.com/v1/forecast?latitude=40.72&longitude=-73.97&daily=weathercode&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&forecast_days=1&timezone=America%2FNew_York";
  let response=await fetch(url);

  if (response.ok){
    let json=await response.json();
    console.log(json);
  weatherCodeData(json);
  }

  else{
    console.log("Error: "+ response.status);
  }
}
  weatherCodeData=(response)=> {
    let weatherC=response.daily.weathercode;
    //console.log(weatherC);
    console.log(weatherC[0]);
    let wcNum=weatherC[0];
    console.log(typeof wcNum);
    //lets draw now lol

    //clear skies
    if (wcNum==51 || wcNum==1){
       weatherLayer.classList.remove("cleanAir");
       weatherLayer.classList.add("weather1");
    }
    //partly cloudy 2
    else if (wcNum==2){
      gradient2.addColorStop(0,"lightblue");
      gradient2.addColorStop(1,"white");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
    //overcast/foggy... 3, 45, 48
    else if (wcNum==3 || wcNum==45|| wcNum==48){
      gradient2.addColorStop(0,"#343F46");
      gradient2.addColorStop(1,"#F0F3F3");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
    //Drizzle 51, 53, 55
    else if (wcNum==51 || wcNum==53|| wcNum==55){
      gradient2.addColorStop(0,"#395877");
      gradient2.addColorStop(1,"#AFC3CC");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
    //freezing drizzle 56 57
    else if (wcNum==56 || wcNum==57){
      gradient2.addColorStop(0,"#395877");
      gradient2.addColorStop(1,"#C2C5C3");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
    //Rain 61 63 65 80 81 82
    else if (wcNum==61 || wcNum==63|| wcNum==65|| wcNum==80|| wcNum==81|| wcNum==82){
      gradient2.addColorStop(0,"#2F3A4D");
      gradient2.addColorStop(1,"#6C8094");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
    //Freezing Rain 66 67
    else if (wcNum==66 || wcNum==67){
      gradient2.addColorStop(0,"#2F3A4D");
      gradient2.addColorStop(1,"#C2C5C3");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
    //Snow 71 73 75 77 85 86
    else if (wcNum==71 || wcNum==73|| wcNum==75|| wcNum==77 || wcNum==85|| wcNum==86){
      gradient2.addColorStop(0,"#97a5bd");
      gradient2.addColorStop(1,"#e3edff");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
    //Thunderstorm 95 96 99
    else if (wcNum==95 || wcNum==96|| wcNum==99){
      gradient2.addColorStop(0,"#120348");
      gradient2.addColorStop(1,"#dad4e2");
      context.fillStyle=gradient2;
      context.fillRect(0,0,canvasW.width,canvasW.height);
    }
  }

window.addEventListener('onload', getData);
window.addEventListener('resize', weatherCodeData);
window.addEventListener('onload', weatherCodeData);

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
