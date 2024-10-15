
var largura = window.innerWidth
console.log(largura)
if (largura <= 591) {
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Rolar para baixo - esconder header
            header.style.top = '-100px';
        } else {
            // Rolar para cima - mostrar header
            header.style.top = '0';
        }

        lastScrollTop = scrollTop;
    });
}else{
    console.log(largura)
}

