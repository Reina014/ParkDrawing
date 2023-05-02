// for the moving phone
let movingPhone = document.querySelector('#phone');
let ranNum = Math.random() * window.innerWidth * .5;
let shutterSound = document.querySelector('#shutter')
movingPhone.addEventListener('pointerdown', function () {
    shutterSound.play();
})

setInterval(function () {
    const left = parseInt(getComputedStyle(movingPhone).getPropertyValue('left'));
    movingPhone.style.transform = 'translateX(' + ranNum + 'px)';

    ranNum = Math.random() * window.innerWidth * .5;
}, 7000);

//for the interface buttons
//the layer of phone is at front
let navBtn1 = document.querySelector('#btn1');
let navBtn2 = document.querySelector('#btn2');
let navBtn3 = document.querySelector('#btn3');

navBtn1.addEventListener('pointerover', function () {
    navBtn1.style.opacity = 1;
})

navBtn2.addEventListener('pointerover', function () {
    navBtn2.style.opacity = 1;
})

navBtn3.addEventListener('pointerover', function () {
    navBtn3.style.opacity = 1;
})

navBtn1.addEventListener('touchstart', function () {
    navBtn1.style.opacity = 1;
})

navBtn2.addEventListener('touchstart', function () {
    navBtn2.style.opacity = 1;
})

navBtn3.addEventListener('touchstart', function () {
    navBtn3.style.opacity = 1;
})


const width = window.innerWidth;
const height = window.innerHeight;
const third = width / 3;
const thirdY = height / 3;

let areaBoxes = document.querySelector('#areaBoxes');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');

box1.style.width = width/3;
box1.style.height = height;
box2.style.width = third*2;
box2.style.height = height;
box3.style.width = width;
box3.style.height = height;


areaBoxes.addEventListener('pointerover', function (event) {
    console.log('hovering the page!!')
    let x = event.clientX;
    let y = event.clientY;

    //for ice cream booth
    if (x < third) {
        navBtn1.style.opacity = 1;
        navBtn2.style.opacity = 0;
        navBtn3.style.opacity = 0;
    } else if (x > third && x < third * 2) {
        navBtn1.style.opacity = 0;
        navBtn2.style.opacity = 1;
        navBtn3.style.opacity = 0;
    } else if (x > third * 2) {
        navBtn1.style.opacity = 0;
        navBtn2.style.opacity = 0;
        navBtn3.style.opacity = 1;
    }
})

areaBoxes.addEventListener('pointerout', function () {
    navBtn1.style.opacity = 0;
    navBtn2.style.opacity = 0;
    navBtn3.style.opacity = 0;
})

movingPhone.addEventListener('touchstart', function (event) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = event.clientX;
    const y = event.clientY;
    const third = width / 3;
    const thirdY = height / 3;

    //for ice cream booth
    if (x < third && y > thirdY * 2) {
        navBtn1.style.opacity = 1;
        navBtn2.style.opacity = 0;
        navBtn3.style.opacity = 0;
    } else if (third < x && x < third * 2) {
        navBtn1.style.opacity = 0;
        navBtn2.style.opacity = 1;
        navBtn3.style.opacity = 0;
    } else if (x > third * 2) {
        navBtn1.style.opacity = 0;
        navBtn2.style.opacity = 0;
        navBtn3.style.opacity = 1;
    }
})

movingPhone.addEventListener('touchend', function () {
    navBtn1.style.opacity = 0;
    navBtn2.style.opacity = 0;
    navBtn3.style.opacity = 0;
})

function showNavBtn(event) {
    // Get the x position of the mouse or touch event
    const width = movingPhone.offsetWidth;
    const x = event.clientX - movingPhone.left;
    const third = width / 3;

    if (x < third) {
        navBtn1.style.opacity = 1;
        navBtn2.style.opacity = 0;
        navBtn3.style.opacity = 0;
    } else if (x < third * 2) {
        navBtn1.style.opacity = 0;
        navBtn2.style.opacity = 1;
        navBtn3.style.opacity = 0;
    } else {
        navBtn1.style.opacity = 0;
        navBtn2.style.opacity = 0;
        navBtn3.style.opacity = 1;
    }
}

if (!localStorage.getItem('status')) {
    let airLayer1 = document.querySelector('#color-layer1');
    let airLayer2 = document.querySelector('#color-layer2');
    let subwayPic = document.querySelector('#subway');
    let subwayNoise = document.querySelector('#subwayNoise');
    let interval;

    let natureSound = document.querySelector('#natureSound');

    //if the user interact with the page
    subwayPic.addEventListener('pointerdown', function () {

        setTimeout(function () {
            airLayer1.style.opacity = "0";
            subwayPic.style.opacity = "0";
        }, 2000)

        setTimeout(function () {

            airLayer1.style.display = 'none';
            subwayPic.style.display = 'none';
            subwayNoise.pause();
        }, 5000);

        interval = setInterval(function () {
            if (subwayNoise.volume > 0) {
                subwayNoise.volume = Math.max(0, subwayNoise.volume - 0.1);
                natureSound.volume = Math.max(1, subwayNoise.volume + 0.1);
                natureSound.play();

            } else {
                clearInterval(interval);
                subwayNoise.pause();

            }
        }, 1000);

        localStorage.setItem('status', 'visited');

    })

    //if the user did not interact with the page
    setTimeout(function () {
        if (subwayPic.style.display != 'none') {
            setTimeout(function () {
                airLayer1.style.opacity = "0";
                subwayPic.style.opacity = "0";
            }, 2000)

            setTimeout(function () {

                airLayer1.style.display = 'none';
                subwayPic.style.display = 'none';
                subwayNoise.pause();
            }, 5000);

            interval = setInterval(function () {
                if (subwayNoise.volume > 0) {
                    subwayNoise.volume = Math.max(0, subwayNoise.volume - 0.1);
                } else {
                    subwayNoise.pause();
                    natureSound.play();
                    clearInterval(interval);

                }
            }, 1000);

        }

        localStorage.setItem('status', 'visited');
    }, 24000);


} else {
    document.querySelector('#trainLayer').style.display = 'none';
}
