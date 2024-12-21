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
}, 500);
// const[a,b,c]=getTime()

// function getSecond(){
// second.style.transform=`rotate(${sdeg}deg)`
//  sdeg+=6
//     if(sdeg===360){
//         sdeg=0
//     }
// second.style.transform=`rotate(${sdeg}deg)`
// }

// function getMinutes(){
//     minutes.style.transform=`rotate(${mdeg}deg)`
//     mdeg+=0.1
//     if(mdeg===360){
//         mdeg=0
//     }
    
// }
// function getHours(){
//     hours.style.transform=`rotate(${hdeg}deg)`
//     hdeg+=0.00833
//     if (hdeg===360) {
//         hdeg=0
        
//     }
    
// }
// setInterval(()=>{
//     getSecond();
//     getMinutes();
//     getHours();
// },1000);
