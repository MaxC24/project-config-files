'use strict'

import '../scss/style.scss';

const carouselIndicator = document.querySelector('#carousel-example-generic>ol');
const carouselInner = document.querySelector('#carousel-example-generic>.carousel-inner');
carouselIndicator.innerHTML = '';

for(let i = 0; i < 6; i++){
	carouselIndicator.innerHTML += `<li data-target="#myCarousel" data-slide-to="${i}"${i === 0 ? ' class="active"' : ''}></li>`
	let current = document.createElement('div');
	if(i===0) current.classList.add('active');
	current.classList.add('item');
	current.innerHTML = `<img src="images/${i}.jpg">`;
	carouselInner.appendChild(current);
}






