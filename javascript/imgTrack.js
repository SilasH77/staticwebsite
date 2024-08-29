const track = document.getElementById("image-track");


window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}


window.onmousemove = e => {

    if(track.dataset.mouseDownAt === "0") return;


    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -70,
        nextPercentage = 
            Math.max(
            Math.min(
                (parseFloat(track.dataset.prevPercentage) + percentage),0),-70);
  
    track.dataset.percentage = nextPercentage;
    
    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill:"forwards"});
    
    for(const image of track.getElementsByClassName("image")) {
        image.animate({
        objectPosition: `${70 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}
  

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}


