const square = document.querySelectorAll('.square');

square.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('circle')
    })
})

console.log(6);
