// Waypoints

    // First div
    var waypoint = new Waypoint({
      element: document.getElementById('first-skills'),
      handler: function(direction) {
        $('#first-skills').find('.firstRow').css('opacity','1');
        $('#first-skills').find('.first-row-circle').circleProgress({
            lineCap: 'round',
            fill: '#fafafa',
            animation: { duration: 1500 }
        });
        setTimeout(function() { $('#first-skills').find('.second-row-circle').circleProgress({
            lineCap: 'round',
            fill: '#fafafa',
            animation: { duration: 1500 }
        }); }, 500 );
        setTimeout(function() { $('#first-skills').find('.secondRow').css('opacity','1'); }, 500 );
        this.destroy()
      },
        offset: '90%'
    })

    // Second div
    var waypoint2 = new Waypoint({
      element: document.getElementById('second-skills'),
      handler: function(direction) {
        $('#second-skills').find('.firstRow').css('opacity','1');
        $('#second-skills').find('.first-row-circle').circleProgress({
            lineCap: 'round',
            fill: '#fafafa',
            animation: { duration: 1500 }
        });
        setTimeout(function() { $('#second-skills').find('.second-row-circle').circleProgress({
            lineCap: 'round',
            fill: '#fafafa',
            animation: { duration: 1500 }
        }); }, 750 );
        setTimeout(function() { $('#second-skills').find('.secondRow').css('opacity','1'); }, 500 );
        this.destroy()
      },
        offset: '90%'
    })

    // Office
    var waypoint3 = new Waypoint({
      element: document.getElementById('office'),
      handler: function(direction) {
        $('#office').find('.circle-container').css('opacity','1');
        $('#office').find('.circleOffice').circleProgress({
            lineCap: 'round',
            fill: '#fafafa',
            animation: { duration: 1500 }
        });
        this.destroy()
      },
        offset: '90%'
    })

    // Languages
    var waypoint4 = new Waypoint({
      element: document.getElementById('languages'),
      handler: function(direction) {
        $('#languages').find('.circle-container').css('opacity','1');
        $('#languages').find('h4').css('opacity','1');
        $('#languages').find('.circleLanguages').circleProgress({
            lineCap: 'round',
            fill: '#fafafa',
            animation: { duration: 1500 }
        });
        this.destroy()
      },
        offset: '90%'
    })

    // Count to
    var waypoint4 = new Waypoint({
      element: document.getElementById('interests'),
      handler: function(direction) {
        $('.timer').fadeIn('slow');
        // CountTo
        $('.timer').countTo({
            speed: 2000
        });
        this.destroy()
      },
      offset: '45%'
    })

    
    
    

    

// Show nav mobile
$('.fa-bars').click(function(){
    $( ".slidingBody" ).animate({
        left: "50%",
    }, 250);
    $( ".slidingImg" ).animate({
        left: "50%",
    }, 250);
    $( ".closeMenu" ).animate({
        left: "50%",
    }, 50);
    $('.sidebar ul li').show();
    $('.sidebar ul').css('background-color','#fff');
    $('.spacer').css('background-color','#e3e3e3');
    $( ".slidingBody" ).addClass('slided');
    $(this).css('opacity','0');
    $('.site-title').css('opacity','0');
    $('#mobilenav').onePageNav({
        changeHash: false,
        scrollThreshold: 0.2
    });
});


// Hide nav mobile
$('.mobile-nav li a, .closeMenu').click(function(){
    $( ".slidingBody" ).removeClass('slided');
    $( ".slidingBody" ).animate({
        left: "0",
    }, 250);
    $( ".slidingImg" ).animate({
        left: "0",
    }, 250);
    $( ".closeMenu" ).animate({
        left: "100%",
    }, 50);
    $('.fa-bars').css('opacity','1');
    $('.site-title').css('opacity','1');
    $('.sidebar ul li').hide();
    $('.sidebar ul').css('background-color','#e3e3e3');
    $('.spacer').css('background-color','#e3e3e3');
});


// Contact form
$('input').on("focus", function(){
   $( this ).parent( 'div' ).addClass( 'active-input' );
});
$("input").bind( "clickoutside", function(event){
    $(this).parent( 'div' ).removeClass( 'active-input' );
});
$('textarea').on("focus", function(){
   $( 'form' ).addClass( 'special' );
});
$("textarea").bind( "clickoutside", function(event){
    $('form').removeClass( 'special' );
});

// Check if inputs are empty
$('.firstInput').blur(function(){
    tmpval = $(this).val();
    if(tmpval == '') {
        $( this ).parent( 'div' ).removeClass( 'active-input-2' );
    } else {
        $( this ).parent( 'div' ).addClass( 'active-input-2' );
    }
});
$('.second-field').blur(function(){
    tmpval = $(this).val();
    if(tmpval == '') {
        $( this ).parent( 'div' ).removeClass( 'active-input-2' );
    } else {
        $( this ).parent( 'div' ).addClass( 'active-input-2' );
    }
});
$('textarea').blur(function(){
    tmpval = $(this).val();
    if(tmpval == '') {
        $('form').removeClass( 'special-2' );
    } else {
        $( 'form' ).addClass( 'special-2' );
    }
});

// Popup
$(window).scroll(function(){
    if($(document).scrollTop()>=$(document).height()/2)
    {$('.popup').hide();};
});

// One Page Sticky Nav
$(document).ready(function() {
    $("header").sticky({topSpacing:0});
    $('#mainnav').onePageNav({
        changeHash: false,
        scrollThreshold: 0.2
    });
});

// Headline text
$('.title').fitText(0.8, { minFontSize: '70px', maxFontSize: '150px' });
$('.subtitle').fitText(1.25, { minFontSize: '20px', maxFontSize: '30px' });

// Fullscreen header image
$('#slides').superslides({
    play: 0
});


$(document).ready(function() {
                
                setTimeout(function() { $('#trigger').css('opacity','1'); }, 4000 );
                
                

                //First typing effect
                $(function(){
                    $(".title").typed({
                        strings: ["Hi, I'm Davide."],
                        typeSpeed: 50
                    });
                    $(".subtitle").typed({
                        strings: ["Let me show you around!"],
                        typeSpeed: 50,
                        startDelay: 1500,
                        callback: function() {
                            $("#trigger").hover(function(){
                                $(this).css('cursor','pointer');
                            });
                        }
                    });
                });
                
                // New text on click
                $('#trigger').on("click", function(){
                    $('#slides').find('img').removeClass('hidden');
                    $(".subtitle").typed({
                        strings: ['"Everything around you,^250 was made up by people that are no smarter than you.^1250 And you can change it."'],
                        typeSpeed: 30,
                        callback: function() {
                            $("#skip").hover(function(){
                                $(this).css('cursor','pointer');
                            });
                            $(".btn").hover(function(){
                                $(this).css('cursor','pointer');
                            });
                            $('.hidden').removeClass('hidden');
                            setTimeout(function() {
                                $('#skip').css('opacity','1');
                            }, 500 );
                            $('#skip').on("click", function(){
                                $('body').removeClass('overhidden');
                                $.scrollTo(document.getElementById('top'), 750);
                            });
                        }
                    });
                });
                
                // Background animation on click
                $('#trigger').on("click", function(){
                    $('.preloader').css('opacity','0');
                    $(this).hide();
                    $(".overlay").css('background-color','rgba(0,0,0,0.5)');
                });
    
            // Apply class for WOW
            $('#about').find('.section-content').addClass('wow').addClass('fadeIn');
            $('.experience-container').addClass('wow').addClass('fadeIn');
            $('#social-engagement').find('div').addClass('wow').addClass('fadeIn');
            $('#social-engagement').find('p').addClass('wow').addClass('fadeIn');
            $('form').addClass('wow').addClass('fadeIn').attr('data-wow-delay','0.3s');
            $('.social').find('.flex-container').addClass('wow').addClass('fadeIn');

            new WOW().init();
            $('.wow').attr('data-wow-delay','0.2s').attr('data-wow-duration','0.8s');
                        });


// Collapsable

$('.collapseBtn').click(function(){
    if( $(this).hasClass('open') ){
        $(this).parent().find('.collapsable').slideUp();
        $(this).text('more');
        $(this).removeClass('open');
        $('html,body').animate({
            scrollTop: $(this).parent().offset().top - 81
        }, 300);
    }
    else {
        $(this).parent().find('.collapsable').slideDown();
        $(this).text('less');
        $(this).addClass('open');
    }
});

// Google Analytics

