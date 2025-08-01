const orderButton = document.querySelector('.order-button');
const initialText = document.querySelector('.initial-text');
const finalText = document.querySelector('.final-text');
const animationElements = document.querySelector('.animation-elements');
const truck = document.querySelector('.truck');
const box = document.querySelector('.box');

orderButton.addEventListener('click', () => {
    if (orderButton.classList.contains('animating')) {
        return;
    }

    orderButton.classList.add('animating');
    initialText.style.opacity = '0';
    animationElements.style.display = 'block';

    // 1. Truck reverses
    truck.classList.add('reverse');

    // 2. Box appears
    setTimeout(() => {
        box.classList.add('appear');
    }, 250); // Box appears sooner

    // 3. Box goes into truck
    setTimeout(() => {
        box.classList.add('in-truck');
    }, 750); // Box goes in sooner

    // 4. Truck drives forward
    setTimeout(() => {
        truck.classList.add('forward');
    }, 1250); // Truck leaves sooner

    // Reset after animation
    setTimeout(() => {
        orderButton.classList.remove('animating');
        initialText.style.opacity = '1';
        finalText.style.opacity = '0';
        animationElements.style.display = 'none';
        truck.classList.remove('reverse', 'forward');
        box.classList.remove('appear', 'in-truck');
    }, 4000);
});
