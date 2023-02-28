$('#hero .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('#LawPackage .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#textimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



$('#ClientsLogo .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbg").style.marginTop = "0px";
  } else {
    document.getElementById("navbg").style.marginTop = "35px";
  }
}

$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
        
        
    });
});