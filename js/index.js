let aboutOffset = $("#about").offset().top;

$(window).scroll(function() {


    let wscroll= $(window).scrollTop();
    if(wscroll>aboutOffset)
    {
        $("nav").addClass("bg-black");
        $("about").fadeIn(500)
        let taha= setInterval(incr,20)
    }
    else
    {
        $("#btnUp").fadeOut(500)
        $("nav").removeClass("bg-black");
        $("#demo").text(0)
    }
})
function incr(){
    let Num = Number($("#demoh").text());
    Num++
    if(Num==501)
    {
        clearInterval(taha);
    }
    $("#demoh").text(Num)
}
$("#about").click(function(){
    $("html,body").animate({scrollTop:"0"}, 1000)
})