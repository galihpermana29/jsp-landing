const toggleNav = document.querySelector('.hamburger');
const links = document.querySelector('.links');

toggleNav.addEventListener('click', function () {
	links.classList.toggle('active');
});

const img = document.querySelector('.img img');
console.log(img);

let i = 1;
setInterval(() => {
   if(i == 4) i = 1;
   img.setAttribute('src', `/assets/slide${i}.jfif`);
   img.classList.add('slider')
   setTimeout(()=>{
      img.classList.remove('slider')
   },1000)
   i++;
}, 2500);

