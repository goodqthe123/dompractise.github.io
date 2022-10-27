
//插入YOUTUBE
let utube = document.querySelector('#utube')
let inutube = document.querySelector('#inutube')
let closeutube = document.querySelector('#closeutube')

function addutube (){
    utube.style.display =  'block';
    closeutube.style.display =  'block';
    
}


inutube.addEventListener('click', addutube);

//close
function ccloseutube (){
    utube.style.display =  'none';
    closeutube.style.display =  'none';
    
}

closeutube.addEventListener('click', ccloseutube);



//插入圖
let img = document.querySelector('#img')
let inimg = document.querySelector('#inimg')

function addimg (){
    img.style.display =  'block';
    
    
}


inimg.addEventListener('click', addimg);


//改字
let text = document.querySelector('#text')
let ctext = document.querySelector('#ctext')



function changetext (){
    
    text.innerHTML = "Hello World";
    
}

ctext.addEventListener('click', changetext);

//刪字

let dext = document.querySelector('#dext')
let dtext = document.querySelector('#dtext')


function deletetext (){
    
    dext.remove();
    
}

dtext.addEventListener('click', deletetext);

//改圖


let changeimga = document.querySelector('#changeimg')
let aimg = document.querySelector('#aimg')
let bimg = document.querySelector('#bimg')

function changeimg (){
    bimg.style.display =  'none';
    aimg.style.display =  'block';
    
}

changeimga.addEventListener('click', changeimg);

//toggle



 






// togger 2

 let Togglebtn = document.querySelector('#Togglebtn')
 let Toggle = document.querySelector('#Toggle')


 
 function goToggle() {
   
   Toggle.classList.toggle("mystyle");
 }

 Togglebtn.addEventListener('click', goToggle);