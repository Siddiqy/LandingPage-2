window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if(window.innerWidth >= 1200) {
       if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("header").style.padding = "0px"
          document.getElementById("header").style.backgroundColor = "#000000"
       }else {
          document.getElementById("header").style.padding = "10px 0px"
          document.getElementById("header").style.backgroundColor = "transparent"
       }
   }
}