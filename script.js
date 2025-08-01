const orderButton = document.querySelector('.order-button');
const initialText = document.querySelector('.initial-text');
const finalText = document.querySelector('.final-text');
const animationElements = document.querySelector('.animation-elements');
const truck = document.querySelector('.truck');
const box = document.querySelector('.box');
const headlamp = document.querySelector('.headlamp');
const trunk = document.querySelector('.truck #trunk'); // Assuming an ID for the trunk path
const road = document.querySelector('.road');

orderButton.addEventListener('click', () => {
    if (orderButton.classList.contains('animating')) {
        return;
    }

    orderButton.classList.add('animating');
    initialText.style.opacity = '0';
    animationElements.style.display = 'block';

    // 1. Truck reverses
    truck.classList.add('reverse');
    road.classList.add('moving');

    // 2. Box appears
    setTimeout(() => {
        box.classList.add('appear');
    }, 250);

    // 3. Box goes into truck
    setTimeout(() => {
        box.classList.add('in-truck');
    }, 750);

    // 4. Trunk closes
    setTimeout(() => {
        if(trunk) trunk.style.animation = 'trunk-close 0.5s ease-in-out forwards';
    }, 1250);

    // 5. Headlamp on
    setTimeout(() => {
        headlamp.classList.add('on');
    }, 1500);

    // 6. Truck drives forward
    setTimeout(() => {
        truck.classList.add('forward');
    }, 1750);


    // Reset after animation
    setTimeout(() => {
        orderButton.classList.remove('animating');
        initialText.style.opacity = '1';
        finalText.style.opacity = '0';
        animationElements.style.display = 'none';
        truck.classList.remove('reverse', 'forward');
        box.classList.remove('appear', 'in-truck');
        headlamp.classList.remove('on');
        if(trunk) trunk.style.animation = '';
        road.classList.remove('moving');
    }, 4000);
});
