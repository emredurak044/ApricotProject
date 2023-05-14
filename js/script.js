// Responsive Menu //
const hamburgerBtn = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
});

// Client Slider //
const clientSlider = () => {
    let firstChild, lastChild;

    const leftBtn = document.querySelector(".slider-left");
    const rightBtn = document.querySelector(".slider-right");
    const allClients = document.querySelector(".client-slider");

    document.addEventListener("click", (e) => {
        if(e.target === leftBtn){
            lastChild = allClients.lastElementChild;
            allClients.insertAdjacentElement("afterbegin", lastChild);
        }
        else if(e.target === rightBtn){
            firstChild = allClients.firstElementChild;
            allClients.insertAdjacentElement("beforeend", firstChild);
        }
    });
};

clientSlider();