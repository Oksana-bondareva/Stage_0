const magnifierIcon = document.querySelector(".icon-magnifier");
const closeIcon = document.querySelector(".icon-close");
const inputSearch = document.getElementById("search-input");

function search() {
    if (inputSearch.value !== '') {
        magnifierIcon.style.display = "none";
        closeIcon.style.display = "block";
    } 
}

function searchClean() {
    inputSearch.value = "";
    closeIcon.style.display = "none";
    magnifierIcon.style.display = "block";
}

inputSearch.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
     magnifierIcon.click();
    }
});

