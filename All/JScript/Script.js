image = 0;
Image = [];
ImageText = [];

fillArray();


function fillArray(){
let Sibuna = document.querySelectorAll("ImageS img");
Sibuna.forEach(function(img) {
           Image.push(img.src);
           });
Sibuna = document.getElementsByTagName("ImgText");
for(let i = 0; i < Sibuna.length; i++){
ImageText[i] = Sibuna[i].textContent;

}
setInterval(myTimer, 5000);
}

document.getElementById('plus').addEventListener('click',
    function() {
    if(image < Image.length -1){
    image ++;
    whichImage();
    }
    });

document.getElementById('minus').addEventListener('click',
    function() {
    if(image > 0){
        image --;
        whichImage();
        }
    });

    function whichImage(){
    let Sibuna = document.getElementById("gallery");
    Sibuna.src = Image[image];
    Sibuna = document.getElementById("galleryText");
    Sibuna.textContent = ImageText[image];
    }


function getImage(){
 return this.image;
}

function setImage(image){
this.image = image;
}

function myTimer() {

image = getImage();
      if(image > Image.length -2){
            image = -1;
            }
      image ++;
      setImage(image);
      whichImage();
}
