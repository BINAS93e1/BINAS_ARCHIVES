function showPopup(name, artist, year, origin, image) {

    document.getElementById("painting-name").innerHTML = name;
    document.getElementById("artist").innerHTML = artist;
    document.getElementById("year").innerHTML = year;
    document.getElementById("origin").innerHTML = origin;
    document.querySelector(".popup-image").setAttribute("src", image);


    document.getElementById("popup").style.display = "flex";
}

function closePopup() {

    document.getElementById("popup").style.display = "none";
}

document.querySelector(".close-button").addEventListener("click", closePopup);

document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target == document.getElementById("popup")) {
        closePopup();
    }
});