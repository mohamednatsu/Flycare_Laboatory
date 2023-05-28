const btn = document.querySelector(".bars");
    let dropdown = document.getElementById("ddd");
    let barI = document.getElementById("icon");
    btn.onclick = function() {
    dropdown.style.height = 'calc(100% + 12px)';
    barI.className = "fa-solid fa-xmark";
    }

    let barX = document.getElementsByClassName("fa-solid fa-xmark");

function barx() {
        dropdown.style.display = 'none';
        barI.className = "fa-solid fa-bars";
    }


function toggle() {
    const toggle = document.querySelector('.toggle');
    const banner = document.querySelector('.banner');
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
}



let photo1 = document.getElementById("res-img1");
let photo2= document.getElementById("res-img2");
let photo3 = document.getElementById("res-img3");

photo1.onmouseleave = function () {
    photo1.style.transition = "0.8s";
}
photo2.onmouseleave = function () {
    photo2.style.transition = "0.8s";
}
photo3.onmouseleave = function () {
    photo3.style.transition = "0.8s";
}

var up = document.getElementById("up");

window.onscroll = function () {
    // console.log(this.scrollY)
    this.scrollY > 300 ? up.classList.add("show") : up.classList.remove("show") ;
};

up.onclick= function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}