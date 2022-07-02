var openBlog;

function Collapse(elementID) {
  if(openBlog != null || openBlog == document.getElementById(elementID)){
    openBlog.classList.toggle("open");
    return;
  }
  openBlog = document.getElementById(elementID)
  openBlog.classList.toggle("open");
}