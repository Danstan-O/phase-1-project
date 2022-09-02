//code

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('far-times');
        $('header').toggleClass(toggle);
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('far-times');
        $('header').toggleClass(toggle);

    });
});

        
        
        
