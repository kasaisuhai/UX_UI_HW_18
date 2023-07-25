///Event Listeners
$(".navIcon").click(function(){ //Toggle Hamburger
    $(this).toggleClass("hamburger close");
    $("header").toggleClass("openNav");
    $("nav").toggleClass("open");
    $("nav ul").toggleClass("mobileHidden");
    $("body").toggleClass("scrollLock");
});