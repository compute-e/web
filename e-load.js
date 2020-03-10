function loadDoc(u, elem, f) {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (f == 2) {// js .replace all
        f = this.responseText;
        f = f.replace(new RegExp(
          "<", 'g'), "&lt;");
        elem.innerHTML = f.replace(new RegExp(
          "\n", 'g'), "<br/>");
      } else if (f) { f(this, elem);
      } else {
        elem.innerHTML = this.responseText;
      }
    }
  };
  xhttp.open("GET", u, true);
  xhttp.send();
};
var l = document.getElementsByClassName("e-load");
var i;
for (i = 0; i < l.length; i++) {
  var elem = l[i];
  loadDoc( elem.getAttribute("data-l"), elem, 2 );
} // https://www.w3schools.com/jsref/jsref_statements.asp