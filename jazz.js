    // Get a reference to the canvas element
    const canvas = document.getElementById('notes');
    let noteArray = ['note1.png', 'note2.png', 'note3.png']

    let ranArray = Math.floor(Math.random() * 3);

    // set the expected frame rate
    let fps = 60; // frames per second (60 is a good standard)
    let previousTime = performance.now(); // time since navigating page

    let frameInterval = 1000 / fps; // milliseconds between frames
    let deltaTimeMultiplier = 1; // initialize multiplier value
    // amount of time between animation function calls
    let delta_time = 0;

    // Set the canvas dimensions
    canvas.width = window.innerWidth * .5;
    canvas.height = window.innerHeight * .7;



    // Load the note image
    const noteImg = new Image();
    noteImg.src = 'media/jazzPage/' + noteArray[ranArray];
    const noteImg1 = new Image();
    noteImg1.src = 'media/jazzPage/' + noteArray[ranArray];

    // Draw the note image at a specific location on the canvas
    let ranSize = Math.random() * 160 + 140;

    // Animate the note image by changing its position and applying a wavy motion
    let xPos = canvas.width / 2;
    let yPos = canvas.height / 2;

    let ranNumX = Math.random() * 6 - 3;
    let ranNumY = Math.random() * 3 + 2;

    let opacity = 1;

    function animateNote(currentTime) {
        opacity -= 0.002;
        canvas.style.opacity = opacity;
        // time between function calls
        deltaTime = currentTime - previousTime;
        // like devicePixelRatio for screen refresh rate
        deltaTimeMultiplier = deltaTime / frameInterval;

        previousTime = currentTime; // take time stamp

        const ctx = canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        if (ranNumX < 0) {
            if (xPos > 0 && yPos < canvas.height && canvas.style.opacity > 0) {
                xPos += ranNumX * deltaTimeMultiplier;
                yPos += ranNumY * deltaTimeMultiplier;
            } else {
                xPos = canvas.width / 2;
                yPos = canvas.height / 2;;

                ranNumX = Math.random() * 6 - 3;
                ranNumY = Math.random() * 2.5 + .5;

                ranArray = Math.floor(Math.random() * 3);
                noteImg.src = 'media/jazzPage/' + noteArray[ranArray];
                ranSize = Math.random() * 160 + 140;
                opacity = 1;
            }
        } else {
            if (xPos < canvas.width && yPos < canvas.height && canvas.style.opacity > 0.00001) {
                xPos += ranNumX * deltaTimeMultiplier;
                yPos += ranNumY * deltaTimeMultiplier;
            } else {
                xPos = canvas.width / 2;
                yPos = canvas.height / 2;;

                ranNumX = Math.random() * 6 - 3;
                ranNumY = Math.random() * 2.5 + .5;

                ranArray = Math.floor(Math.random() * 3);
                noteImg.src = 'media/jazzPage/' + noteArray[ranArray];
                ranSize = Math.random() * 160 + 140;
                opacity = 1;
            }
        }

        // Calculate the new position of the note

        // Draw the note at the new position
        ctx.drawImage(noteImg, xPos, yPos, ranSize, ranSize);



        // Request the next animation frame
        requestAnimationFrame(animateNote);


    }

    // Start the animation
    animateNote();

    window.addEventListener('load', () => {
        window.requestAnimationFrame(animateNote);
    });
