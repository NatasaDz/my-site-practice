const hamburger = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header__nav-list');
const menuItem = document.querySelectorAll('.header__nav-link');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;
	if (scrollPosition > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menuItem.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	});
});
