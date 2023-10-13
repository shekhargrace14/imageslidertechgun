let flag = 1;

function controller(x){
    flag = flag + x;
    slideshow(flag)
}

slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('slide')

    if(num == slides.length){
        flag=0;
        num= 0;
    }

    for (let y of slides){
        y.style.display = "none"
    }

    slides[num].style.display = "block"; 

}   