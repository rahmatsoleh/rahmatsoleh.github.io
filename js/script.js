// Event pada saat link di klik

$('.page-scroll').on('click', function(e) {

    // Ambil Isi hreff
    var tujuan = $(this).attr('href');
    // Ambil Element Yang Bersangkutan
    var elemenTujuan = $(tujuan);

    // Pindahkan scroll
    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 40 
        }, 1000, 'swing');

    e.preventDefault();
});



// Paralax

// About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {

    var wScroll = $(this).scrollTop();
    

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });


    // Portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ){
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
             $('.portfolio .thumbnail').eq(i).addClass('muncul');   
            }, 300 * (i+1));
        });

       
    }
});