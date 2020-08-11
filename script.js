const toggle = document.getElementById('toggle')
const url = 'https://api.github.com/users/fernando59'
const nav = document.getElementsByClassName('navigation')
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
const  typed = new Typed('#cmd', {
    stringsElement: '#cmdString',
    loop:true,
    loopCount:Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss:true,
    typedSpeed:70,
    backDelay: 800,
  });
  
  window.onscroll = function sticky(){
    if(window.pageYOffset > nav[0].offsetTop){
 
        nav[0].classList.add("sticky")
    
    }else{
        nav[0].classList.remove("sticky")
    }
  }



let flag = true;
toggle.addEventListener('click',function(){
  if(flag){

    document.getElementById('ul').classList.add('active')
    flag= false;
  }
    else{
        flag =true;
        document.getElementById('ul').classList.remove('active')
    }
})
  /*fetch (url).then(res=>res.json()).then(res=>console.log(res))*/