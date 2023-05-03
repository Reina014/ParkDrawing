let introBtns = document.querySelectorAll('.introBtn');

// for the moving phone
let movingPhone = document.querySelector('#phone');
let ranNum = Math.random() * window.innerWidth * .5;
let shutterSound = document.querySelector('#shutter')

let airLayer1 = document.querySelector('#color-layer1');

let subwayPic = document.querySelector('#subway');
let subwayNoise = document.querySelector('#subwayNoise');
let interval;

let natureSound = document.querySelector('#natureSound');


setInterval(function () {
    const left = parseInt(getComputedStyle(movingPhone).getPropertyValue('left'));
    movingPhone.style.transform = 'translateX(' + ranNum + 'px)';

    ranNum = Math.random() * window.innerWidth * .5;
}, 7000);

movingPhone.addEventListener('pointerdown', function () {
    console.log('clicked');
    shutterSound.play();
})

if (!localStorage.getItem('status')) {
   

    //if the user interact with the page
    subwayPic.addEventListener('pointerdown', function () {

        setTimeout(function () {
            airLayer1.style.opacity = "0";
            subwayPic.style.opacity = "0";
        }, 2000)

        setTimeout(function () {

            airLayer1.style.display = 'none';
            subwayPic.style.display = 'none';
            document.querySelector('#trainLayer').style.display = 'none';
            subwayNoise.pause();
        }, 5000);

        interval = setInterval(function () {
            if (subwayNoise.volume > 0) {
                subwayNoise.volume = Math.max(0, subwayNoise.volume - 0.1);
                natureSound.volume = Math.max(1, subwayNoise.volume + 0.1);
                natureSound.play();

            } else {
                // for (let i = 0; i < introBtns.length; i++) {
                //     introBtns[i].style.display = 'block';
                // }
                subwayNoise.pause();
                clearInterval(interval);
                

                
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
                document.querySelector('#trainLayer').style.display = 'none';
                subwayNoise.pause();
            }, 5000);

            interval = setInterval(function () {
                if (subwayNoise.volume > 0) {
                    subwayNoise.volume = Math.max(0, subwayNoise.volume - 0.1);
                } else {
                    subwayNoise.pause();
                    natureSound.play();
                    clearInterval(interval);
                    // for (let i = 0; i < introBtns.length; i++) {
                    //     introBtns[i].style.display = 'block';
                    // }

                }
            }, 1000);

        }

        localStorage.setItem('status', 'visited');
    }, 24000);


} else {
    document.querySelector('#trainLayer').style.display = 'none';
    // for (let i = 0; i < introBtns.length; i++) {
    //     introBtns[i].style.display = 'block';
    // }

    movingPhone.style.opacity = 1;

    subwayNoise.pause();
    natureSound.play();
}
