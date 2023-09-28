const magnifierIcon = document.querySelector(".icon-magnifier");
const closeIcon = document.querySelector(".icon-close");
const inputSearch = document.getElementById("search-input");
const urlOpenWeb = 'https://api.unsplash.com/search/photos?query=nature&client_id=nXa5-M9_qgNsLR4isDIjNkhPj0RrnpXXyaTOTcselHQ&&per_page=15';
const accessKey = 'nXa5-M9_qgNsLR4isDIjNkhPj0RrnpXXyaTOTcselHQ';
const imagesConteiner = document.getElementById("images");
let allImages; 

function search() {
    if (inputSearch.value !== "") {
        magnifierIcon.style.display = "none";
        closeIcon.style.display = "block";
        getImages();
    } 
}

function searchClean() {
    inputSearch.value = "";
    closeIcon.style.display = "none";
    magnifierIcon.style.display = "block";
}

inputSearch.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     magnifierIcon.onclick();
    }
});

const getImages = () => {
    imagesConteiner.innerHTML = "";
    let searchParam = inputSearch.value;
    const urlSearch = `https://api.unsplash.com/search/photos?query=${searchParam}&client_id=nXa5-M9_qgNsLR4isDIjNkhPj0RrnpXXyaTOTcselHQ&&per_page=15`;
    fetch(urlSearch)
    .then(res => res.json())
    .then(data => {
        allImages = data.results;
        makeImages(allImages);
    });
}

const startImages = () => {
    fetch(urlOpenWeb)
    .then(res => res.json())
    .then(data => {
        allImages = data.results;
        makeImages(allImages);
    });
}

const makeImages = (data) => {
    data.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'img';
        imagesConteiner.appendChild(img);
    })
}

if(inputSearch.value === ""){
    startImages();
} 