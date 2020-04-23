
fetch("./data.json")
.then(function(resp) {
  return resp.json();
})
.then(function(data) { 
  console.log(data.Questions)

  document.addEventListener('keydown', logKey);
  function logKey() {
    var map = {}; 
    onkeydown = onkeyup = function(e){
      e = e || event; // to deal with IE
      map[e.keyCode] = e.type == 'keydown';
      /* insert conditional here */
      console.log(e.key)
      if((e.ctrlKey && e.key === 'c') && data.Questions[0]) {
        console.log("success")
      }
    }
  }
    var output = document.getElementById('question');
    output.innerHTML += data.Questions[0].question + '<br>';
})