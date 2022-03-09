'use strict'

setInterval(function(){
    let a=new Date();
    document.querySelector(".time").innerHTML=a.toLocaleTimeString();
},100)


const bb=()=>{

    fetch('https://animechan.vercel.app/api/random').then((user)=>{
     return user.json();
    }).then((message)=>{ 
        document.querySelector('.txt').textContent=message.quote;
    }).catch((e)=>{
        document.querySelector('.txt').textContent='Error';
    })
    }



    setInterval(bb,3000);