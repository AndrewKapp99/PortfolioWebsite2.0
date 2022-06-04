function collapse(elementID) {
  if(document.getElementById(elementID).style.height != '0') {
    document.getElementById(elementID).style.height = '0';
  } 
  else {
    document.getElementById(elementID).style.height = 'auto';
  }
}