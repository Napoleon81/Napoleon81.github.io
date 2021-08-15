var treasureLocation = Math.floor(Math.random()*9)
var bombLocation  = Math.floor(Math.random()*9)
var clickTime = 0
while (treasureLocation  == bombLocation){
bombLocation = Math.floor(Math.random()*9)
}
console.log(treasureLocation);
console.log(bombLocation);
//const treasure = () => {
//}

const treasure = (location) => {
    if (location == treasureLocation){
      document.getElementById(location).innerHTML= '&#x1f308'
    }
    else if( location == bombLocation){
      document.getElementById(location).innerHTML= '&#x1F4A3'
    }
    else {
      clickTime++
      console.log(clickTime);
      document.getElementById(location).innerHTML= '&#x1F4A9'
    }
    if (clickTime >= 3){

    }
}
