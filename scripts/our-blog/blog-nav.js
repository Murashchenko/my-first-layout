var posts = document.querySelectorAll('[data-type="post"]');
var linksToPost = document.querySelectorAll('[data-type="link-to-post"]');
var linksToPostCategory = document.querySelectorAll('[data-type="link-to-post-category"]');
var morePostsButton = document.querySelector('.more-posts-button');

var postsQuantityDefault = 2;
var postsQuantityIncrease = 2;

var nowPosts = posts;
var nowLinksToPost = linksToPost;
var nowLastPost;
var lastPostInCategory;

if (document.addEventListener) {
  showThisCategory();

  for (var i = 0; i < linksToPostCategory.length; i++) {

    if (i == linksToPostCategory.length - 1) {
      linksToPostCategory[i].style.borderBottom = '0.1em solid #d3b000';
    }

    linksToPostCategory[i].addEventListener('click', function () {
      var linkWindowPosition = this.getBoundingClientRect().top

      for (var i = 0; i < linksToPostCategory.length; i++) {
        linksToPostCategory[i].style.borderBottom = '';
      }
      this.style.borderBottom = '0.1em solid #d3b000';

      closeAllPosts(); //this function from our-blog.js
      getCategory(this);
      showThisCategory();

      var linkPagePosition = this.getBoundingClientRect().top + pageYOffset;
      window.scrollTo(0, linkPagePosition - linkWindowPosition);
    });

  }
}

function getCategory(linkToPostCategory) {
  var categoryName = linkToPostCategory.getAttribute('data-seach-category');
  if (categoryName) {
    nowPosts = document.querySelectorAll('[data-post-category="' + categoryName + '"]');
    nowLinksToPost = document.querySelectorAll('[data-link-to-post-category="' + categoryName + '"]');
  } else {
    nowPosts = posts;
    nowLinksToPost = linksToPost;
  }
}


function showThisCategory() {
  morePostsButton.style.display = 'block';
  showPostsInQuantityDefault(nowPosts, nowLinksToPost);
  morePostsButton.onclick = function () {
    readMorePosts(nowPosts, nowLinksToPost);
  };
}


function readMorePosts(arrayPosts, arrayLinksToPost) {

  for (var i = 0; i < arrayPosts.length; i++) {

    if (arrayPosts[i].style.display === 'block') {
      continue;
    }

    for (var j = 0; j < postsQuantityIncrease; j++) {
      var postNumber = i + j;
      if (postNumber == arrayPosts.length) break;
      if (postNumber == arrayPosts.length - 1) {
        morePostsButton.style.display = 'none';
      arrayPosts[postNumber].style.marginBottom = '0';
      }
      arrayPosts[postNumber].style.display = 'block';
      arrayLinksToPost[postNumber].style.display = 'inline';
    }

    break;
  }

}



function showPostsInQuantityDefault(arrayPosts, arrayLinksToPost) {

  for (var i = 0; i < posts.length; i++) {
    posts[i].style.display = 'none';
    posts[i].style.marginBottom = '';
    linksToPost[i].style.display = 'none';
  }

  for (var i = 0; i < postsQuantityDefault; i++) {

    if ( i == arrayPosts.length) {
      morePostsButton.style.display = 'none';
      arrayPosts[i - 1].style.marginBottom = '0';
      break;
    }

    arrayPosts[i].style.display = 'block';
    arrayLinksToPost[i].style.display = 'inline';
  }

}
