const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scramble(event, speed){
    let iterations = 0;
	const interval = setInterval(() => {
		event.target.innerText = event.target.innerText.split("")
		.map((letter, index) => {
            if(index < iterations){
                return event.target.dataset.value[index]
            }
            return letters[Math.floor(Math.random() * 26)]
        })
		.join("");


        if(iterations>event.target.dataset.value.length){
            clearInterval(interval)
        }
        iterations += speed;
    }, 30);


}

document.querySelector('a').onmouseover = event => {
   scramble(event, 1);
}
document.querySelector('[id=button]').onmouseover = event => {
   scramble(event, 1/3);
}

document.querySelector('[id=button2]').onmouseover = event => {
   scramble(event, 1/3);
}

document.querySelector('[id=button3]').onmouseover = event => {
   scramble(event, 1/3);
}



