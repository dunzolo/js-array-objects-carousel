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
    items_slider.innerHTML += `
        <div class="item">
            <img src="${elem.url_image}">
        </div>
    `;

    image_left.innerHTML += `
        <div class="d-none">
            <img src="${elem.url_image}">
            <div class="caption">
                <h4>${elem.title}</h4>
                <p>${elem.description}</p>
            </div>
        </div>
    `;
});

let itemActive = 0;

const items = document.getElementsByClassName('item');
items[itemActive].classList.add('active');

const image = document.getElementsByClassName('d-none');
image[itemActive].classList.add('d-block');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let loop = setInterval(goToNextSlides, 2000);

next.addEventListener('click', goToNextSlides);

prev.addEventListener('click', goToPreviousSlides);

function goToNextSlides(){
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

function goToPreviousSlides(){
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


function removeClassActive(itemActive){
    items[itemActive].classList.remove('active');
    image[itemActive].classList.remove('d-block');
    // circles[itemActive].classList.remove('active');
}

function addClassActive(itemActive){
    items[itemActive].classList.add('active');
    image[itemActive].classList.add('d-block');
    // circles[itemActive].classList.add('active');
}

