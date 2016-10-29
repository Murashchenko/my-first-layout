var mainMenu = document.querySelector('.hdr__nav');
var navOpener = document.querySelector('.nav__opener');
var buttonToTop = document.querySelector("#button-to-top");
var mainMenuLinks = document.querySelectorAll('.main-menu__item a');
var main = document.querySelector('.main');

var buttonToTop = document.createElement('div');
buttonToTop.id = 'button-to-top';
buttonToTop.className = 'button-to-top';
buttonToTop.textContent = 'to top';

document.body.appendChild(buttonToTop);

buttonToTop.onclick = function () {
  scrollTop();
};

if (mainMenu.classList) {
  mainMenu.style.display = 'none';
  mainMenu.classList.remove('js-active');
  window.setTimeout("mainMenu.style.display = 'block';", 0);
  changeTabIndexes(mainMenuLinks);

  navOpener.addEventListener('click', function () {
    menuControl();
  });
}

if (buttonToTop.classList) {
window.onscroll = function () {
  if ( window.pageYOffset >= main.offsetTop ) {
    buttonToTop.style.display = "block";
    window.setTimeout(function () {
      buttonToTop.classList.add('button-to-top_opacity');
    }, 0);
  } else {
    buttonToTop.style.display = "none";
    buttonToTop.classList.remove('button-to-top_opacity');
  }
};
}

function scrollTop() {
  buttonToTop.onclick = null;

  var scrollTime = 600;
  var Y = window.pageYOffset;
  var scrollLinear;

  animate(function(timePassed) {
    scrollLinear = Y*(scrollTime - timePassed)/scrollTime;
    window.scrollTo(0, scrollLinear);
  }, scrollTime);

  window.setTimeout(function () {
    buttonToTop.onclick = function () {
      scrollTop();
    };
  }, scrollTime);
}

function animate(draw, duration) {
  var start = performance.now();

  requestAnimationFrame(function animate(time) {

    var timePassed = time - start;

    if (timePassed > duration) timePassed = duration;

    draw(timePassed);

    if (timePassed < duration) requestAnimationFrame(animate);

  });
}

function menuControl() {

  if (mainMenu === document.querySelector('.hdr__nav.js-active')) {
    mainMenu.classList.remove('js-active');
    changeTabIndexes(mainMenuLinks);

  } else {
    mainMenu.classList.add('js-active');
    changeTabIndexes(mainMenuLinks);
  }
}

function changeTabIndexes(collection) {
  for (var i = 0; i < collection.length; i++) {
    changeTabIndex(collection[i]);
  }
}

function changeTabIndex(item) {
  item.tabIndex = (item.tabIndex > 0) ? -1 : 1;
}
