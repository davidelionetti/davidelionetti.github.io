$( document ).ready(function() {
    setTimeout(function() {
        $('.preContent').find('.overlay').css('opacity','1');
        $('header').show();
    }, 1500);
});

$('.preContent').superslides({
    inherit_width_from: '.preContent',
    inherit_height_from: '.preContent',
    'play': 0
});

$(".headline").fitText(1.2, { minFontSize: '30px', maxFontSize: '70px' });

$( ".fa-bars.for-mobile" ).click(function() {
    
    $( ".slidingBody, header" ).animate({
        left: "50%",
    }, 250);
    
    $( ".slidingBody" ).addClass('slided');
    
    $(".fa-bars").hover().css('cursor','default');

  setTimeout(function(){
  }, 200);
    
});

$(".closeMenu, .fa-times").click(function() {
    $( ".slidingBody, header" ).animate({
        left: "0",
    }, 250);
    $('.slidingBody').removeClass('slided');
    $(".fa-bars").hover().css('cursor','pointer');
});

$('.spacer, .mobileMenu ul li').click(function() {
    setTimeout(function(){
        $( ".slidingBody, header" ).animate({
            left: "0",
        }, 250);
        
        $('.slidingBody').removeClass('slided');
    
        $(".fa-bars").hover().css('cursor','pointer');
  }, 150);
});


$( ".flexLesson" ).click(function() {
    $(this).parent().find('.lessonContent').slideToggle("fast", function() {
    });
    $(this).parent().toggleClass("expanded");
    $(this).find('.fa').toggleClass( 'fa-arrow-down fa-arrow-up' );
});

function pasuser(form) { 
if (form.id.value=="Emanuele") { 
if (form.pass.value=="halloberlin") { $('.hidden').removeClass('hidden'); $('.loginOverlay').fadeOut('slow'); $('html, body').css('overflow-y', 'scroll'); } 
else { alert("Wrong Password") } 
} 
else { alert("Wrong Username") } 
}