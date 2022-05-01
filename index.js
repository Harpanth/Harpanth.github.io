var canvas = new fabric.Canvas('myCanvas');
// var imageHandler = 0;
// function remove(){
//     imageHandler = 1;
// }
// const imageGenerator = () => {
//     console.log(imageHandler);
//     if(imageHandler == 'true'){
//         canvas.remove(getActiveObject());
//     }
//     var img = new fabric.Image.fromURL('https://picsum.photos/'+(200+rand())+'/' + (300 + rand()) +'?random=1',function(img){
//     canvas.add(img);
//     // nothing
//     // canvas.height = img.height;
//     // canvas.width=img.width;
//     const remove = () => {
//         console.log('clear');
//         canvas.clear();
//     }
//     canvas.on('click',
//         remove
//     );
// });
// }
// const clearCanvas = () => {
//     console.log('clear');
//     canvas.clear();
// }
canvas.on('mouse:down', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 1) zoom = 1;
    if (zoom < 0.01) zoom = 0.01;
    canvas.setZoom(zoom);
    // opt.e.preventDefault();
    // opt.e.stopPropagation();
  });
// var Btn = document.getElementById('uploadedImg');
// var Btn1 = document.getElementById('clear');
// Btn.addEventListener('click',imageGenerator);
// Btn1.addEventListener('click',clearCanvas);
// function rand(){ return Math.floor(Math.random() * 90)} ;


canvas.renderAll();
let imgInput = document.getElementById('uploadedImg');
  imgInput.addEventListener('change', function(e) {
    if(e.target.files) {
      let imageFile = e.target.files[0]; //here we get the image file
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); // Creates image object
        myImage.src = e.target.result; // Assigns converted image to image object
        myImage.onload = function(ev) {
          var myCanvas = document.getElementById("myCanvas"); // Creates a canvas object
          var myContext = myCanvas.getContext("2d"); // Creates a contect object
        //   myCanvas.width = myImage.width; // Assigns image's width to canvas
        //   myCanvas.height = myImage.height; // Assigns image's height to canvas
          myContext.drawImage(myImage,0,0); // Draws the image on canvas
          let imgData = myCanvas.toDataURL("image/jpeg",0.75); // Assigns image base64 string in jpeg format to a variable
        }
      }
    }
    // else if(!e.target.files[0]){
    //     console.log("inside");
    //     new fabric.Image.fromURL('https://picsum.photos/'+(200+rand())+'/' + (300 + rand()) +'?random=1');
    //     // let imgInput = document.getElementById('imageInput');
    //     // imgInput.src = 'https://picsum.photos/'+(200+rand())+'/' + (300 + rand()) +'?random=1';

    //     function rand(){ return Math.floor(Math.random() * 90)} ;
    // }
  });