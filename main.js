var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) 
{

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie") /* Dar na aula 100 */
      {
        console.log("tirando selfie --- "); /* Dar na aula 100 */

        speak(); /* Dar na aula 99 */
      }
} /* Fim da aula 98 */


function speak() /* tem como objetivo é acionar o sistema para dizer o que for escrito dentro dessa função speak */
{
    var synth = window.speechSynthesis; /* se lê sinf e síntêsês */

    speakData = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speakData); /* "Órêr" UtterThis = pronuncie isso / Síntese do discurso a ser pronunciado */

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function() /* Aula 100 */
    { 
        takeSelfie(); /* Aula 100 */
        save(); /* Aula 100 depois de criar a função save() */
    }, 5000); /* Aula 100 */
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function takeSelfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfieImage").src ;
  link.href = image;
  link.click();
}