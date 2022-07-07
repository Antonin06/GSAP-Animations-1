document.addEventListener('DOMContentLoaded', function() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text.reveal-top p", {
        backgroundPositionY: "0%",
        stagger: 1,
        scrollTrigger: {
            trigger: ".text.reveal-top p",
            scrub: 1,
            start: "top center",
            end: "bottom top",
            markers: true,
        },
    });
    gsap.to(".text.reveal-left-right p", {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
            trigger: ".text.reveal-left-right p",
            scrub: 1,
            start: "top center",
            end: "bottom top",
            markers: true,
        },
    });

    const containerMarqueeTitle = document.querySelectorAll('.title-marquee');
    let currentScroll = 0;
    let isScrollingDown = true;
    let tween = gsap.to(containerMarqueeTitle, {
        xPercent: -100,
        repeat: -1,
        duration: 15,
        ease: "none",
    });
    gsap.utils.toArray(containerMarqueeTitle).forEach(function(el) {
        el.addEventListener('mouseenter', function() {
          tween.pause();
        })
        el.addEventListener('mouseleave', function() {
          tween.play();
      })
    })

    window.addEventListener("scroll", function(){
        window.scrollY > currentScroll ? isScrollingDown = true : isScrollingDown = false;
        gsap.to(tween, {
            timeScale: isScrollingDown ? 1 : -1,

        });

        currentScroll = window.pageYOffset
    });

});

