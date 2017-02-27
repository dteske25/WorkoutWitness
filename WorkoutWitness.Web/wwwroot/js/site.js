// Write your Javascript code.
//window.onload = function () {
//    document.getElementById("loading").style.display = "none";
//    document.getElementById("fakeAppBar").style.display = "none";
//} 

$(document).ready(function () {
    $("#fakeAppBar").animate({
        opacity: 0
    }, 400, function () {
        $(this).css("display", "none");
    });
    $("#loading").animate({
        opacity: 0
    }, 400, function () {
        $(this).css("display", "none");
    });
});