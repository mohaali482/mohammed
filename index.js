const body=document.getElementsByTagName('body')[0]
const li=document.getElementsByTagName('li')
const nav=document.getElementById('nav')
const scroll=document.getElementById('scroll')
const lens=document.getElementById('lens')

for (let i = 0; i < li.length; i++) {
const l = li[i];

l.addEventListener('click',()=>{
    for (let j=0 ; j<li.length;j++) {
        li[j].children[0].className='nav-link'
    }
    l.children[0].className='nav-link active'
})
}

function over(){
    text=document.getElementById('text')
    arr=['A Backend developer.','A Frontend developer.','A Kotlin developer.','A Competitive programmer','glad to meet you.']
    arr.forEach(function (el, index) {
        setTimeout(function () {
            text.innerText=el
        }, index * 1000);
    });
}

window.onscroll=()=> {
    if (document.body.scrollTop>=100){
        scroll.style.display='block'
    }
    else{
        scroll.style.display='none'
    }
    if (document.body.scrollTop>=800){
        nav.classList.remove('bg-none')
        nav.classList.add('bg-dark')
    }
    else{
        nav.classList.add('bg-none')
        nav.classList.remove('bg-dark')
    }
}


document.onmousemove=(event)=>{
    // var x=event.clientX*100/window.innerWidth + "%"
    // var y = event.clientY * 100 / window.innerHeight +"%"
    // lens.style.left=x
    // lens.style.top=y

    var width = window.innerWidth;
    var x = event.clientX;
    var a = x / width;
    a= a *100;
    var height = window.innerHeight;
    var y = event.clientY;
    var b = y / height;
    b= b *100;
    lens.style.cssText = "left: " + a + "%; top: " + b + "%;" + "transform:translate(-"+a+"%,-"+b+"%);";
}

scroll.addEventListener('click',()=>{
    location.href='#'
})