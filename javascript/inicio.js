function mouseEncima (elemento){
    elemento.style.textShadow="0px 0px 8px white";
    elemento.style.transition="1s";
    elemento.style.fontWeight="bolder";
}

function mouseFora (elemento){
    elemento.style.textShadow="none";
    elemento.style.transition="1s"
    elemento.style.fontWeight="lighter";
}

function mouseEncimaFooter (elemento){
    elemento.style.color="rgb(114, 114, 231)"
    elemento.style.transition="0.8s"
}

function mouseForaFooter (elemento){
    elemento.style.color="white"
    elemento.style.transition="0.8s"
}

function mouseEncimaBotao (elemento){ 
    elemento.style.backgroundColor="rgb(43,43,43)";
    elemento.style.borderColor="white";
    elemento.style.color="white"
    elemento.style.transition="0.8s"
}

function mouseForaBotao (elemento){
    elemento.style.backgroundColor="white";
    elemento.style.color="rgb(43,43,43)"
    elemento.style.transition="0.8s"
}