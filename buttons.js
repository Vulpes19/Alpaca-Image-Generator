document.addEventListener('DOMContentLoaded', () => {
    let arr = [ 
        document.getElementById('b1'),
        document.getElementById('b2'),
        document.getElementById('b3'),
        document.getElementById('b4'),
        document.getElementById('b5'),
        document.getElementById('b6'),
        document.getElementById('b7'),
        document.getElementById('b8')
    ];

    adjustButtonWidth(arr);
  });

  function adjustButtonWidth(buttons) {
    buttons.forEach(button => {
        if (button.textContent.length > 4) {
            button.style.width = '150px';
        } 
    });
  }