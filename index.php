<?php

$fileName = './test.json';
$content = file_get_contents($fileName);

$json = json_decode($content);
?>


<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" type="text/css" media="screen" href="style.css">
    <script src="app.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
</head>
<body>
    <h1><?php echo $json->title;?></h1>
    <div> <h2><?php echo $json->test[0]->question;?></h2></div>
    <input type="text" placeholder="Sõna..." id="text" />
    <script type="text/javascript">
            $('#text').keypress(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                    $('#text').change( function () {
                        
                        

                        alert(this.value); 

                        });  
                }

                event.stopPropagation();
            });
             
        </script>
    
    <br/><br/>
    <div id="output"></div>

   
</body>
</html>

