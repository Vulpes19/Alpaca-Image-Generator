
const paths = new Map();
paths.set('Earings', 'assets/accessories/earings.png');
paths.set('Flower', 'assets/accessories/flower.png');
paths.set('Glasses', 'assets/accessories/glasses.png');
paths.set('Headphones', 'assets/accessories/headphone.png');
paths.set('Blue', 'assets/backgrounds/blue50.png');
paths.set('Dark blue', 'assets/backgrounds/darkblue70.png');
paths.set('Green', 'assets/backgrounds/green50.png');
paths.set('Grey', 'assets/backgrounds/grey40.png');
paths.set('Red', 'assets/backgrounds/red50.png');
paths.set('Yellow', 'assets/backgrounds/yellow50.png');
paths.set('default_ears', 'assets/ears/default.png');
paths.set('ears backward', 'assets/ears/tilt-backward.png');
paths.set('ears forward', 'assets/ears/tilt-forward.png');
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
paths.set('leg backward', 'assets/leg/tilt-backward.png');
paths.set('leg forward', 'assets/leg/tilt-forward.png');
paths.set('default_mouth', 'assets/mouth/default.png');
paths.set('Astonished', 'assets/mouth/astonished.png');
paths.set('Eating', 'assets/mouth/eating.png');
paths.set('Laugh', 'assets/mouth/laugh.png');
paths.set('Tongue', 'assets/mouth/tongue.png');
paths.set('default_neck', 'assets/neck/default.png');
paths.set('Bend backward', 'assets/neck/bend-backward.png');
paths.set('Bend forward', 'assets/neck/bend-forward.png');
paths.set('Thick', 'assets/neck/thick.png');

function updateImage( id, path )
{
    const image = document.getElementById(id);
    image.src = path;
};

function addButton( text, container, key, id )
{
    var button = document.createElement('button');
    button.textContent = text;
    button.id = text;
    container.appendChild(button);
    checkButtonsWidth();
    button.addEventListener('click', function() {
        updateImage(id, paths.get(key) );
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
    const neckButton = document.getElementById('b5');

    bgButton.addEventListener( 'click', function() 
        {
            var id = 'bg';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Blue', firstLine, 'Blue', id );
            addButton( 'Dark blue', firstLine, 'Dark blue', id );
            addButton( 'Green', firstLine, 'Green', id );
            addButton( 'Grey', secondLine, 'Grey', id );
            addButton( 'Red', secondLine, 'Red', id );
            addButton( 'Yellow', secondLine, 'Yellow', id );
        }
    );

    accessoriesButton.addEventListener( 'click', function() 
        {
            var id = 'accessories';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Earings', firstLine, 'Earings', id );
            addButton( 'Flower', firstLine, 'Flower', id );
            addButton( 'Glasses', firstLine, 'Glasses', id );
            addButton( 'Headphones', secondLine, 'Headphones', id );
        }
    );

    earsButton.addEventListener( 'click', function() 
        {
            var id = 'ears';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_ears', id );
            addButton( 'Tilt backward', firstLine, 'ears backward', id );
            addButton( 'Tilt forward', firstLine, 'ears forward', id );
        }
    );

    eyesButton.addEventListener( 'click', function() 
        {
            var id = 'eyes';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_eyes', id );
            addButton( 'Naughty', firstLine, 'Naughty', id );
            addButton( 'Angry', firstLine, 'Angry', id );
            addButton( 'Panda', secondLine, 'Panda', id );
            addButton( 'Smart', secondLine, 'Smart', id );
            addButton( 'Star', secondLine, 'Star', id );
        }
    );

    hairButton.addEventListener( 'click', function() 
        {
            var id = 'hair';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_hair', id );
            addButton( 'Bang', firstLine, 'Bang', id );
            addButton( 'Curls', firstLine, 'Curls', id );
            addButton( 'Elegant', secondLine, 'Elegant', id );
            addButton( 'Fancy', secondLine, 'Fancy', id );
            addButton( 'Quiff', secondLine, 'Quiff', id );
            addButton( 'Short', thirdLine, 'Short', id );
        }
    );

    legButton.addEventListener( 'click', function() 
        {
            var id = 'leg';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_leg', id );
            addButton( 'Bubble tea', firstLine, 'Bubble tea', id );
            addButton( 'Cookie', firstLine, 'Cookie', id );
            addButton( 'Game console', secondLine, 'Game console', id );
            addButton( 'Tilt backward', secondLine, 'leg backward', id );
            addButton( 'Tilt forward', secondLine, 'leg forward', id );
        }
    );


    mouthButton.addEventListener( 'click', function() 
        {
            var id = 'mouth';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_mouth', id );
            addButton( 'Astonished', firstLine, 'Astonished', id );
            addButton( 'Eating', firstLine, 'Eating', id );
            addButton( 'Laugh', secondLine, 'Laugh', id );
            addButton( 'Tongue', secondLine, 'Tongue', id );
        }
    );


    neckButton.addEventListener( 'click', function() 
        {
            var id = 'neck';
            firstLine.innerHTML = '';
            secondLine.innerHTML = '';
            thirdLine.innerHTML = '';
            addButton( 'Default', firstLine, 'default_neck', id );
            addButton( 'Bend backward', firstLine, 'Bend backward', id );
            addButton( 'Bend forward', firstLine, 'Bend forward', id );
            addButton( 'Thick', secondLine, 'Thick', id );
        }
    );
});