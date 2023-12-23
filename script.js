// const text = document.querySelectorAll('h1');

// text.forEach((el) => {
// 	el.style.color = 'red';
// });

// setTimeout(() => {
// 	text.style.color = 'red';
// }, 3000);

// setInterval(() => {
// 	text.forEach((el) => {
// 		el.style.display = 'block';
// 	});
// }, 1000);

// text.forEach((el) => {
// 	setTimeout(() => {
// 		el.style.display = 'block';
// 	}, 1000);
// });

// const box = document.querySelectorAll('.box');
// const active = document.querySelector('.active');
// const clear = document.querySelector('.clear');

// function color() {
// 	num = '#';
// 	for (let i = 0; i < 6; i++) {
// 		num += Math.floor(Math.random() * 10);
// 	}
// 	return num;
// }

// setInterval(() => {
// 	box.forEach((el) => {
// 		el.style.background = color();
// 		el.style.boxShadow = `0 0 30px ${color()}`;
// 	});
// }, 1000);

// box.forEach((el) => {
// 	el.addEventListener('mouseover', () => {
// 		el.style.background = color();
// 		el.style.boxShadow = `0 0 30px ${color()}`;
// 	});
// 	el.addEventListener('mouseout', () => {
// 		el.style.background = '';
// 		el.style.boxShadow = '';
// 	});
// });

// active.addEventListener('click', () => {
// 	box.forEach((el) => {
// 		el.style.background = color();
// 		el.style.boxShadow = `0 0 30px ${color()}`;
// 	});
// });

// clear.addEventListener('click', () => {
// 	box.forEach((el) => {
// 		el.style.background = '';
// 		el.style.boxShadow = '';
// 	});
// });

const circle = document.querySelectorAll('.circle');
const round1 = document.querySelector('.round1');
const round2 = document.querySelector('.round2');
const round3 = document.querySelector('.round3');

// let color = 'green';

// setInterval(function () {
// 	color = color === 'red' ? 'green' : 'red';
// }, 4000);

// setInterval(() => {
// 	circle.forEach((el) => (el.style.background = ''));
// }, 2000);

// setInterval(() => {
// 	circle.forEach((el) => (el.style.background = color));
// }, 4000);

let color = 'red';

setInterval(() => {
	color = color === 'red' ? 'green' : color === 'green' ? 'yellow' : 'red';
	if (color === 'red') {
		round1.style.background = color;
		round2.style.background = '';
		round3.style.background = '';
	} else if (color === 'yellow') {
		round1.style.background = '';
		round2.style.background = color;
		round3.style.background = '';
	} else {
		round1.style.background = '';
		round2.style.background = '';
		round3.style.background = color;
	}
}, 2000);

// const round1 = document.querySelector('.round1');
// const round2 = document.querySelector('.round2');
// const round3 = document.querySelector('.round3');

// const circle = document.querySelectorAll('.circle');

// let color1 = 'green';
// let color2 = 'yellow';
// let color3 = 'red';

// let n = color3;

// setInterval(() => {
// 	n = n === color1 ? color2 : n === color2 ? color3 : color1;
// 	if (n === color1) {
// 		round1.style.background = n;
// 		round2.style.background = '';
// 		round3.style.background = '';
// 	} else if (n === color2) {
// 		round1.style.background = '';
// 		round2.style.background = n;
// 		round3.style.background = '';
// 	} else {
// 		round1.style.background = '';
// 		round2.style.background = '';
// 		round3.style.background = n;
// 	}
// }, 2000);
