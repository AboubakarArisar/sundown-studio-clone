const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let container = document.querySelector('#box-container');

let image = document.querySelector('#fixed-image');

container.addEventListener("mouseenter", function () {
    image.style.display = "block";
})


container.addEventListener("mouseleave", function () {
    image.style.display = "none";
})

let boxes = document.querySelectorAll('#box');

boxes.forEach((e) => {
    e.addEventListener("mouseenter", function () {
        let img = e.getAttribute("data-image");
        image.style.backgroundImage = `url(${img})`;  
    })
})