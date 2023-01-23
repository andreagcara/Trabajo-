  // initial slide
    let slide = 1;
 
    // total slides
    let slides = document.querySelectorAll(".slider ul li");
    total = slides.length;
 
    // show first side
    showSlide(1);
 
    next = document.querySelector(".next");
    prev = document.querySelector(".prev")
 
    /**
     * event next button
     */
    next.addEventListener('click', (evt) => {
        evt.preventDefault();
        slide++;
        if (slide > total) { slide = 1; }
        showSlide(slide);
    })
 
    /** 
     * event prev button
     */
    prev.addEventListener("click", (evt) => {
        evt.preventDefault();
        slide--;
        if (slide < 1) { slide = total; }
        showSlide(slide);
    })
    function showSlide(n) {
        n--; 
        for (i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
        }
    }
    const botones = document.querySelectorAll(".abrir,.cerrar");
    const navegacion = document.querySelector("nav");

    botones.forEach(boton => {
    boton.addEventListener("click",() => navegacion.classList.toggle("desplegado"));
});

 
