

   let toggle = document.querySelector('.toggle');
   let menu = document.querySelector('.menu');
   toggle.onclick = function(){
      menu.classList.toggle('active')
   }


   // 2nd bar 

   let toggle1 = document.querySelector('.toggle1');
   let menu1 = document.querySelector('.menu1');
   toggle1.onclick = function(){
      menu1.classList.toggle('active1')
   }


   // 3rd bar 

   let toggle2 = document.querySelector('.toggle2');
   let menu2 = document.querySelector('.menu2');
   toggle2.onclick = function(){
      menu2.classList.toggle('active2')
   }


   // ............ 

   let copyText = document.querySelector(".copy-text");
   copyText.querySelector("button").addEventListener("click", function(){
       let input = copyText.querySelector("input.text");
       input.select();
       document.execCommand("copy");
       copyText.classList.add("active");
       window.getSelection().removeAllRanges();
       setTimeout( function() {
           copyText.classList.remove("active");
           
       }, 2500);
   });