var con_btn = document.getElementById("con-bt");
con_btn.addEventListener('click',function(){
    window.open("https://wa.link/zy8f3c");
});

var abo_btn=document.getElementById("abo");
abo_btn.addEventListener('click',function(){
    window.scrollTo({
        top:document.getElementById("about").offsetTop,
        behavior:"smooth"
    });
});

var con_btn = document.getElementById("whats");
con_btn.addEventListener('click',function(){
    window.open("https://wa.link/zy8f3c");
});

var ins_btn = document.getElementById("insta");
ins_btn.addEventListener('click',function(){
    window.open("https://www.instagram.com/_wasimhassan_/");
});




document.querySelector('.lis1').addEventListener('click', function() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.lis2').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.lis3').addEventListener('click', function() {
    document.getElementById('skill').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.lis4').addEventListener('click', function() {
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
});

