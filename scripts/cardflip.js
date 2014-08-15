$(function () {
    // Utilize the modernzr feature support class to detect CSS 3D transform support
    if ($('html').hasClass('csstransforms3d')) {    
    
        // if it's supported, remove the scroll effect add the cool card flipping instead
        $('.thumb').removeClass('scroll').addClass('flip');        
        
        // add/remove flip class that make the transition effect
        $('.thumb.flip').hover(
            function () {
                $(this).find('.thumb-wrapper').addClass('flipIt');
            },
            function () {
                $(this).find('.thumb-wrapper').removeClass('flipIt');            
            }
        );
        //
        // var flipped = false;

        // $('.thumb.flip').click(
        //     function () {
        //         if( !flipped ) {
        //             $(this).find('.thumb-wrapper').addClass('flipIt');
        //             flipped = true;
        //         }
        //         else {
        //             $(this).find('.thumb-wrapper').removeClass('flipIt');
        //             flipped = false;
        //         }
        //     }
        // );
        
    } else {
        
        // CSS 3D is not supported, use the scroll up effect instead
        $('.thumb').hover(
            function () {
                $(this).find('.thumb-detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
            },
            function () {
                $(this).find('.thumb-detail').stop().animate({bottom: ($(this).height() * -1) }, 500, 'easeOutCubic');            
            }
        );
    }
});