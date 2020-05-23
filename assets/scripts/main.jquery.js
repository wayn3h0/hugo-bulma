$(document).ready(function() {

    const $scrollDelay = 500;

/**********/
/* Navbar */
/**********/

    // ref: https://bulma.io/documentation/components/navbar/#navbar-menu
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });


/****************/
/* Notification */
/****************/

    $(".notification .delete").click(function() {
        $(this).parent().remove();
    });


/*************/
/* BackToTop */
/*************/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(".back-to-top").removeClass("is-hidden");
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    $(".back-to-top").click(function() {
        $("html, body").animate({scrollTop: 0}, $scrollDelay);
    });


/**********************************/
/* Fix Anchors + Navbar fixed top */
/**********************************/
   
    // ref: https://jsfiddle.net/ianclark001/aShQL/
    function scrollToAnchor(href) {
        href = typeof(href) == "string" ? href : $(this).attr("href");
        // fix for chinese and cyrillic character hash and href values
        // ref: https://gomakethings.com/handling-chinese-and-cyrillic-character-hash-and-href-values-in-javascript/
        var hash;
        try {
            hash = decodeURIComponent(href); 
        } catch(e) {
           hash = href;
        }
         
        var $navbar = $(".navbar.is-fixed-top");
        if (hash.indexOf("#") == 0 && $navbar.length) {
            // fix for id of footnote
            // ref: https://learn.jquery.com/using-jquery-core/faq/how-do-i-select-an-element-by-an-id-that-has-characters-used-in-css-notation/
            hash = hash.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");   
            var $target = $(hash);
            if($target.length) {
                $("html, body").animate({scrollTop: $target.offset().top - $navbar.height()}, $scrollDelay);
            }
        }
    }    

    // When our page loads, check to see if it contains and anchor
    scrollToAnchor(window.location.hash);
    // Intercept all anchor clicks
    $("a[href*=\\#]:not([href=\\#])").click(scrollToAnchor);


/********************/
/* Extension: KaTeX */
/********************/
    
    if ($("script[src$='katex.min.js']").length ) { // KaTeX enabled
        renderMathInElement(document.body);
    }


/**********************/
/* Extension: mermaid */
/**********************/
    if ($("script[src$='mermaid.min.js']").length ) { // mermaid enabled
        mermaid.initialize({startOnLoad:true, securityLevel:'loose'});
    }


});
