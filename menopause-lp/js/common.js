const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const href = anchor.getAttribute('href');

    const target = document.getElementById(href.replace('#', ''));

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
  });
});