
document.addEventListener('DOMContentLoaded', function () {
    let gallery = document.getElementById('gallery');
    let sliderContainer = document.getElementById('slider-container');
    let slider = document.getElementById('slider');
    let closeBtn = document.getElementById('close-btn');
    let prevBtn = document.getElementById('prev-btn');
    let nextBtn = document.getElementById('next-btn');
    let thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;

    function showSlider(index) {
        let imagePath = thumbnails[index].src;
        slider.src = imagePath;
        sliderContainer.style.display = 'flex';
        currentIndex = index;
    }

    gallery.addEventListener('click', function (event) {
        if (event.target.classList.contains('thumbnail')) {
            showSlider(Array.from(thumbnails).indexOf(event.target));
        }
    });

    closeBtn.addEventListener('click', function () {
        sliderContainer.style.display = 'none';
    });

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showSlider(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showSlider(currentIndex);
    });
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const buttonprevEl = document.querySelector("#button-prev");
const buttonnextEl = document.querySelector("#button-next");
const slideerEl = document.querySelector(".slideer");

let totalsliders = 3;
let index = 0;
let style = "";
style = "width:" + totalsliders * 100 + "vw;";
slideerEl.style = style;

buttonprevEl.addEventListener("click", () => {

    updatecontainer("pre");
})
buttonnextEl.addEventListener("click", () => {
    updatecontainer("next");
})

function updatecontainer(direction) {

    if (direction == "next") {
        index++;
        if (index == totalsliders) {
            index = 0;
        }
    }
    else {
        if (index == 0) {
            index = totalsliders - 1;
        }
        else {
            index--;
        }
    }

    slideerEl.style = style + "transform:translateX( " + index * -100 + "vw); transition:1s;";
}


menou = document.querySelector(".menu-accsess");
menou.onclick = function () {
    list = document.querySelector(".list");
    list.classList.toggle("active")
}
$(document).ready(function () {
    $('#play-button').click(function () {
        $('#play-button').hide();
        $('#btn-video1').hide();
        $('#video-playe')[0].play();
    });
});
$(document).ready(function () {
    $('#play-button2').click(function () {
        $(this).hide();
        $('#btn-video2').hide();
        $('#video-playe2')[0].play();
    });
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}
