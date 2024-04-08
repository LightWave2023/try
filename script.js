document.addEventListener('DOMContentLoaded', function() {  
  var replaceButton = document.getElementById('replaceButton');  
  var centeredImage = document.getElementById('centeredImage');  
  
  replaceButton.addEventListener('click', function() {  
    centeredImage.src = 'C.jpg'; // 替换为新的图像路径  
  });  
});