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






// function updateWidth() {
//     let activeTicks = $(".tick-container.active").length;
//     let previousScroll = $(window).scrollLeft(); // Capture current scroll position

//     if (activeTicks > 1) {
//         $(".TimeLine-line, #blackbackground, .Gradient-Overlay").css("width", "710vw");
//     } else {
//         $(".TimeLine-line, #blackbackground, .Gradient-Overlay").css("width", "390vw");
//     }

//     $(window).scrollLeft(previousScroll); // Keep user’s view stable
// }





// $(".paragraph-block").click(function(){
//     $(this).toggleClass("active");
// })

$("#openAll").click(function () {
    $(".tick-container").addClass("active");
    $("#blackbackground").addClass("active");
    $(".TimeLine-line").addClass("active");
    $("#closeAll").css("opacity","1");
    $("#openAll").css("opacity","0");
    $(".navigation").css("opacity","1");
    $(".NaviWord").addClass("active");
    $(".upIndicate").css("opacity","1");

    updateWidth();
});

$("#closeAll").click(function () {
    $(".tick-container").removeClass("active");
    $("#blackbackground").removeClass("active");
    $(".TimeLine-line").removeClass("active");
    $("#closeAll").css("opacity","0");
    $("#openAll").css("opacity","1");
    $(".navigation").css("opacity","0");
    $(".NaviWord").remove("active");
    $(".upIndicate").css("opacity","0");
    updateWidth();
});

// $(".NaviWord.active").hover(function () {
//     let tickId = $(this).attr("id").replace("_", "");
//     let targetTick = $("#" + tickId);
//     if (targetTick.length) {
//         $("html, body").stop().animate({
//             scrollLeft: targetTick.offset().left
//         }, 500);
//     }
// });

// $(".NaviWord").click(function () {
//     let tickId = $(this).attr("id").replace("_", "");
//     let targetTick = $("#" + tickId);

//     if (!$(this).hasClass("active")) {
//         $(this).addClass("active");
//         targetTick.addClass("active");

//         $("html, body").stop().animate({
//             scrollLeft: targetTick.offset().left
//         }, 500);
//     } else {
//         $(this).removeClass("active");
//         targetTick.removeClass("active");
//     }

//     updateWidth();
// });

$(".tick-container").click(function(){
    $(this).toggleClass("active");


    if($(".tick-container.active").length > 0) {
        $("#blackbackground").addClass("active");
        $(".TimeLine-line").addClass("active");
        $("#closeAll").css("opacity","1");
        $(".navigation").css("opacity","1");
        $(".upIndicate").css("opacity","1");
    //  $("body").css("overflow-y","auto");
    }else{
        $("#blackbackground").removeClass("active");
        $(".TimeLine-line").removeClass("active");
        $("#closeAll").css("opacity","0");
        $(".navigation").css("opacity","0");
        $(".upIndicate").css("opacity","0");

    //  $("body").css("overflow-y", "hidden");
    }

   

    if($("#RI").hasClass("active")) {
        $("#Historical_Background").addClass("active");
        }else{
            $("#Historical_Background").removeClass("active");
        }

    if($("#R").hasClass("active")) {
    //     $("#Reason_time_and_place_it_born").css("background-color","rgb(69, 69, 69)");
    // }else{
    //     $("#Reason_time_and_place_it_born").css("background-color","rgba(69, 69, 69, 0)");
    
    $("#Reason_time_and_place_it_born").addClass("active");
    }else{
        $("#Reason_time_and_place_it_born").removeClass("active");
    }

    // if($("#Reason_time_and_place_it_born").hasClass("active")){
    //     $("#R").addClass("active");
    // }else{
    //     $("#R").removeClass("active");
    // }


    if($("#S").hasClass("active")) {
        $("#Societal_and_cultural_background").addClass("active");
    }else{
        $("#Societal_and_cultural_background").removeClass("active");
    }

    if($("#I").hasClass("active")) {
        $("#Important_Figure").addClass("active");
    }else{
        $("#Important_Figure").removeClass("active");
    }

    if($("#LI").hasClass("active")) {
        $("#Language_Structure").addClass("active");
    }else{
        $("#Language_Structure").removeClass("active");
    }

    if($("#W").hasClass("active")) {
        $("#Writing_system").addClass("active");
    }else{
        $("#Writing_system").removeClass("active");
    }

    if($("#Co").hasClass("active")) {
        $("#Comparison").addClass("active");
    }else{
        $("#Comparison").removeClass("active");
    }
    if($("#CaI").hasClass("active")) {
        $("#Calligraphy_Traditions_and_Techniques").addClass("active");
    }else{
        $("#Calligraphy_Traditions_and_Techniques").removeClass("active");
    }
    if($("#Ca").hasClass("active")) {
        $("#Calligraphy").addClass("active");
    }else{
        $("#Calligraphy").removeClass("active");
    }
    if($("#A").hasClass("active")) {
        $("#Art_Expression").addClass("active");
    }else{
        $("#Art_Expression").removeClass("active");
    }
    if($("#O").hasClass("active")) {
        $("#Other").addClass("active");
    }else{
        $("#Other").removeClass("active");
    }

    updateWidth();
});

$("#Historical_Background").click(function(){
    $(this).toggleClass("active");

    if($("#Historical_Background").hasClass("active")){
        $("#RI").addClass("active");
    }else{
        $("#RI").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");

    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    // if($(".tick-container.active").length < 1){
    //     $("#blackbackground").removeClass("active");
    //     $(".TimeLine-line").removeClass("active");
    //     $("#closeAll").css("opacity","0");
    //     $(".navigation").css("opacity","0");
    // }else{
    //     $("#blackbackground").addClass("active");
    //     $(".TimeLine-line").addClass("active");
    //     $("#closeAll").css("opacity","1");
    //     $(".navigation").css("opacity","1");
    // }
    
    updateWidth();
})


// $(".NaviWord").click(function(){



//     // if($(".NaviWord.active").length < 0){
//     //     $("#blackbackground").removeClass("active");
//     //     $(".TimeLine-line").removeClass("active");
//     //     $("#closeAll").css("opacity","0");
//     //     $(".navigation").css("opacity","0");
//     //     $(".upIndicate").css("opacity","0");
//     // }


//     if ($(".tick-container.active").length === 0) {
//         $(".TimeLine-line").removeClass("active");
//         $("#blackbackground").removeClass("active");
//         $("#closeAll").css("opacity", "0");
//         $(".navigation").css("opacity", "0"); 
//     }

//     updateWidth();

// })

$("#Reason_time_and_place_it_born").click(function(){
    $(this).toggleClass("active");

    if($("#Reason_time_and_place_it_born").hasClass("active")){
        $("#R").addClass("active");
    }else{
        $("#R").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    // if($(".tick-container.active").length < 1){
    //     $("#blackbackground").removeClass("active");
    //     $(".TimeLine-line").removeClass("active");
    //     $("#closeAll").css("opacity","0");
    //     $(".navigation").css("opacity","0");
    // }else{
    //     $("#blackbackground").addClass("active");
    //     $(".TimeLine-line").addClass("active");
    //     $("#closeAll").css("opacity","1");
    //     $(".navigation").css("opacity","1");
    // }
    
    updateWidth();
})

$("#Societal_and_cultural_background").click(function(){
    $(this).toggleClass("active");

    if($("#Societal_and_cultural_background").hasClass("active")){
        $("#S").addClass("active");
    }else{
        $("#S").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    // if($(".tick-container.active").length < 1){
    //     $("#blackbackground").removeClass("active");
    //     $(".TimeLine-line").removeClass("active");
    //     $("#closeAll").css("opacity","0");
    //     $(".navigation").css("opacity","0");
    // }else{
    //     $("#blackbackground").addClass("active");
    //     $(".TimeLine-line").addClass("active");
    //     $("#closeAll").css("opacity","1");
    //     $(".navigation").css("opacity","1");
    // }
    
    updateWidth();
})

$("#Important_Figure").click(function(){
    $(this).toggleClass("active");

    if($("#Important_Figure").hasClass("active")){
        $("#I").addClass("active");
    }else{
        $("#I").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    // if($(".tick-container.active").length < 1){
    //     $("#blackbackground").removeClass("active");
    //     $(".TimeLine-line").removeClass("active");
    //     $("#closeAll").css("opacity","0");
    //     $(".navigation").css("opacity","0");
    // }else{
    //     $("#blackbackground").addClass("active");
    //     $(".TimeLine-line").addClass("active");
    //     $("#closeAll").css("opacity","1");
    //     $(".navigation").css("opacity","1");
    // }
    
    updateWidth();
})

$("#Language_Structure").click(function(){
    $(this).toggleClass("active");

    if($("#Language_Structure").hasClass("active")){
        $("#LI").addClass("active");
    }else{
        $("#LI").removeClass("active");
    }
    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    updateWidth();
})

$("#Writing_system").click(function(){
    $(this).toggleClass("active");

    if($("#Writing_system").hasClass("active")){
        $("#W").addClass("active");
    }else{
        $("#W").removeClass("active");
    }
    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    updateWidth();
})

$("#Comparison").click(function(){
    $(this).toggleClass("active");

    if($("#Comparison").hasClass("active")){
        $("#Co").addClass("active");
    }else{
        $("#Co").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    updateWidth();
})

$("#Calligraphy_Traditions_and_Techniques").click(function(){
    $(this).toggleClass("active");

    if($("#Calligraphy_Traditions_and_Techniques").hasClass("active")){
        $("#CaI").addClass("active");
    }else{
        $("#CaI").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    updateWidth();
})

$("#Calligraphy").click(function(){
    $(this).toggleClass("active");

    if($("#Calligraphy").hasClass("active")){
        $("#Ca").addClass("active");
    }else{
        $("#Ca").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    updateWidth();
})

$("#Art_Expression").click(function(){
    $(this).toggleClass("active");

    if($("#Art_Expression").hasClass("active")){
        $("#A").addClass("active");
    }else{
        $("#A").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    updateWidth();
})

$("#Other").click(function(){
    $(this).toggleClass("active");

    if($("#Other").hasClass("active")){
        $("#O").addClass("active");
    }else{
        $("#O").removeClass("active");
    }

    if ($(".tick-container.active").length === 0) {
        $(".TimeLine-line").removeClass("active");
        $("#blackbackground").removeClass("active");
        $("#closeAll").css("opacity", "0");
        $(".navigation").css("opacity", "0"); 
        $(".upIndicate").css("opacity","0");
    }

    if($(".tick-container.active").length < 11) {
        $("#openAll").css("opacity","1");
    }else{
        $("#openAll").css("opacity","0");

    }

    updateWidth();
})

// $("#Reason_time_and_place_it_born").click(function() {
//     $("#R").toggleClass("active");

//     // $("#blackbackground").addClass("active");
//     // $(".TimeLine-line").addClass("active");
//     // $("#closeAll").css("opacity","1");
//     // $(".navigation").css("opacity","1");
// });


// $(".tick-container").click(function(){
//     $(this).toggleClass("active");

//     if($("#R").hasClass("active")) {
        
//     }
// })

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


