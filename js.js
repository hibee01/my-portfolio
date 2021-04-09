$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $(".navbar").addClass("sticky");
        }else {
            $(".navbar").removeClass("sticky");
        }
        // if(this.scrollY >= 1120 ){
        //     gsap.to('.card', {duration: 0.1, y: '0%', opacity: 1, stagger: 0.5 });
        // } else {
        //     gsap.To('.card', {opacity: 0});
        // }
        if(this.scrollY > 1300){
            $('.scroll-up-btn').addClass('show');
        }else{$('.scroll-up-btn').removeClass('show')}
    })

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    })

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    // typing animation

    // var typed = new Typed(".typing", {
    //     strings: ["Ui/Ux Designer", "Front-end Developer", "Digital Artist"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    // var typed = new Typed(".typing-2", {
    //     strings: ["Ui/Ux Designer", "Web Developer", "Digital Artist"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    $(".foodie-app").click(function(){
        window.location.href = 'https://hibee01.github.io/my-foodie-app/'
    })
    $(".foodie-web").click(function(){
        window.location.href = 'https://hibee01.github.io/foodie-website/'
    });
    $(".commerce").click(function(){
        window.location.href = 'https://hibee01.github.io/dev/'
    });
    $(".bootstrap").click(function(){
        window.location.href = 'https://hibee01.github.io/d-best-course/'
    });
    $(".music").click(function(){
        window.location.href = 'https://www.behance.net/gallery/112700841/Music-App-UI/'
    });
    $(".lodge").click(function(){
        window.location.href = 'https://www.behance.net/gallery/112935667/Lodging-App-Mobile-UI/'
    });
    $(".e-mobile").click(function(){
        window.location.href = 'https://hibee01.github.io/E-commerce-mobile-app/'
    });
    $(".switch").click(function(){
        window.location.href = 'https://hibee01.github.io/switch-design-project/'
    });
    $(".rwanda").click(function(){
        window.location.href = 'https://hibee01.github.io/Rwandaful/'
    });
    $(".art").click(function(){
        window.location.href = 'https://www.behance.net/gallery/113074999/Art-Gallery-Landing-Page'
    });

    $(".jumia").click(function(){
        document.location.href = '/jumia/index.html'
    });
   
    $(".portfolio").click(function(){
        document.location.href = 'index.html'
    });
   
    // function showAll(){
    //     $('.work-box').hide();
    //     $('.work-box').slice(0, 2).show();
    // }

    // function showAll(){
    //     $('.work-box').show();
    // }
 

    // if($('.work-box').length > 6) {
    //     $('.work-box:gt(5)').hide();
    //     $('.show-more').show();
    
    // }

    // $('.show-more').on('click', function(){
    //     $('.work-box:gt(5)').toggle("slow");

    //     // $(this).text() === 'show more' ?
    //     // $(this).text('show more') : $(this).text('show less');

    //     if($(this).text() === 'Show more'){
    //         $(this).text('Show less');
    //     } else { $(this).text('Show more')}
       
    // });

    const tl = gsap.timeline({defaults: {ease: 'Power2.easeOut'} });


tl.to('.text-1', {y:'0%', duration: 0.7 })
tl.to('.text-2', {y:'0%', duration: 0.5 })
tl.to('.text-3', {y:'0%', duration: 0.5 })
// tl.to('.typing', {y:'0%', duration: 0.5 })
// tl.fromTo('.navbar', {opacity: 0}, {opacity: 1, duration: 0.5}, '-=0.7')
// tl.fromTo('.hire', {opacity: 0}, {opacity: 1, duration: 0.4});



const facebookBtn = document.querySelector(".facebook-btn")
const twitterBtn = document.querySelector(".twitter-btn")
const linkedinBtn = document.querySelector(".linkedin-btn")
const redditBtn = document.querySelector(".reddit-btn")
const pinterestBtn = document.querySelector(".pinterest-btn")


    let postUrl = 'https://hibee01.github.io/my-portfolio/';
    let postTitle = 'Hi everyone, pls check this out';

    facebookBtn.setAttribute('href', 'https://www.facebook.com/sharer.php?u=[postUrl]'
    );
    twitterBtn.setAttribute('href', 'https://twitter.com/share?url=${postUrl}&text=${postTitle}'
    );
    linkedinBtn.setAttribute('href', 'https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]'
    );
    redditBtn.setAttribute('href', 'https://reddit.com/submit?url=${postUrl}&title=${postTitle}'
    );
    


})


































