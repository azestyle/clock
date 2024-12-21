const second=document.querySelector('.second')
const minutes=document.querySelector('.minutes')
const hours=document.querySelector('.hours')
const button=document.querySelector('.test')
let sdeg=null
let mdeg=null
let hdeg=null

function getTime(){
    const time= new Date()
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');
    sdeg=Number(seconds)*6-90
    mdeg=Number(minutes)*6-90+Number(seconds)/15
    console.log(mdeg);
    hdeg=Number(hours)*30-90+Number(minutes)*6/12
    console.log(hdeg);
    
    return [sdeg,mdeg,hdeg]

}

function calculate(){
    const[sec,min,hor]=getTime()
    second.style.transform=`rotate(${sec}deg)`
    minutes.style.transform=`rotate(${min}deg)`
    hours.style.transform=`rotate(${hor}deg)`
    
}
setInterval(() => {
    calculate()
}, 50);

