let search = document.querySelector(".search-box");
document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
};
let box = document.querySelector(".navbar");
let boxIcon = document.querySelector("#box-icon");

boxIcon.onclick = () => {
    box.classList.toggle("active");
};