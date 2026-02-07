document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.item');
    const dots = document.querySelectorAll('.dot');
    const numberIndicator = document.querySelector('.numbers');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');

    let active = 0;
    const total = items.length;
    let timer;

    function update(direction) {

        items[active].classList.remove('active');
        dots[active].classList.remove('active');

        if (direction > 0) {
            active = (active + 1) % total;
        } else {
            active = (active - 1 + total) % total;
        }

        items[active].classList.add('active');
        dots[active].classList.add('active');
        numberIndicator.textContent = String(active + 1).padStart(2, '0');
    }

    function startAutoPlay() {
        clearInterval(timer);
        timer = setInterval(() => update(1), 3000);
    }

    prevButton.addEventListener('click', () => {
        update(-1);
        startAutoPlay();
    });

    nextButton.addEventListener('click', () => {
        update(1);
        startAutoPlay();
    });

    startAutoPlay();
});
