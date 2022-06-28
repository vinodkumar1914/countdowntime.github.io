const daysEl =document.getElementById("days")
const hoursEl=document.getElementById("hours")
const minutesEL=document.getElementById("minutes")
const secondsEl=document.getElementById("seconds")

const newYear ="16 Jan 2023"
function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate= new Date();

    const totalseconds =(newYearDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24)
    const hours =Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minutesEL.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);
}
function formatTime(time){
    return time<10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);
