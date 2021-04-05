document.getElementById("popup-mint-link")?.addEventListener("click", function() {
	document.querySelector(".mint-popup").classList.toggle("active");
});
document.querySelector(".mint-popup__exit")?.addEventListener("click", function () {
	document.querySelector(".mint-popup").classList.remove("active");
});
document.querySelector(".header__burger")?.addEventListener("click", function () {
	this.classList.toggle("active");
	document.querySelector(".header__menu").classList.toggle("active");
});

