document.getElementById("popup-mint-link")?.addEventListener("click", function () {
	document.querySelector(".mint-popup").classList.toggle("active");
});
document.querySelector(".mint-popup__exit")?.addEventListener("click", function () {
	document.querySelector(".mint-popup").classList.remove("active");
});
document.querySelector(".header__burger")?.addEventListener("click", function () {
	this.classList.toggle("active");
	document.querySelector(".header__menu").classList.toggle("active");
});

let array = document.querySelectorAll(".asset-content__title");
array.forEach(el => {
	el.addEventListener("click", function (event) {
		if (event.target.className === "asset-content__title") {
			event.target.parentElement.parentElement.classList.toggle("active");
		} else if (event.target.className === "asset-content__dropdown") {
			event.target.parentElement.parentElement.parentElement.classList.toggle("active");
		}
	})
});
const loc = window.location.href,
	links = document.querySelectorAll('.menu__list-link');
links.forEach((link) => {
	if (link.href == loc) link.classList.add('active');
})

document.querySelector(".asset-info__pub-message")?.addEventListener("click", function () {
	document.querySelector(".gallery-dop-popup-sww").classList.toggle("active");
});

document.querySelector(".gallery-dop-popup-sww__exit-link")?.addEventListener("click", function () {
	document.querySelector(".gallery-dop-popup-sww").classList.remove("active");
});

document.querySelector(".asset-info__pub-message")?.addEventListener("contextmenu", function () {
	document.querySelector(".gallery-dop-popup-tt").classList.toggle("active");
});

document.querySelector(".gallery-dop-popup-tt__exit-link")?.addEventListener("click", function () {
	document.querySelector(".gallery-dop-popup-tt").classList.remove("active");
});