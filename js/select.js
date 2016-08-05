define(['jquery'], function ($) {
    $("#select").on("change", function () {
        var ind = $(this).val();
        $("#ulBox>li").eq(ind).removeClass("hide").siblings().addClass("hide")
    })
    $("#ulBox>li").on("click", function () {
        var index = $(this).index();
        $(this).removeClass("hide").siblings().addClass("hide");
        $("#select")[0].selectedIndex = index;
    })
})