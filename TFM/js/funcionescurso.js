const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const botones = document.querySelectorAll(".modal button");
let imgActiva = 0 ;
let rutasImg = []; 

miniaturas.forEach(function(miniatura, indice){
	rutasImg.push(miniatura.getAttribute("href"));
	miniatura.addEventListener("click",function(evento){
		evento.preventDefault();
		imgActiva = indice;
		imgModal.setAttribute("src", miniatura.getAttribute("href"));
		modal.classList.add("visible");
	});
});
if(modal){
modal.addEventListener("click", function(){
	modal.classList.remove("visible");
})};
botones.forEach(function(boton, indice){
	boton.addEventListener("click", function(evento){
		evento.stopPropagation();
		if(indice == 0){
			imgActiva = imgActiva > 0 ? imgActiva -1 : miniaturas.lenth -1;
		}else{
			imgActiva = imgActiva < miniaturas.length - 1 ? imgActiva +1 :0;
		}
		imgModal.setAttribute("src", rutasImg[imgActiva]);
	});
});
imgModal.addEventListener("click", function(evento){
	
})