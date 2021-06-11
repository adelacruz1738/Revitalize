var commentBtns = document.querySelectorAll("#ftl-article .author-n-useraction .comment");
var comments = new Comments({ "targetId" : articleId, "additionalCounter": document.querySelector("#ftl-article .author-n-useraction .comment .comment-count") });

for(var i = 0; i < commentBtns.length; i++) {
  var elem = commentBtns[i];
  elem.addEventListener("click", comments.commentsToggleListener);
}

const activityBar = new ActivityBar(articleId, likes);
activityBar.init();

const codeVisitor = new CodeBlockVisitor()
codeVisitor.init()
