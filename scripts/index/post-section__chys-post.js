var img = document.querySelector('.chys-post-img');
var fullContent = document.querySelector('.chys-post-content__full-content');
var btn = document.querySelector('.chys-post-content__button');

if (btn && document.addEventListener) {
  img.style.marginBottom = "0";
  fullContent.style.display = "none";
  btn.style.display = "inline-block";

  btn.addEventListener('click', function() {
    img.style.marginBottom = "1em";
    fullContent.style.display = "block";
    btn.style.display = "none";
  });
}
