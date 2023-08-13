"use strict"

const pointListItems:NodeListOf<HTMLUListElement> = document
  .querySelectorAll('.point-list-item');

pointListItems.forEach((item, i) => {
  const headingNum:HTMLSpanElement = item.querySelector('.item-num')!;
  headingNum.innerText = `0${i + 1}`;
});

const backdrop = document.querySelector('.backdrop')!;
const navbar = document.querySelector('.navbar')!;
const navToggle = document.querySelector('.open-btn')!;
const closeBtn = document.querySelector('.close-btn')!;

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  backdrop.classList.toggle('active');
});

backdrop.addEventListener('click', () => {
  navbar.classList.remove('active');
  backdrop.classList.remove('active');
});

closeBtn.addEventListener('click', () => {
  navbar.classList.remove('active');
  backdrop.classList.remove('active');
});
//# sourceMappingURL=script.js.map
