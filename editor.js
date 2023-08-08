function addButton( text, container )
{
    const button = document.createElement('button');
    button.textContent = text;
    container.appendChild(button);
};

document.addEventListener('DOMContentLoaded', () => {
const buttonContainer = document.getElementById('button_container');
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
        buttonContainer.innerHTML = '';
        addButton( 'Blue', buttonContainer );
        addButton( 'Dark blue', buttonContainer );
        addButton( 'Green', buttonContainer );
        addButton( 'Grey', buttonContainer );
        addButton( 'Red', buttonContainer );
        addButton( 'Yellow', buttonContainer );
    }
);

accessoriesButton.addEventListener( 'click', function() 
    {
        buttonContainer.innerHTML = '';
        addButton( 'Earings', buttonContainer );
        addButton( 'Flower', buttonContainer );
        addButton( 'Glasses', buttonContainer );
        addButton( 'Headphones', buttonContainer );
    }
);

earsButton.addEventListener( 'click', function() 
    {
        buttonContainer.innerHTML = '';
        addButton( 'Default', buttonContainer );
        addButton( 'Backward', buttonContainer );
        addButton( 'Forward', buttonContainer );
    }
);

eyesButton.addEventListener( 'click', function() 
    {
        buttonContainer.innerHTML = '';
        addButton( 'Default', buttonContainer );
        addButton( 'Naughty', buttonContainer );
        addButton( 'Angry', buttonContainer );
        addButton( 'Panda', buttonContainer );
        addButton( 'Smart', buttonContainer );
        addButton( 'Star', buttonContainer );
    }
);

hairButton.addEventListener( 'click', function() 
    {
        buttonContainer.innerHTML = '';
        addButton( 'Default', buttonContainer );
        addButton( 'Bang', buttonContainer );
        addButton( 'Curls', buttonContainer );
        addButton( 'Elegant', buttonContainer );
        addButton( 'Fancy', buttonContainer );
        addButton( 'Quiff', buttonContainer );
        addButton( 'Short', buttonContainer );
    }
);

legButton.addEventListener( 'click', function() 
    {
        buttonContainer.innerHTML = '';
        addButton( 'Default', buttonContainer );
        addButton( 'Bubble tea', buttonContainer );
        addButton( 'Cookie', buttonContainer );
        addButton( 'Game console', buttonContainer );
        addButton( 'Tilt backward', buttonContainer );
        addButton( 'tilt forward', buttonContainer );
    }
);


mouthButton.addEventListener( 'click', function() 
    {
        buttonContainer.innerHTML = '';
        addButton( 'Default', buttonContainer );
        addButton( 'Astonished', buttonContainer );
        addButton( 'Eating', buttonContainer );
        addButton( 'Laugh', buttonContainer );
        addButton( 'Tongue', buttonContainer );
    }
);


neckButton.addEventListener( 'click', function() 
    {
        buttonContainer.innerHTML = '';
        addButton( 'Default', buttonContainer );
        addButton( 'Bend backward', buttonContainer );
        addButton( 'Bend forward', buttonContainer );
        addButton( 'Thick', buttonContainer );
    }
);
});