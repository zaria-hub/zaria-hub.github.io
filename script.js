 const menuBtn = document.getElementById('menuBtn');
 const menujs = document.getElementById('menujs');

 menuBtn.addEventListener('click', function(){
     menujs.classList.toggle('open');
         });
 window.addEventListener('scroll', function(){
     document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 40);
            });         
