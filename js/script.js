
$(document).ready(function(){
    $(".right_box>li").each(function(){
        $(this).attr({
            "data-index": i
        });
    }).click(function(){

        var a = $(this).attr("data-index");
        console.log(num);

        
        $(".con_box").animate({
            top: -(100 * num) + "%"
        });

        $(".right_box>li>.color").removeClass("color");
        $(".right_box>li>.color").eq(num).addClass("color");

        $(".right_box>li").removeClass("active");
        $(".right_box>li").eq(num).addClass("active");
    });
});

