document.addEventListener('scroll', function () {
    var startElement = document.getElementById('start');
    var endElement = document.getElementById('end');
    var button = document.querySelector('.floating-button');

    var startElementTop = startElement.getBoundingClientRect().top;
    var endElementTop = endElement.getBoundingClientRect().top;

    if (startElementTop < window.innerHeight && endElementTop > 0) {
        button.style.display = 'block'; // フローティングボタンを表示
    } else {
        button.style.display = 'none'; // フローティングボタンを非表示
    }
});
