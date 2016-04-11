// #############################################################################
// -----------------------------------------------------------------------------
// Anchors
// -----------------------------------------------------------------------------

jQuery('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var jQuerytarget = jQuery(this.hash);
        jQuerytarget = jQuerytarget.length && jQuerytarget || jQuery('[name=' + this.hash.slice(1) +']');

        if (jQuerytarget.length) {
            var targetOffset = jQuerytarget.offset().top;
            jQuery('html,body').animate({scrollTop: targetOffset}, 'slow');

            return false;
        }
    }
});

jQuery(".navbar-nav li a").click(function(event) {
   jQuery(".navbar-collapse").collapse('hide');
 });

// #############################################################################
