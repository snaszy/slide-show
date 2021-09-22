import image1 from './images/mountain1.jpg';
import image2 from './images/mountain2.jpg';
import image3 from './images/mountain3.jpg';
import image4 from './images/mountain4.png';
import './style.css';

let imageArray = [];

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

document.addEventListener('click', (e) => {
    const leftClick = e.target.matches('#left-nav');
    const rightClick = e.target.matches('#right-nav');

    if (rightClick || leftClick) {
        document.querySelectorAll('.image').forEach(image => {
            image.classList.remove('active');
        })
    }
    if (rightClick) {
        let rightMove = imageArray.shift()
        imageArray.push(rightMove);
        imageArray[0].classList.toggle('active');
        console.log(imageArray[0])
    }
    if (leftClick) {
        let leftMove = imageArray.pop();
        imageArray.unshift(leftMove);
        imageArray[0].classList.toggle('active');
        console.log(imageArray)
    }
})

//push images to an array
//pull images to array to show image
//right pushes images to array
//left shifts images to the array