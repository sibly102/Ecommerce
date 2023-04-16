$(document).ready(function(){
//Hero Slider
$('#hero-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    smartSpeed:1000,
    navText: ['PREV','NEXT'],
    responsive:{
        0:{
        
        },
        600:{
            
        },
        1000:{
            
        }
    }
});
$('#project-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    smartSpeed:800,
    margin: 24,
    responsive:{
        0:{
        
        },
        768:{
            
        },
        1140:{
          items:2, 
          center:true,
        }
    }
});


});