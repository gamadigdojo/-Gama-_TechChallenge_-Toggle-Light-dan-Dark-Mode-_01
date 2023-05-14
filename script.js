const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;
const header = document.querySelector('header');
const title1 = document.querySelector('.title1');
const title2 = document.querySelector('.title2');
const text = document.querySelector('.text');
const link = document.querySelector('.link');

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark');
  header.classList.toggle('dark');
  title1.classList.toggle('dark');
  title2.classList.toggle('dark');
  text.classList.toggle('dark');
  link.classList.toggle('dark');
});
