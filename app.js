document.addEventListener('keydown', logKey);

function logKey() {
  var map = {}; 
  onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
    console.log(e.key)
    if(e.ctrlKey && e.key === 'c') {
      console.log("success")
    }
  }
}