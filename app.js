fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data.Questions)


        document.addEventListener('keydown', logKey);

        function logKey() {
            var map = {};
            onkeydown = onkeyup = function(e) {
                e = e || event; // to deal with IE
                map[e.keyCode] = e.type == 'keydown';
                /* insert conditional here */
                console.log(e.key)
                if (e.ctrlKey && e.key === 'c') {
                    console.log("success")
                }
            }
        }
        var i = Math.floor(Math.random() * data.Questions.length);
        var output = document.getElementById('question');
        output.innerHTML = data.Questions[i].question;
    })

const realFileBtn = Document.getElementById("real-file");
const customBtn = Document.getElementById("custom-text");
const customTxt = Document.getElementById("button1");
customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match();
    } else {
        customTxt.innerHTML = "No file chosen, yet ";
    }
});