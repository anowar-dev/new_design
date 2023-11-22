// Onload before view the website

var okbtn = document.querySelector(".onLoad_body .icon");
var onLoadMain = document.querySelector(".onLoad");
$(window).on('load', function(){
    setTimeout(function(){
        okbtn.classList.add("ok_bdb");
    }, 4000)
    okbtn.addEventListener('click', function(){
        onLoadMain.classList.add('onLoadNone')
    })
})


// main slider
let slideshowElements = document.querySelectorAll(".slider_box");
let count = 1;
setInterval(() => {
  count++;
  let curentElement = document.querySelector(".current");
  curentElement.classList.remove("current");
  if (count > slideshowElements.length) {
    slideshowElements[0].classList.add("current");
    count = 1;
  } else {
    curentElement.nextElementSibling.classList.add("current");
  }
}, 4000);

