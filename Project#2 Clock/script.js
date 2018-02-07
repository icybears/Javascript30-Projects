
const secondDiv = document.getElementById('secBar');
const minDiv = document.getElementById('minBar');
const hourDiv = document.getElementById('hourBar');


getDate();
setInterval(getDate, 1000)


function getDate() {

    let date = new Date();
    let seconds = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
  
    if(seconds == 0){
        secondDiv.style.transitionDuration = '0s';
    }
    if(min == 0){
        minDiv.style.transitionDuration = '0s';
    }
    if(hour == 0){
        hourDiv.style.transitionDuration = '0s';        
    }    
    else{
        if(secondDiv.style.transitionDuration == '0s')
            secondDiv.style.transitionDuration = '.4s'; 

        if(minDiv.style.transitionDuration == '0s')
            minDiv.style.transitionDuration = '.4s'; 

        if(hourDiv.style.transitionDuration == '0s')
            hourDiv.style.transitionDuration = '.4s'; 
    }

    secondDiv.style.transform = "rotatez("+seconds*6+"deg)";
    minDiv.style.transform = "rotatez("+min*6+"deg)";
    hourDiv.style.transform = "rotatez("+hour*30+"deg)";

  
    console.log(seconds, min, hour);

}