const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('header ul');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

navSlide();

window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
