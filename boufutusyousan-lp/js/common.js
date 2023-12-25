document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.getElementById('lp-boufutusyousan-floating');
    const addTriggerElement = document.querySelector('.trigger-add-class');
    const removeTriggerElement = document.querySelector('.trigger-remove-class');
    let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let classAdded = false; // クラスが追加されたかどうかを追跡するフラグ

    function checkPosition() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const scrollingUp = currentScrollPosition < lastScrollPosition;
        lastScrollPosition = currentScrollPosition;

        if (addTriggerElement) {
            const addTriggerPosition = addTriggerElement.getBoundingClientRect().top + window.pageYOffset;
            if (currentScrollPosition >= addTriggerPosition || (scrollingUp && classAdded)) {
                targetElement.classList.add('lp-boufutusyousan-floating-active');
                classAdded = true;
            }
        }

        if (removeTriggerElement) {
            const removeTriggerPosition = removeTriggerElement.getBoundingClientRect().top + window.pageYOffset;
            if (currentScrollPosition >= removeTriggerPosition) {
                targetElement.classList.remove('lp-boufutusyousan-floating-active');
                classAdded = false;
            } else if (scrollingUp && currentScrollPosition < removeTriggerPosition && classAdded) {
                targetElement.classList.add('lp-boufutusyousan-floating-active');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
});
