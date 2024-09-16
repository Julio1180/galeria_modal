const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const botones = document.querySelectorAll(".modal button");
let imgActual = 0;


for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", (evento) => {
        evento.preventDefault();
        imgActual = i;
        imgModal.setAttribute("src", enlaces[i].getAttribute("href"));
        modal.classList.add("visible")
    });
}

modal.addEventListener("click", () => {
    modal.classList.remove("visible")
});



for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", evento => {
        evento.stopPropagation();
        if (i == 0) {
            imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
        } else {
            imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
        }
        imgModal.setAttribute("src", enlaces[imgActual].getAttribute("href"));
    });
};





