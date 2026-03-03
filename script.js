// ARRAY MIT BILDERN




// DIALOG ÖFFNEN
function openImageDialog(){
    let dialogImageRef = document.getElementById("image_view_dialog");
    dialogImageRef.showModal();
}


// DIALOG SCHLIEßEN
// function catchImageName(){
//     let dialogImageNameRef = document.getElementById("dialog_image_name");
//     let chosenImageRef = document.getElementById("image_id").alt
//     console.log(dialogImageNameRef);

//     dialogImageNameRef.innerHTML = chosenImageRef
//     console.log(dialogImageNameRef);
// }

// catchImageName()

// FUNKTION ZUM RENDERN FÜR BILDER MINIATURANSICHT
const imgs = [
  "./img/gallery/714707b1ea80f159dacba47280dc1091bbebb9c7.jpg",
  "./img/gallery/0872285883cee475f9533508e645f19ef0939ae8.png",
  "./img/gallery/3c416b08502bf2ed10a304bdce5c1c782b99c40d.jpg",
  "./img/gallery/4ac67c63bfc2b6a80cca4919df91a1e498ec4c07.jpg",
  "./img/gallery/872f2a95ab48c88b865e4f11d2e061a802987c88.jpg",
  "./img/gallery/8bc8dae8f655d7cac8d770f66d76f62367f5b5df.jpg",
  "./img/gallery/93265accae6c295655b8fd3cc1113f8c76b70797.jpg",
  "./img/gallery/bbd3479cb0c36ecd872f4526275e11a893e50107.jpg",
  "./img/gallery/cc1d7f8870c4b98e849a8e36c6c397e0f71486f9.jpg",
  "./img/gallery/dc4b11f7f36deb9409236c10ebcd6c849b00f447.jpg",
  "./img/gallery/f1ba9135a20ea8343ad3d5732c6f8a541ec455b5.jpg",
  "./img/gallery/f2b056a08d5edba809ca216fa6aa66a4bb612ea8.jpg",
];

               
const container = document.getElementById("image_overview_id");

function renderImages() {
  let getImgs = "";
  for (let i = 0; i < imgs.length; i++) {
    getImgs += `<img src="${imgs[i]}" alt="Gallery image ${i + 1}" onclick="openImageDialog()">`;
  }
  container.innerHTML = getImgs;
}

renderImages();


// FUNKTION ZUM REDNERN FÜR DIALOGINHALT 
// BILDNAME

// NUMMER BILD 



// DIALOG BUTTONS
// DIALOG SCHLIEßEN

// BILDER VORWÄRTS/RÜCKWÄRTS

