document.addEventListener('DOMContentLoaded', function () {
    var startElement = document.getElementById('start');
    var footerElement = document.querySelector('footer');
    var floatingButton = document.querySelector('.floating-button');

    function checkPosition() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            var startElementPosition = startElement.getBoundingClientRect().bottom;
            var footerElementPosition = footerElement.getBoundingClientRect().top;

            if (startElementPosition < 0 && footerElementPosition > window.innerHeight) {
                floatingButton.style.display = 'block'; // フローティングボタンを表示
            } else {
                floatingButton.style.display = 'none'; // フローティングボタンを非表示
            }
        } else {
            floatingButton.style.display = 'none'; // 768px以上では非表示
        }
    }

    // スクロールイベントリスナーを設定
    window.addEventListener('scroll', checkPosition);

    // ウィンドウリサイズ時にもチェック
    window.addEventListener('resize', checkPosition);

    // 初回チェック
    checkPosition();
});
