let flag = 0;

slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('slide')

    slides[num].style.display = "block";

}