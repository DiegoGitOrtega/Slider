var doggies=["img/1.jpg","img/2.jpeg","img/3.jpeg","img/4.jpg","img/5.jpg","img/6.jpg"];
var perrito=0;

function switchDoggie(){
dogimg.src=doggies[perrito];
perrito++;
if(perrito>=doggies.length){
perrito=0;
}
}

setInterval(switchDoggie , 2500);

function gio() {
flecha.addEventListener("click",switchDoggie);
}

window.addEventListener("load",gio);

function doggoBackwards(){
dogimg.src=doggies[perrito];
perrito--;
if (perrito<=0) {perrito=5;}
}


function pickDoggo() {
for (i=0;i<formulario.botonera.length;i++) {
if (formulario.botonera[i].checked){
break;}
}
}

function giovy() {
for (i=0;i<formulario.botonera.length;i++) {
formulario.botonera[i].addEventListener("change", switchDoggie);
}
}

window.addEventListener("load",giovy);
			
			
			
			
			
			
