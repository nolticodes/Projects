// ARRAY MIT BILDERN




//DIALOG ÖFFNEN
function openImageDialog(){
    let dialogImageRef = document.getElementById("image_view_dialog");
    dialogImageRef.showModal();
}


//DIALOG SCHLIEßEN
function catchImageName(){
    let dialogImageNameRef = document.getElementById("dialog_image_name");
    let chosenImageRef = document.getElementById("image_id").alt
    console.log(dialogImageNameRef);

    dialogImageNameRef.innerHTML = chosenImageRef
    console.log(dialogImageNameRef);
}

catchImageName()


//DIALOG BUTTONS



