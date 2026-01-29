const img1 = document.getElementById("img1");
const img2 = document.getElementById("img1");
const img3 = document.getElementById("img1");

img1.addEventListener('mouseenter', () => {
    img1.src = "img/digits_img_t.jpg";
});
img1.addEventListener('mouseleave', () => {
    img1.src = "img/digits_img.jpg";
});

img2.addEventListener('mouseenter', () => {
    img2.src = "img/no_digits_img_t.jpg";
});
img2.addEventListener('mouseleave', () => {
    img2.src = "img/no_digits_img.jpg";
});

img3.addEventListener('mouseenter', () => {
    img3.src = "img/flagged_tile_t.jpg";
});
img3.addEventListener('mouseleave', () => {
    img3.src = "img/flagged_tile.jpg";
});