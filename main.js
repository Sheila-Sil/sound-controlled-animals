function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'https://th.bing.com/th/id/R.3b06ee2cc6a317ccdc098b4ab36a8388?rik=WREMuXKozJoLlw&riu=http%3a%2f%2fclipart-library.com%2fimages%2f6iypypAin.gif&ehk=ckqrSHYeBOAHXcO%2fThQEOj8p3TYnsmEHhDiBzpTPRmI%3d&risl=&pid=ImgRaw&r=0';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'https://i.pinimg.com/originals/0a/6f/06/0a6f0697514f5517e35b2e741eaaabed.gif';
      cat = cat + 1;
    } else{
      img.src = 'https://d9hhrg4mnvzow.cloudfront.net/www.audicus.com/online-hearing-test/694054af-6_105u05u000000000000028.png';
    }
  }
}