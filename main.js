function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VX--L9OOU/", modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
  console.log("model ready");
}


animal = "";

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);

    r = random(255);
    g = random(255);
    b = random(255);
    document.getElementById("result_label").innerHTML = "I CAN HEAR " + results[0].label;
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("Accuracy").innerHTML = "Accuracy" + results[0].confidence*100+"%";
    img=document.getElementById("animal_image");
    document.getElementById("Accuracy").style.color="rgb("+r+","+g+","+b+")";
    animal=results[0].label;
    if(animal=="dog"){
      img.src="bark.gif";
    }
    else if (animal=="cat"){
      img.src="meow.gif";
    }
    else{
      img.src="listen.gif";
    }
  }
}
