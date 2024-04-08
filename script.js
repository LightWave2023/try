document.addEventListener('DOMContentLoaded', function() {  
  var replaceButton = document.getElementById('replaceButton');  
  var centeredImage = document.getElementById('centeredImage');  
  
  replaceButton.addEventListener('click', function() {  
    centeredImage.src = 'C.jpg'; //Replace with a new image path  
  });  
});
