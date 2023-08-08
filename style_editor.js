function updateImage( id, path )
{
    const image = document.getElementById(id);
    image.src = path;
};

// document.addEventListener('DOMContentLoaded', () => {


//     //accessories
//     const myMap = new Map();
//     myMap.set(document.getElementById('Earings'), 'assets/accessories/earings.png');
//     myMap.set(document.getElementById('Flower'), 'assets/accessories/flower.png');
//     myMap.set(document.getElementById('Glasses'), 'assets/accessories/glasses.png');
//     myMap.set(document.getElementById('Headphones'), 'assets/accessories/headphone.png');

//     for (const [key, value] of myMap)
//     {
//         key.addEventListener( 'click', function() 
//         {
//             updateImage( 'accessories', value);
//         });
//     };
// });