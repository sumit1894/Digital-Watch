const currentTime=()=>{
    const time=new Date().toLocaleTimeString();
    document.querySelector(".clock").innerText=time;
}

const runTime=setInterval(()=>{
    currentTime()
},1000);


//to stop 

// setTimeout(()=>clearInterval(runTime),5000);