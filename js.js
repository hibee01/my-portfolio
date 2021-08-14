$(document).ready(function(){


    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');




    openMenu.addEventListener('click',show);
    closeMenu.addEventListener('click',close);

    function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    }
    function close(){
    mainMenu.style.top = '-100%';
    }



    $(".switch").click(function(){
        window.open('https://www.behance.net/gallery/121393153/E-commerce-Mobile-App', '_blank')
    });

    $(".gjustice").click(function(){
        window.open('https://hibee01.github.io/Gjustice/', '_blank')
    });

    $(".switch-landing").click(function(){
        window.open('http://www.switchapp.us/', '_blank')
    });

    $(".art").click(function(){
        window.open('https://www.behance.net/gallery/113074999/Art-Gallery-Landing-Page', '_blank')
    });

    $(".music").click(function(){
        window.open('https://www.behance.net/gallery/112700841/Music-App-UI/', '_blank')
    });

    $(".e-mobile").click(function(){
        window.open('https://hibee01.github.io/E-commerce-mobile-app/', '_blank')
    });

    $(".farming").click(function(){
        window.open('https://www.behance.net/gallery/124733937/Online-Farming-System-Admin-UI', '_blank')
    });

    $(".rwanda").click(function(){
        window.open('https://hibee01.github.io/Rwandaful/,', '_blank')
    });
});