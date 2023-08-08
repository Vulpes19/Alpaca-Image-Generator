
const paths = new Map();
paths.set('Earings', 'assets/accessories/earings.png');
paths.set('Flower', 'assets/accessories/flower.png');
paths.set('Glasses', 'assets/accessories/glasses.png');
paths.set('Headphones', 'assets/accessories/headphone.png');
paths.set('Blue', 'assets/backgrounds/blue50.png');
paths.set('Dark blue', 'assets/backgrounds/darkblue50.png');
paths.set('Green', 'assets/backgrounds/green50.png');
paths.set('Grey', 'assets/backgrounds/grey40.png');
paths.set('Red', 'assets/backgrounds/red50.png');
paths.set('Yellow', 'assets/backgrounds/yellow50.png');
paths.set('Default_ears', 'assets/ears/default.png');
paths.set('Tilt backward', 'assets/ears/tilt-backward.png');
paths.set('Tilt forward', 'assets/ears/tilt-forward.png');
paths.set('Angry', 'assets/eyes/angry.png');
paths.set('default_eyes', 'assets/eyes/default.png');
paths.set('Naughty', 'assets/eyes/naughty.png');
paths.set('Panda', 'assets/eyes/panda.png');
paths.set('Smart', 'assets/eyes/smart.png');
paths.set('Star', 'assets/eyes/star.png');
paths.set('default_hair', 'assets/hair/default.png');
paths.set('Bang', 'assets/hair/bang.png');
paths.set('Curls', 'assets/hair/curls.png');
paths.set('Elegant', 'assets/hair/elegant.png');
paths.set('Fancy', 'assets/hair/fancy.png');
paths.set('Quiff', 'assets/hair/quiff.png');
paths.set('Short', 'assets/hair/short.png');
paths.set('default_leg', 'assets/leg/default.png');
paths.set('Bubble tea', 'assets/leg/bubble-tea.png');
paths.set('Cookie', 'assets/leg/cookie.png');
paths.set('Game console', 'assets/leg/game-console.png');
paths.set('Tilt backward', 'assets/leg/tilt-backward.png');
paths.set('Tilt forward', 'assets/leg/tilt-forward.png');
paths.set('default_mouth', 'assets/mouth/default.png');
paths.set('Astonished', 'assets/mouth/astonished.png');
paths.set('Eating', 'assets/mouth/eating.png');
paths.set('Laugh', 'assets/mouth/laugh.png');
paths.set('Tongue', 'assets/mouth/tongue.png');
paths.set('default_neck', 'assets/neck/default.png');
paths.set('Bend backward', 'assets/neck/bend-backward.png');
paths.set('Bend forward', 'assets/neck/bend-forward.png');
paths.set('Thick', 'assets/neck/thick.png');

function addButton( text, container, key )
{
    const button = document.createElement('button');
    button.textContent = text;
    button.id = text;
    container.appendChild(button);
    checkButtonsWidth();
    button.addEventListener('click', function() {
        updateImage('accessories', paths.get(key));
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const firstLine = document.getElementById('first_line');
    const secondLine = document.getElementById('second_line');
    const thirdLine = document.getElementById('third_line');
    const accessoriesButton = document.getElementById('b8');
    const bgButton = document.getElementById('b7');
    const earsButton = document.getElementById('b3');
    const eyesButton = document.getElementById('b2');
    const hairButton = document.getElementById('b1');
    const legButton = document.getElementById('b6');
    const mouthButton = document.getElementById('b4');
    const neckButton = document.getElementById('b8');

    bgButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Blue', firstLine, 'Blue' );
            addButton( 'Dark blue', 'Dark Blue' );
            addButton( 'Green', firstLine, 'Green' );
            addButton( 'Grey', secondLine, 'Grey' );
            addButton( 'Red', secondLine, 'Red' );
            addButton( 'Yellow', secondLine, 'Yellow' );
        }
    );

    accessoriesButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Earings', firstLine, 'Earings' );
            addButton( 'Flower', firstLine, 'Flower' );
            addButton( 'Glasses', firstLine, 'Glasses' );
            addButton( 'Headphones', secondLine, 'Headphones' );
        }
    );

    earsButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_ears' );
            addButton( 'Tilt backward', firstLine, 'Tilt backward' );
            addButton( 'Tilt forward', firstLine, 'Tilt forward' );
        }
    );

    eyesButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_eyes' );
            addButton( 'Naughty', firstLine, 'Naughty' );
            addButton( 'Angry', firstLine, 'Angry' );
            addButton( 'Panda', secondLine, 'Panda' );
            addButton( 'Smart', secondLine, 'Smart' );
            addButton( 'Star', secondLine, 'Star' );
        }
    );

    hairButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_hair' );
            addButton( 'Bang', firstLine, 'Bang' );
            addButton( 'Curls', firstLine, 'Curls' );
            addButton( 'Elegant', secondLine, 'Elegant' );
            addButton( 'Fancy', secondLine, 'Fancy' );
            addButton( 'Quiff', secondLine, 'Quiff' );
            addButton( 'Short', thirdLine, 'Short' );
        }
    );

    legButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_leg' );
            addButton( 'Bubble tea', firstLine, 'Bubble tea' );
            addButton( 'Cookie', firstLine, 'Cookie' );
            addButton( 'Game console', secondLine, 'Game console' );
            addButton( 'Tilt backward', secondLine, 'Tilt backward' );
            addButton( 'tilt forward', secondLine, 'tilt forward' );
        }
    );


    mouthButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_mouth' );
            addButton( 'Astonished', firstLine, 'Astonished' );
            addButton( 'Eating', firstLine, 'Eating' );
            addButton( 'Laugh', secondLine, 'Laugh' );
            addButton( 'Tongue', secondLine, 'Tongue' );
        }
    );


    neckButton.addEventListener( 'click', function() 
        {
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_neck' );
            addButton( 'Bend backward', firstLine, 'Bend backward' );
            addButton( 'Bend forward', firstLine, 'Bend forward' );
            addButton( 'Thick', secondLine, 'Thick' );
        }
    );
});