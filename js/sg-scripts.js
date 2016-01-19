/* -------------------------------------------------------------------------
 sg-scripts.js
---------------------------------------------------------------------------- */
hljs.initHighlightingOnLoad();

$('a[href^="#"]').click(function() {

    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 20}, 500);

    return false;

    e.preventDefault();

});
