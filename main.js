const toggleNav = document.querySelector('.hamburger');
const links = document.querySelector('.links');

toggleNav.addEventListener('click', function () {
	links.classList.toggle('active');
});
if (window.location.pathname === '/pages/about.html') {
	const img = document.querySelector('.img img');
	if (img != null) {
		let i = 1;
		setInterval(() => {
			if (i == 4) i = 1;
			img.setAttribute('src', `/assets/slide${i}.jfif`);
			img.classList.add('slider');
			setTimeout(() => {
				img.classList.remove('slider');
			}, 1000);
			i++;
		}, 2500);
	}
}

if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
	const overlay = document.querySelector('#overlay');
	const closeAd = document.querySelector('.buttonOverlayClose');
	const modal = document.querySelector('.modal');

	overlay.addEventListener('click', () => {
		overlay.classList.remove('active');
		modal.classList.remove('active');
	});

	closeAd.addEventListener('click', () => {
		overlay.classList.remove('active');
		modal.classList.remove('active');
	});
}