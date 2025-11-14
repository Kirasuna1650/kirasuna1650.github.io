
function upDate(previewPic){

     var image = previewPic.src;
      document.getElementById("image").style.backgroundImage = "url('" + image +"')";
     
      var text = previewPic.alt;
     document.getElementById("image").innerHTML = text;
     
     
       }
   
        function unDo(){
    document.getElementById("image").style.backgroundImage = "";

    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
       
     }

     function addTabFocus(){
       console.log('addTabFocus fired');
       var images = document.querySelectorAll('.preview');
       for(var i = 0; i < images.length; i++){
         images[i].setAttribute('tabindex', '0');
       }
     }

     window.addEventListener('load', addTabFocus);