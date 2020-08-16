const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('header ul');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle("toggle");
  });
};

navSlide();

window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const history = () => {
  const btn = document.querySelector('#btnnn');
  btn.addEventListener('click', () => {
    document.querySelector('.Top-Soccer').style.display = 'block';
    document.querySelector('.Most-Played').style.display = 'none';
    document.querySelector('#btnnn').style.backgroundColor = 'black';
    document.querySelector('#btnnn').style.color = 'white';
    document.querySelector('#btnnn1').style.backgroundColor = 'white';
    document.querySelector('#btnnn1').style.color = 'black';
  });
};

const history1 = () => {
  const btn = document.querySelector('#btnnn1');
  btn.addEventListener('click', () => {
    document.querySelector('.Top-Soccer').style.display = 'none';
    document.querySelector('.Most-Played').style.display = 'block';
    document.querySelector('#btnnn').style.backgroundColor = 'white';
    document.querySelector('#btnnn').style.color = 'black';
    document.querySelector('#btnnn1').style.backgroundColor = 'black';
    document.querySelector('#btnnn1').style.color = 'white';
  });
};
history1();
history();

