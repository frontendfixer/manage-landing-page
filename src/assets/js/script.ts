"use strict"

const pointListItems:NodeListOf<HTMLUListElement> = document
  .querySelectorAll('.point-list-item');

pointListItems.forEach((item, i) => {
  const headingNum:HTMLSpanElement = item.querySelector('.item-num')!;
  headingNum.innerText = `0${i + 1}`;
});

const backdrop = document.getElementById("backdrop")!;
const headerNavbar = document.getElementById('header-navbar')!
const header = headerNavbar?.closest('header')!;

header.addEventListener('click', (e)=>{
   if(e.target!== null && (<HTMLElement>e.target).id !== 'menu-open-button' && (<HTMLElement>e.target).id !== 'menu-close-button') return;   

   if((<HTMLElement>e.target).id ==='menu-open-button' ){
    headerNavbar.classList.add('active');
    backdrop.classList.add('active')
   }
   if((<HTMLElement>e.target).id ==='menu-close-button' ){
    headerNavbar.classList.remove('active');
    backdrop.classList.remove('active')
   }
})

backdrop.addEventListener('click', () => {
  headerNavbar.classList.remove('active');
  backdrop.classList.remove('active');
});

