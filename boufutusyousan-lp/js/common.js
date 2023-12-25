document.addEventListener('scroll', function () {
    if (window.matchMedia('(max-width: 768px)').matches) {
        var startElement = document.getElementById('start');
        var endElement = document.getElementById('end');
        var button = document.querySelector('.floating-button');

        var startElementTop = startElement.getBoundingClientRect().top;
        var endElementTop = endElement.getBoundingClientRect().top;

        if (startElementTop < window.innerHeight && endElementTop > 0) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    } else {
        var button = document.querySelector('.floating-button');
        button.style.display = 'none';
    }
});
