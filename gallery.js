// JavaScript for Art Gallery

var currentImageIndex = 0;
var images = [];
var captions = [];

function showImage(imageUrl, title, description) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxTitle = document.getElementById('lightboxCaption').getElementsByTagName('h3')[0];
  var lightboxDescription = document.getElementById('lightboxCaption').getElementsByTagName('p')[0];
  var prevButton = document.getElementsByClassName('prevButton')[0];
  var nextButton = document.getElementsByClassName('nextButton')[0];

  lightboxImage.src = imageUrl;
  lightboxTitle.textContent = title;
  lightboxDescription.textContent = description;

  lightbox.style.display = 'flex';

  images = Array.from(document.querySelectorAll('#gallery .image-container img'));
  currentImageIndex = images.findIndex(function (img) {
    return img.src === imageUrl;
  });

  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  document.addEventListener('keydown', handleKeyboardNavigation);
}

function hideImage() {
  var lightbox = document.getElementById('lightbox');
  var prevButton = document.getElementsByClassName('prevButton')[0];
  var nextButton = document.getElementsByClassName('nextButton')[0];

  lightbox.style.display = 'none';

  prevButton.removeEventListener('click', prevImage);
  nextButton.removeEventListener('click', nextImage);

  document.removeEventListener('keydown', handleKeyboardNavigation);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  var prevImage = images[currentImageIndex];
  showImage(prevImage.src, prevImage.alt, prevImage.getAttribute('data-description'));
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  var nextImage = images[currentImageIndex];
  showImage(nextImage.src, nextImage.alt, nextImage.getAttribute('data-description'));
}

function handleKeyboardNavigation(event) {
  var key = event.key;
  if (key === 'ArrowLeft') {
    prevImage();
  } else if (key === 'ArrowRight') {
    nextImage();
  }
}
 var deathGripsButton = document.getElementById("deathGripsButton");
  var videoModal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  var closeButton = document.getElementsByClassName("close")[0];

  deathGripsButton.addEventListener("click", function() {
    videoModal.style.display = "block";
    videoPlayer.play();
  });

  closeButton.addEventListener("click", function() {
    videoModal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });
 var deathGripsButton = document.getElementById("deathGripsButton");
  var videoModal = document.getElementById("videoModal");
  var videoPlayer = document.getElementById("videoPlayer");
  var closeButton = document.getElementsByClassName("close")[0];

  deathGripsButton.addEventListener("click", function() {
    videoModal.style.display = "block";
    videoPlayer.play();
  });

  closeButton.addEventListener("click", function() {
    videoModal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });









var canvas = document.getElementById("paintingCanvas");
var context = canvas.getContext("2d");


var isDrawing = false;
var lastX = 0;
var lastY = 0;
var brushSize = 5;
var brushColor = "#000000";


canvas.width = 900; 
canvas.height = 600; 


canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


function startDrawing(e) {
  if (e.target === canvas) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
}


function draw(e) {
  if (!isDrawing) return;
  if (e.target === canvas) {
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = brushColor;
    context.lineWidth = brushSize;
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
     context.lineJoin = 'round'; 
    context.lineCap = 'round'; 
    
  }
}


function stopDrawing() {
  isDrawing = false;
}


function showPaintingModal() {
  var modal = document.getElementById("paintingModal");
  modal.style.display = "block";
}


function hidePaintingModal() {
  var modal = document.getElementById("paintingModal");
  modal.style.display = "none";
}


function updateBrushSize() {
  var sizeInput = document.getElementById("brushSize");
  brushSize = sizeInput.value;
}


function updateBrushColor() {
  var colorInput = document.getElementById("brushColor");
  brushColor = colorInput.value;
}




function savePainting() {
  var paintingNameInput = document.getElementById("paintingName");
  var paintingDescriptionInput = document.getElementById("paintingDescription");
  var paintingName = paintingNameInput.value;
  var paintingDescription = paintingDescriptionInput.value;

  var dataURL = canvas.toDataURL();

  var newImage = document.createElement("img");
  newImage.src = dataURL;
  newImage.alt = paintingName;
  newImage.setAttribute("onclick", `showImage('${dataURL}', '${paintingName}', '${paintingDescription}')`);

 
  var newImageContainer = document.createElement("div");
  newImageContainer.className = "image-container";
  newImageContainer.appendChild(newImage);

 
  var gallery = document.getElementById("gallery");
  gallery.appendChild(newImageContainer);


  paintingNameInput.value = "";
  paintingDescriptionInput.value = "";

  context.save();

  
  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);

 
  context.restore();

  
  hidePaintingModal();
}















