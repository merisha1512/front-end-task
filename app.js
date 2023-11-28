function selectImage(imagePath, image) {
    const selectedImage = document.getElementById('selected-image');
    selectedImage.src = imagePath;
    const images = document.querySelectorAll('.image');
    images.forEach(img => img.classList.remove('selected'));
    image.classList.add('selected');
}

function selectButton(buttonId) {
    const buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.classList.remove('selectedButton');
    }
    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('selectedButton');
}

var currentValue = 1;
function updateCounter() {
    document.getElementById('counter').innerText = currentValue;
}
function increase() {
    currentValue++;
    updateCounter();
}

function decrease() {
    if (currentValue > 1) {
        currentValue--;
        updateCounter();
    }
}

function backToList() {
    const confirmation = confirm("Are you sure you want to go back?");
}

function addToCart() {
    confirm("Are you sure you want to add");
}