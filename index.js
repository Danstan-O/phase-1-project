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

        
        
        
//         if(this.scrollX > 18){
//             $(".navBar").addClass(".zeller");
//         }else{
//             $(".navBar").removeClass(".zeller");
//         }
//     });

//     // menu-navBar toggle script
//     $(".menu-btn").click(function(){
//         $(".navBar .menu").toggleClass("active");
//         $(".menu-btn i").toggleClass("active");
//     });
// });

// const button = document.querySelector('#button.submit');

// button.addEventListener('click', () => {
//     button.innerText = 'Thank You!';
    
//     window.setTimeout(() => {
//       button.innerText = 'Hire me';
//     }, 5000);
// });