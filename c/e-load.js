/* jquery load (html)
*/
var l = document.getElementsByClassName("e-load");
var i;
for (i = 0; i < l.length; i++) {
  var elem = l[i];
  /*loadDoc( elem.getAttribute("data-l"), elem, f );*/
  $(elem).load(elem.getAttribute("data-l"), function(
      text) {
    var elem = this;
    var f = 0;
    if (elem.getAttribute("data-rp") == "") {
      f = 2;
    }
    if (f == 2) {// js .replace all
      f = elem.innerHTML;
      f = f.replace(new RegExp(
        "<", 'g'), "&lt;");
      elem.innerHTML = f.replace(new RegExp(
        "\n", 'g'), "<br/>");
    } else if (f) { f(text, elem); }
  });
} // https://www.w3schools.com/jsref/jsref_statements.asp