//code

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollX > 18){
            $(".navBar").addClass(".zeller");
        }else{
            $(".navBar").removeClass(".zeller");
        }
    });

    // menu-navBar toggle script
    $(".menu-btn").click(function(){
        $(".navBar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});

const button = document.querySelector('#button.submit');

button.addEventListener('click', () => {
    button.innerText = 'Thank You!';
    
    window.setTimeout(() => {
      button.innerText = 'Hire me';
    }, 5000);
});