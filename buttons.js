function checkButtonsWidth()
{
    let buttons = document.getElementsByTagName('button');
    for ( let i = 0; i < buttons.length; i++ )
    {
        if (buttons[i].textContent.length > 4) {
            buttons[i].style.width = '150px';
        } 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkButtonsWidth();
});
