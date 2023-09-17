document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const controls = document.querySelector('.discografia-controls');

    controls.addEventListener('click', function(event) {
        if (event.target.classList.contains('arrow-left')) {
            showSlide(-1);
        } else if (event.target.classList.contains('arrow-right')) {
            showSlide(1);
        }
    });

    function showSlide(indexOffset) {
        const currentSlide = document.querySelector('.slide.active');
        let currentIndex = Array.from(slides).indexOf(currentSlide);
        let newIndex = (currentIndex + indexOffset + slides.length) % slides.length;

        currentSlide.classList.remove('active');
        slides[newIndex].classList.add('active');
    }
});
