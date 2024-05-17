SLAY = true;
document.getElementById('SLAY').addEventListener('click',
    function() {
    if(SLAY){
    let Sibuna = document.getElementsByTagName("ImageN");
    for(let i = 0; i < Sibuna.length; i++){
        Sibuna[i].style.display = "none";
    }
    Sibuna = document.getElementsByTagName("ImageS");
    for(let i = 0; i < Sibuna.length; i++){
        Sibuna[i].style.display = "block";
    }
    SLAY = false;
    } else {
    let Sibuna = document.getElementsByTagName("ImageN");
    for(let i = 0; i < Sibuna.length; i++){
        Sibuna[i].style.display = "block";
    }
    Sibuna = document.getElementsByTagName("ImageS");
    for(let i = 0; i < Sibuna.length; i++){
        Sibuna[i].style.display = "none";
    }
    SLAY = true;
    }
    });