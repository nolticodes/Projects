
//IMAGE ARRAY
const imgArray = [
    "./img/gallery/anime.jpg",
    "./img/gallery/bird_white.jpg",
    "./img/gallery/bird.jpg",
    "./img/gallery/dark_clouds.png",
    "./img/gallery/duck.jpg",
    "./img/gallery/earth_from_sky.jpg",
    "./img/gallery/leopards.jpg",
    "./img/gallery/men_night_sea.jpg",
    "./img/gallery/mountain_sea.jpg",
    "./img/gallery/mountain_sky.jpg",
    "./img/gallery/winter_mountains.jpg",
    "./img/gallery/wintertree.jpg",
]

// BILDER IN ÜBERSICHT LADEN
const imgOverviewRef = document.getElementById("image_overview_id")

function renderImages() {
    for(i=0; i<imgArray.length; i++) {
        imgOverviewRef.innerHTML += `<img onclick="openImageDialog(${[i]})" id="image${[i]}" src="${imgArray[i]}"></img>`;
    }
}

// DIALOG ÖFFNEN & SCHLIESSEN
const dialogRef = document.getElementById("image_view_dialog");
let currentIndex = "";

function setCurrentIndex(i){
    currentIndex = i
}

function openImageDialog(i) {
    dialogRef.showModal();
    renderImageInDialog(i);
    loadTitleToDialog(i);
    imageCounterFctn(i);
    setCurrentIndex(i);
}

function closeImageDialog() {
    dialogRef.close();
}

// BILD IN DIALOG LADEN
const imageInDialogRef = document.getElementById("image_open_in_dialog"); 

function renderImageInDialog(i) {
    imageInDialogRef.innerHTML = `<img src="${imgArray[i]}"> </img>`;
}

// TITEL IN DIALOG LADEN
const titleImageInDialogRef = document.getElementById("dialog_image_name");

function loadTitleToDialog(i) {
    titleImageInDialogRef.innerHTML = imgArray[i].replace("_", " ").replace("_", " ").slice(14, -4);
}

// COUNTER IN DIALOG LADEN 
const imageCounterRef = document.getElementById("image_counter"); 

function imageCounterFctn(i){ 
    imageCounterRef.innerHTML = i+1 + " / " + imgArray.length;
}

// BUTTON ZURÜCK
const prevButtonRef = document.getElementById("btn_prev")

function prevImage(){
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    imageCounterFctn(currentIndex);
    imageCounterFctn(currentIndex);
    renderImageInDialog(currentIndex);
    loadTitleToDialog(currentIndex);
}

// BUTTON WEITER
function nextImage(){
    currentIndex = (currentIndex + 1) % imgArray.length;
    imageCounterFctn(currentIndex);
    renderImageInDialog(currentIndex);
    loadTitleToDialog(currentIndex);
}




