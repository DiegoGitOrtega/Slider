function cambiarColor() {
	for (i=0;i<formulario.botonera.length;i++) {
		if (formulario.botonera[i].checked){
			document.body.style.backgroundColor=formulario.botonera[i].value;
			break;
		}
	}
}

//function cambiarColor(){
//	for (i=0;i<formulario.botonera.length;i++) {
//		if (formulario.botonera[i].checked){
//			document.body.style.backgroundColor=formulario.botonera[i].value;
//			break;
//		}
//	}
//}


function programa() {
	for (i=0;i<formulario.botonera.length;i++) {
	formulario.botonera[i].addEventListener("change", cambiarColor);
	}
}

// function programa() {
//	boton.addEventListener("click",cambiarColor);
//}

window.addEventListener("load",programa);

