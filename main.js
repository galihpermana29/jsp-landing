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

if (
	window.location.pathname === '/index.html' ||
	window.location.pathname === '/'
) {
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

if (window.location.pathname === '/pages/content.html') {
	const contentContainer = document.querySelector('.contentContent');
	let contentData = [
		(lelaki = {
			image: 'lelaki.png',
			title: 'Lelaki Penjaga Rumah-Mu',
			link: 'https://www.youtube.com/watch?v=aiFtLxXKTSM&t=243s',
		}),
		(trailer = {
			image: 'trailer.png',
			title: 'Trailer Penantian Cinta di Telaga Menjer',
			link: 'https://www.youtube.com/watch?v=nJCZtt7fefA',
		}),
		(pcdtm = {
			image: 'pcdtm.jpg',
			title: 'Series Penantian Cinta di Telaga Menjer',
			link: 'https://okeflix.com/series/penantian-cinta-di-telaga-menjer/',
		}),
		(tutorial = {
			image: 'tutorial.png',
			title: 'Tutorial Pembelian Tiket di Okeflix',
			link: 'https://www.youtube.com/watch?v=oEAxqVXw-9M',
		}),
		(perguliran = {
			image: 'perguliran.JPG',
			title: 'Launching Film Penantian Cinta di Telaga Menjer',
			link: 'https://youtu.be/xaCT59NOS94',
		}),
		(postProd = {
			image: 'postprod.jpeg',
			title: 'Perjalanan ke Wonosobo Post Production Film Penantian Cinta di Telaga Menjer',
			link: 'https://youtu.be/a0-0YhsU5DE',
		}),
		(madosi = {
			image: 'madosi.jpg',
			title: 'Madosinopo',
			link: 'https://youtu.be/dLRb6oPstpo',
		}),
		(penantian = {
			image: 'penantian.jpg',
			title: 'Penantian Cinta',
			link: 'https://youtu.be/N3F7KfqzP3U',
		}),
	];

	contentData.forEach((content) => {
		contentContainer.innerHTML += `
      <div>
         <div class="card" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/assets/${content.image}" alt="${content.image}" />
               <a
                  href="${content.link}"
                  target="_blank"
                  ><div class="overlay">
                     <div class="text">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="60"
                           height="60"
                           fill="currentColor"
                           class="bi bi-play-fill"
                           viewBox="0 0 16 16"
                        >
                           <path
                              d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                           />
                        </svg>
                     </div></div
               ></a>
               </div>
         <h3 class="cardTitle">${content.title}</h3>
      </div>
      `;
	});
}

if (window.location.pathname === '/pages/news.html') {
	let newsData = [
		(berita1 = {
			image: 'berita1.jpeg',
			title: 'Sandiaga Uno: Film Bisa Jadi Ajang Promosi Wisata',
			desc: 'REPUBLIKA.CO.ID, JAKARTA -- Menteri Pariwisata dan Ekonomi Kreatif (Menparekraf) Sandiaga Uno menilai film sangat efektif menjadi medium promosi destinasi pariwisata nasional. Menurutnya, industri perfilman juga bisa menggerakkan ekonomi masyarakat.',
			link: 'https://www.republika.co.id/berita/qsup7f438/sandiaga-uno-film-bisa-jadi-ajang-promosi-wisata',
		}),
		(berita2 = {
			image: 'berita2.jpg',
			title: 'Ini Harapan Menparekraf Sandi dari Film Penantian Cinta di Telaga Menjer',
			desc: 'JAKARTA - Menteri Pariwisata dan Ekonomi Kreatif (Menparekraf), Sandiaga Salahuddin Uno menilai film memiliki tingkat efektivitas tinggi sebagai medium promosi destinasi pariwisata nasional sekaligus menggerakkan ekonomi masyarakat.',
			link: 'https://lifestyle.sindonews.com/read/423220/156/ini-harapan-menparekraf-sandi-dari-film-penantian-cinta-di-telaga-menjer-1620572717',
		}),
	];

	const newsContainer = document.querySelector('.newsNews');

	newsData.forEach((news) => {
		newsContainer.innerHTML += `
      <div class="cardNews" data-aos="fade-up">
         <img src="/assets/${news.image}" alt="${news.image}" class="newsImg">
         <div class="newsDescWrap">
            <h1 class="newsTitle">${news.title}</h1>
            <p class="newsDesc">${news.desc}</p>
            <a href="${news.link}" class="newsButton" target="_blank">Baca Selengkapnya</a>
         </div>
      </div>
      
      `;
	});
}
