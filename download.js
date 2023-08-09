
function getImage()
{
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    const images = [
        document.getElementById('bg'),
        document.getElementById('neck'),
        document.getElementById('ears'),
        document.getElementById('accessories'),
        document.getElementById('hair'),
        document.getElementById('eyes'),
        document.getElementById('leg'),
        document.getElementById('nose'),
        document.getElementById('mouth')
    ];
    canvas.width = 720;
    canvas.height = 720;

    for( var i = 0; i < images.length; i++ )
    {
        context.drawImage(images[i], 0, 0);
    }
    var downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.download = "Your Alpaca image";
    downloadLink.click();
};

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download');
    downloadButton.addEventListener( 'click', function()
    {
        getImage();
    })  
});