const arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        arrow.parentElement.parentElement.classList.toggle('on');
        arrow.parentElement.parentElement.classList.toggle('off');
    })
})