import image1 from './images/mountain1.jpg';
import image2 from './images/mountain2.jpg';
import image3 from './images/mountain3.jpg';
import image4 from './images/mountain4.png';
import './style.css';

let imageArray = [];
let indexCounter = 0;

const loadPage = () => {
    const firstImage = document.querySelector('#image1');
    firstImage.src = image1;
    firstImage.classList = "image active";
    imageArray.push(firstImage);

    const secondImage = document.querySelector('#image2');
    secondImage.src = image2;
    imageArray.push(secondImage);

    const thirdImage = document.querySelector('#image3');
    thirdImage.src = image3;
    imageArray.push(thirdImage);

    const fourthImage = document.querySelector('#image4');
    fourthImage.src = image4;
    imageArray.push(fourthImage);

    updateCircles();
}

const clearNav = (parent) => { 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const updateCircles = () => {
    const navSelector = document.querySelector('.nav-selector');
    clearNav(navSelector);
    createNavCircle(imageArray,navSelector);
}

const createNavCircle = (array,nav) => {
    let i=0;
    array.forEach(image => {
        i++
        if (image.matches('.image.active')) {
            image = document.createElement('div');
            image.classList = 'nav-circle selected';
            image.id = 'circle' + i;
            nav.appendChild(image);
        } else {
            image = document.createElement('div');
            image.classList = 'nav-circle';
            image.id = 'circle' + i;
            nav.appendChild(image);
        }
    })
}

const checkNumber = () => {
    if (indexCounter > 3) {
        indexCounter = 0;
    } else if (indexCounter < 0) {
        indexCounter = 3;
    }
}

const updateDisplay = () => {
    checkNumber();
    imageArray[indexCounter].classList.toggle('active');
    updateCircles();
}

document.addEventListener('click', (e) => {
    const leftClick = e.target.matches('#left-nav');
    const rightClick = e.target.matches('#right-nav');
    const circleClick = e.target.matches('.nav-circle');
    
    if (rightClick || leftClick || circleClick) {
        document.querySelectorAll('.image').forEach(image => {
            image.classList.remove('active');
        })
    }

    let currentCircle;
    if (circleClick) {
        currentCircle = e.target.closest('.nav-circle');
        if (currentCircle.id.includes('1')) {
            indexCounter = 0;
        }else if (currentCircle.id.includes('2')) {
            indexCounter = 1;
        }else if (currentCircle.id.includes('3')) {
            indexCounter = 2;
        }else {
            indexCounter = 3;
        }
        updateDisplay();
    }

    if (rightClick) {
        indexCounter++;
        updateDisplay();
    }
    if (leftClick) {
        indexCounter--;
        updateDisplay();
    }
    
})

loadPage();

//currently to display image the right and left add and subtract 
//from a number
//when selecting the circle there is not adding or subracting. 
//have to figure out how to pull the information out of the array
//from the circles.. numbering?