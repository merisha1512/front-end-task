function selectImage(imagePath, image) {
    const selectedImage = document.getElementById('selected-image');
    selectedImage.src = imagePath;
    const images = document.querySelectorAll('.image');
    images.forEach(img => img.classList.remove('selected'));
    image.classList.add('selected');
}

var qty = 1.5;
var price;
function selectButton(buttonId, quantity) {
    console.log(qty);
    const buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.classList.remove('selectedButton');
    }
    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('selectedButton');

    var totalPrice = 500 * quantity *currentValue;
    qty = quantity;
    price = totalPrice;
    document.getElementById('price').textContent = totalPrice;
}

var currentValue = 1;
function updateCounter() {
    document.getElementById('counter').innerText = currentValue;
}
function increase() {
    console.log(qty);
    currentValue++;
    updateCounter();

    var totalPrice = qty * currentValue * 500;
    document.getElementById('price').textContent = totalPrice;
}

function decrease() {
    if (currentValue > 1) {
        currentValue--;
        updateCounter();
    }
    var totalPrice = qty * currentValue *500;
    document.getElementById('price').textContent = totalPrice;
}

function backToList() {
    const confirmation = confirm("Are you sure you want to go back?");
}

function addToCart() {
    confirm("Are you sure you want to add");
}
