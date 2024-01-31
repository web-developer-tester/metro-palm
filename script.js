var otvshows= $('.section-otv-shows').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    autoHeight : true,
    autoplayTimeout:5000,
    responsiveClass:true,
    autoplayHoverPause:true,
    nav:false,
    lazyLoad:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            autoplay:true,
        },
        600:{
            items:4,
            loop:true,
            autoplay:true,
        },
        1000:{
            items:4,
            loop:true,
            autoplay:true,
        }
    }
});

$(function(){
  $('.nav-toggle, nav a').on('click',function(){
    $('nav').toggleClass('open');
    $('main').toggleClass('back').toggleClass("blur");
 
  });
});

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./v10072.jpg
  ./v10071.jpg
  ./v10070.jpg
  ./v10069.jpg
  ./v10068.jpg
  ./v10067.jpg
  ./v10066.jpg
  ./v10065.jpg
  ./v10064.jpg
  ./v10063.jpg
  ./v10062.jpg
  ./v10061.jpg
  ./v10060.jpg
  ./v10059.jpg
  ./v10058.jpg
  ./v10057.jpg
  ./v10056.jpg
  ./v10055.jpg
  ./v10054.jpg
  ./v10053.jpg
  ./v10052.jpg
  ./v10051.jpg
  ./v10050.jpg
  ./v10049.jpg
  ./v10048.jpg
  ./v10047.jpg
  ./v10046.jpg
  ./v10045.jpg
  ./v10044.jpg
  ./v10043.jpg
  ./v10042.jpg
  ./v10041.jpg
  ./v10040.jpg
  ./v10039.jpg
  ./v10038.jpg
  ./v10037.jpg
  ./v10036.jpg
  ./v10035.jpg
  ./v10034.jpg
  ./v10033.jpg
  ./v10032.jpg
  ./v10031.jpg
  ./v10030.jpg
  ./v10029.jpg
  ./v10028.jpg
  ./v10027.jpg
  ./v10026.jpg
  ./v10025.jpg
  ./v10024.jpg
  ./v10023.jpg
  ./v10022.jpg
  ./v10021.jpg
  ./v10020.jpg
  ./v10019.jpg
  ./v10018.jpg
  ./v10017.jpg
  ./v10016.jpg
  ./v10015.jpg
  ./v10014.jpg
  ./v10013.jpg
  ./v10012.jpg
  ./v10010.jpg
  ./v10009.jpg
  ./v10008.jpg
  ./v10007.jpg
  ./v10006.jpg
  ./v10005.jpg
  ./v10004.jpg
  ./v10003.jpg
  ./v10002.jpg
  ./v10001.jpg
  ./v10000.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 72;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 4;
  var centerShift_y = (canvas.height - img.height * ratio) / 4;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})



var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






