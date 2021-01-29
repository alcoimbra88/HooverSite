


function mouseEncimaBotao (elemento){ 
    elemento.style.backgroundColor="black";
    elemento.style.borderColor="white";
    elemento.style.boxShadow="5px 5px 0px black";
    elemento.style.color="white"
    elemento.style.transition="0.8s"
}

function mouseForaBotao (elemento){
    elemento.style.backgroundColor="white";
    elemento.style.color="rgb(43,43,43)"
    elemento.style.boxShadow="none"
    elemento.style.transition="0.8s"
}

/*================= Event Scroll Nav-Bar ====================*/

window.addEventListener("scroll",function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky" , window.scrollY > 0);
    })

/*================= Itens Nav-Bar ==========================*/

function mouseEncima (elemento){
    elemento.style.textShadow="0px 0px 12px white";
    elemento.style.transition="1s";
}

function mouseFora (elemento){
    elemento.style.textShadow="none";
    elemento.style.transition="1s"
}



/*================= Footer ================================*/

function mouseEncimaFooter (elemento){
    elemento.style.color="#235675"
    elemento.style.transition="0.8s"
}

function mouseForaFooter (elemento){
    elemento.style.color="white"
    elemento.style.transition="0.8s"
}