Webcam.set(
    {
        width:350,
        height:300,
        image_format:'png',
        png_quality:90
    });

    Camera=document.getElementById("camera");

    Webcam.attach("#Camera");

function take_snapshot() 
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5.versionn is ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MDxHRPHYk/",modelLoaded());

function modelLoaded()
{
    console.log("Model Loaded!");
}

function check() 
{
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error,result) 
{
    if (error)
    {
        console.error(error);
    }else
    {
        console.log(result);
        document.getElementById("resultObjectName").innerHTML=result[0].label;
        confidence=result[0].confidence.toFixed(3)*100;
        document.getElementById("accuracyPersentage").innerHTML=confidence+"%";
    }
}