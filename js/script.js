let array = [
    {
        url_image:"./img/01.webp",
        title: "Spiderman",
        description: "Spiderman"
    },
    {
        url_image:"./img/02.webp",
        title: "Ratchet & Clank",
        description: "Ratchet & Clank"
    },
    {
        url_image:"./img/03.webp",
        title: "Fortnite",
        description: "Fortnite"
    },
    {
        url_image:"./img/04.webp",
        title: "Stray",
        description: "Stray"
    },
    {
        url_image:"./img/05.webp",
        title: "Avengers",
        description: "Avengers"
    }
]

const items_slider = document.querySelector('.item-slider');
const image_left = document.querySelector('.item-left');

//creiamo dinamicamente i div con le immagini del carosello
array.forEach((elem) => {
    image_left.innerHTML += `
        <div class="main-image">
            <img src="${elem.url_image}">
            <div class="caption">
                <h3>${elem.title}</h3>
                <p>${elem.description}</p>
            </div>
        </div>
    `;

    items_slider.innerHTML += `
        <div class="item">
            <img src="${elem.url_image}">
        </div>
    `;

});

let itemActive = 0;

const items = document.getElementsByClassName('item');
items[itemActive].classList.add('active');

for(let i = 0; i < items.length; i++){
    let item = items[i];
    item.addEventListener('click', function(){
        removeClassActive(itemActive);
        itemActive = i;
        addClassActive(itemActive);
    })
}

const image = document.getElementsByClassName('main-image');
image[itemActive].classList.add('d-block');

const circles = document.getElementsByClassName('circle');
circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reverse_btn = document.getElementById('reverse');

let loop = setInterval(goToNextSlides, 2000);
let loop_reverse;
let check = true;

start_btn.addEventListener('click', function(){
    clearInterval(loop);
    clearInterval(loop_reverse);
    loop = setInterval(goToNextSlides, 2000);
    check = true;

});

stop_btn.addEventListener('click', function(){
    console.log(check);
    if(check)
        clearInterval(loop);
    else
        clearInterval(loop_reverse)
});

reverse_btn.addEventListener('click', function(){
    clearInterval(loop);
    clearInterval(loop_reverse);
    loop_reverse = setInterval(goToPreviousSlides, 2000);
    check = false;
})

next.addEventListener('click', goToNextSlides);

prev.addEventListener('click', goToPreviousSlides);

function goToNextSlides(){
    if(itemActive == array.length - 1)
    {
        removeClassActive(itemActive);
        itemActive = 0;
        addClassActive(itemActive);
    }
    else{
        removeClassActive(itemActive);
        itemActive++;
        addClassActive(itemActive);
    }
}

function goToPreviousSlides(){
    if(itemActive == 0)
    {
        removeClassActive(itemActive);
        itemActive = array.length - 1;
        addClassActive(itemActive);
    }
    else{
        removeClassActive(itemActive);
        itemActive--;
        addClassActive(itemActive);
    }
}

function removeClassActive(itemActive){
    items[itemActive].classList.remove('active');
    image[itemActive].classList.remove('d-block');
    circles[itemActive].classList.remove('active');
}

function addClassActive(itemActive){
    items[itemActive].classList.add('active');
    image[itemActive].classList.add('d-block');
    circles[itemActive].classList.add('active');
}

