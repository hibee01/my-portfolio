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
        window.open('https://hibee01.github.io/switch-design-project/', '_blank')
    });

    $(".gjustice").click(function(){
        window.open('https://hibee01.github.io/Gjustice/', '_blank')
    });

    $(".switch-landing").click(function(){
        window.open('http://www.switchapp.us/', '_blank')
    });

    // $(".art").click(function(){
    //     window.open('https://www.behance.net/gallery/113074999/Art-Gallery-Landing-Page', '_blank')
    // });

    $(".music").click(function(){
        window.open('https://hibee01.github.io/music-app/', '_blank')
    });

    $(".e-mobile").click(function(){
        window.open('https://hibee01.github.io/E-commerce-mobile-app/', '_blank')
    });

    $(".farming").click(function(){
        window.open('https://hibee01.github.io/complete-farmer/', '_blank')
    });

    $(".rwanda").click(function(){
        window.open(' https://hibee01.github.io/Rwandaful/', '_blank')
    });

    $(".foodie").click(function(){
        window.open('https://hibee01.github.io/my-foodie-app/', '_blank')
    });

    $(".Dax").click(function(){
        window.open('https://hibee01.github.io/Daxlinks/', '_blank')
    });

    $(".rosabon").click(function(){
        window.open('https://www.figma.com/file/Txd7sCxIEiF385p15LYaAp/Rosabon-finance?node-id=0%3A1', '_blank')
    });
});