var postButtons = document.querySelectorAll('.post__button');
var postFullContents = document.querySelectorAll('.post__full-content');
var postFooters = document.querySelectorAll('.post__ftr');

if (document.addEventListener) {
  closeAllPosts();

  for (var i = 0; i < postButtons.length; i++) {
    clickControl(postButtons[i]);
  }
} else {
  for (var i = 0; i < postButtons.length; i++) {
    postButtons[i].style.display = 'none';
  }
}

function clickControl(postButton) {
  postButton.onclick = function() {
    readMore(postButton);
  };
}

function closeAllPosts() {

  for (var i = 0; i < postFooters.length; i++) {
    postFooters[i].style.display = 'block';
  }

  for (var i = 0; i < postFullContents.length; i++) {
    postFullContents[i].style.display = 'none';
  }
}

function readMore(postButton) {
  var thisPost;
  var verifiableElement = postButton;
  var seachPost;

  for (var i = 0; i < 10; i++) {
     seachPost = verifiableElement.parentElement;
     if (seachPost.getAttribute('data-type') === 'post') {
       thisPost = seachPost;
       break;
     } else {
       verifiableElement = seachPost;
     }
  }

  var fullContent = thisPost.querySelector('.post__full-content');
  fullContent.style.display = 'block';
  var ftr = thisPost.querySelector('.post__ftr');
  ftr.style.display = 'none';

}
