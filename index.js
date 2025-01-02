document.addEventListener('DOMContentLoaded', () => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  });
gsap.registerPlugin(ScrollTrigger);


  

let img = document.querySelector('.wall');

gsap.to('.boxes div',{
   width:'0%',
   duration:.4,
   ease:'power4.in',
   stagger:.2
})

gsap.to('#visual',{
    scrollTrigger:{
        trigger:'.sec1',
        start:"bottom 95%",
        end:'bottom center',
        scrub:true
    },y:-150,scale:5
})

gsap.to('#visual2',{
    scrollTrigger:{
        trigger:'.sec1',
        start:"bottom 95%",
        end:'bottom center',
        scrub:1
    },y:-40,scale:2
})


gsap.to('#bgSvg',{
    scrollTrigger:{
        trigger:'.sec1',
        start:"bottom 95%",
        end:'bottom center',
        scrub:1
    },y:-20
})

gsap.to('.sec2 img',{
    y:'-15%',
    scrollTrigger:{
        trigger:'.sec2',
        start:"top 10%",
        end:"top -30%",
        scrub:true
    }
})

gsap.to('.sec3 img',{
    y:'-15%',
    scrollTrigger:{
        trigger:'.sec3',
        start:"top 10%",
        end:"top -30%",
        scrub:true
    }
})


gsap.to('.sec5 img',{
    y:'-15%',
    scrollTrigger:{
        trigger:'.sec5',
        start:"top 10%",
        end:"top -30%",
        scrub:true
    }
})

let tl = gsap.timeline({})

tl.to('.img',{
    top:'50%',
    scrollTrigger:{
        trigger:'.sec4',
        start:"top 30%",
        end:'top -10%',
       scrub:true       
    }
})

tl.to('.sec4',{
    scrollTrigger:{
        trigger:'.sec4',
    start:'bottom 95%',
    scrub:true,
 onEnter:()=>{
        img.src ='https://i.pinimg.com/736x/29/37/cd/2937cdd91bcc77bc1fbae0732934964e.jpg'
    }  
    }    
})