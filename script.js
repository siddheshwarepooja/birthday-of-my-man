function showMessage(){
    document.getElementById("surprise").style.display="block";
}

function updateCountdown(){

    const birthday = new Date("July 30, 2026 00:00:00").getTime();
    const now = new Date().getTime();

    const diff = birthday - now;

    if(diff <= 0){
        document.getElementById("countdown").innerHTML =
        "🎂 Happy Birthday My Love ❤️";
        return;
    }

    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds = Math.floor((diff%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds Left 💗`;
}

setInterval(updateCountdown,1000);
updateCountdown();

function createHeart(){

    const heart=document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(Math.random()*3+3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

function playSong() {
    const song = document.getElementById("song");
    song.play();
}

setInterval(createHeart,300);