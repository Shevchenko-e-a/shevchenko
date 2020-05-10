$(document).ready(function() {

    $(function () {
        $('.job-menu-toggle').click(function (e) {
            $('.job-nav').toggleClass('open');
        });
    });

    $('.job-nav__link').click(function(k) {
        var ind=$(this).parent().index();
        var koof=0;
        var w=$(window).outerWidth();
        if(w<1000){koof=80;}
        if(ind==0){
            $('body,html').stop().stop().animate({scrollTop: 0},500, function() {});
        }
        if(ind==1){
            $('body,html').stop().stop().animate({scrollTop:$('#jobs').offset().top-koof},500, function() {});
        }
        $('.job-nav').removeClass('open');
        return false;
    });
});