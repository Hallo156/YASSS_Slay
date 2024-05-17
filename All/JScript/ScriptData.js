
document.getElementById('Over').addEventListener('click',
    function() {
    let Sibuna = document.getElementsByTagName("Overview");

        Sibuna[0].style.display = "block";

    Sibuna = document.getElementsByTagName("Ability");

        Sibuna[0].style.display = "none";

    Sibuna = document.getElementsByTagName("Relationship");

        Sibuna[0].style.display = "none";

    });

document.getElementById('Aby').addEventListener('click',
    function() {
    let Sibuna = document.getElementsByTagName("Overview");

        Sibuna[0].style.display = "none";

    Sibuna = document.getElementsByTagName("Ability");

        Sibuna[0].style.display = "block";

    Sibuna = document.getElementsByTagName("Relationship");

        Sibuna[0].style.display = "none";

    });

document.getElementById('Rela').addEventListener('click',
    function() {
    let Sibuna = document.getElementsByTagName("Overview");

        Sibuna[0].style.display = "none";

    Sibuna = document.getElementsByTagName("Ability");

        Sibuna[0].style.display = "none";

    Sibuna = document.getElementsByTagName("Relationship");

            Sibuna[0].style.display = "block";

    });