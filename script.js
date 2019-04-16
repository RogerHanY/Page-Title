$(".part-3").hide();
$(".part-4").hide();
$(".part-5").hide();
$(".part-6").hide();
$(".part-7").hide();
$(".part-8").hide();

$(".part-1").click(function() {
    $(".part-1").text("Your Husky Died!!!");
    $(".part-2").fadeOut();
    $(".part-5").fadeIn();
    $(".part-0").fadeOut();
    $(".part-7").fadeIn();
});

$(".part-2").click(function() {
    $(".part-1").fadeOut();
    $(".part-2").text("Your Husky Win!!!");
    $(".part-3").fadeIn();
    $(".part-0").fadeOut();
    $(".part-6").fadeIn();
    
});

$(".part-5").click(function() {
    $(".part-5").toggle();
});

$(".part-6").click(function() {
    $(".part-4").slideDown();
    $(".part-2").text("Your husky Tired");
    $(".part-3").slideUp();
    $(".part-2").slideDown();
    $(".part-6").fadeOut();
});

$(".part-7").click(function() {
    $(".part-0").fadeIn();
    $(".part-8").fadeIn();
    $(".part-5").fadeOut();
    $(".part-1").fadeOut();
    $(".part-7").fadeOut();
});

$(".part-8").click(function() {
    $(".part-1").text("Your Husky Died!!!");
    $(".part-2").fadeOut();
    $(".part-5").fadeIn();
    $(".part-0").fadeOut();
    $(".part-7").fadeIn();
    $(".part-1").fadeIn();
    $(".part-8").fadeOut();
});

