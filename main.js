camera=document.getElementById("camera");
result=document.getElementById("result");



Webcam.set({
    height: 270,
    width: 430,
    image_format: "png",
    png_quality: 100,

    constraints:{
      facingMode:"environment"
    }
});

Webcam.attach(camera);
function take_snapshot() {
   
    
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="my_image" style="width: 370;height: 268;" src="' + data_uri + '"/>'
    });
}