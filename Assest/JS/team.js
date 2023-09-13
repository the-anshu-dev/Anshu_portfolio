

let img8x = document.querySelectorAll('.img8x');
let contentBx = document.querySelectorAll('.contentBx');

for(let i=0; i<img8x.length; i++){
    img8x[i].addEventListener('mouseover', function(){
        for(let i=0; i<contentBx.length; i++){
            contentBx[i].className = 'contentBx';
        }

        document.getElementById(this.dataset.id).className='contentBx active';


        for(let i=0; i<img8x.length; i++){
            img8x[i].className = 'img8x';
        }
        this.className = 'img8x active'


    })
}

