const navbar = document.querySelector(".navbar-ul");
const hamburger = document.querySelector(".navbar-hamburger");
console.log(hamburger);
hamburger.addEventListener('click', ()=> {
	navbar.classList.toggle("open");
});
//Over Mouse Pointer Cursor
document.addEventListener("DOMContentLoaded", ()=> {
	const cursor = document.querySelector(".cursor");
	document.addEventListener("mousemove", (e) => {
		cursor.style.left = e.clientX + "px";
		cursor.style.top = e.clientY + "px";
	});
});
//Animation loading view
const loading = setInterval(function () {
document.getElementById('loading');
 }, 1500);
setTimeout(function () {
	const doc = document.body;
	const data = document.getElementById("loading");
	data.classList.add("close");
	doc.classList.remove("main");
}, 2000);

/* navigator.geolocation.getCurrentPosition((posisi)=> {
	const latitude = posisi.coords.latitude;
	const longitide = posisi.coords.longitude;
})*/