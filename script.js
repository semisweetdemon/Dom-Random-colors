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

const box = document.querySelectorAll('.box');
const active = document.querySelector('.active');
const clear = document.querySelector('.clear');

function color() {
	num = '#';
	for (let i = 0; i < 6; i++) {
		num += Math.floor(Math.random() * 10);
	}
	return num;
}

setInterval(() => {
	box.forEach((el) => {
		el.style.background = color();
		el.style.boxShadow = `0 0 30px ${color()}`;
	});
}, 1000);

box.forEach((el) => {
	el.addEventListener('mouseover', () => {
		el.style.background = color();
		el.style.boxShadow = `0 0 30px ${color()}`;
	});
	el.addEventListener('mouseout', () => {
		el.style.background = '';
		el.style.boxShadow = '';
	});
});

active.addEventListener('click', () => {
	box.forEach((el) => {
		el.style.background = color();
		el.style.boxShadow = `0 0 30px ${color()}`;
	});
});

clear.addEventListener('click', () => {
	box.forEach((el) => {
		el.style.background = '';
		el.style.boxShadow = '';
	});
});
