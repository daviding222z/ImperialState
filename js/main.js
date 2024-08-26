$(document).ready(function () {
    //cambio de header
    $(window).on('scroll', function () {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })
    //accionamiento del menu lateral
    $(document).ready(function () {
        $('#burguer').click(function () {
            $('#burguer').toggleClass('abierto')
            $('.menu').toggleClass('abierto');
        })
    })
    //smooth scroll
    $('a').on('click', function () {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})