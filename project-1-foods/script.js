const icons = document.querySelectorAll('.section1-icons i');

let counter = 1;
setInterval(()=>{
    counter++;
    
    const icon = document.querySelector('.section1-icons .ch');
    
    icon.classList.remove('ch');
    if(counter > icons.length) {
        icons[0].classList.add('ch');
        counter = 0;
    }else {
        icon.nextElementSibling.classList.add('ch');
    }
  
},4000);