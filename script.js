function openPopup(num) {
    if (num == 1)
        var popup = document.querySelector('.popup1');
    else if (num == 2)
        var popup = document.querySelector('.popup2');
    else
        var popup = document.querySelector('.popup3')
    popup.style.display = 'block';
  }

function closePopup(num) {
    if (num == 1)
        var popup = document.querySelector('.popup1');
    else if (num == 2)
        var popup = document.querySelector('.popup2');
    else
        var popup = document.querySelector('.popup3')
    popup.style.display = 'none';
}