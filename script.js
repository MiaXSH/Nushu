// document.querySelectorAll(".tick").forEach(tick =>{
//     tick.addEventListener("click", function(){
//         this.classList.toggle("active");
//         adjustTicks();
//     });
// });


// $(".tick").click(function(){
//     $(this).toggleClass("active");
// });


function updateWidth (){
    var activeTicks = $(".tick-container.active").length;
    if (activeTicks > 1) {
        $(".TimeLine-line").css("width", "710vw");
        $(".Gradient-Overlay").css("width", "710vw");
        $("#blackbackground").css("width", "710vw");
    }else {
        $(".TimeLine-line").css("width", "390vw");
        $(".Gradient-Overlay").css("width", "390vw");
        $("#blackbackground").css("width", "390vw");
    }
}

// $(".paragraph-block").click(function(){
//     $(this).toggleClass("active");
// })

$(".tick-container").click(function(){
    $(this).toggleClass("active");


    if($(".tick-container.active").length > 0) {
        $("#blackbackground").addClass("active");
    //  $("body").css("overflow-y","auto");
    }else{
        $("#blackbackground").removeClass("active");
    //  $("body").css("overflow-y", "hidden");
    }
    updateWidth();
});
updateWidth();
 

//  $( ".tick-label" ).hover(function() {
//     $(this).siblings(".tick").css({
//         "height": "300px",
//         "width": "5px"
//     });
//   //this happens when hover
// }, function() {
//     $(this).siblings(".tick").css({
//         "height": "20px",
//         "width": "3px"
//     });
//   //this hapens when off
// }
// );

// $(".tick-label").hover(
//     function() {
//         $(this).parent().find(".tick").css({
//             "height": "300px",
//             "width": "5px"
//         });
//     },
//     function() {
//         $(this).parent().find(".tick").css({
//             "height": "20px",
//             "width": "3px"
//         });
//     }
// );


