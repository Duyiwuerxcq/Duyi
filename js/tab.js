define(['jquery'], function ($) {
    $("#tabs").on("click", 'li', function () {
        var index = $(this).index();
        $("#tabBox>div").eq(index).show().siblings().hide()
    })
})