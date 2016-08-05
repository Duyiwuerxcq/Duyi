define(['jquery', 'select'], function ($, select) {
    $("#navBox").click(function () {
        $("#left").css({
            'transform': 'translate3d(0, 0, 0)',
            '-webkit-transition': "all 0.3s"
        })
    })
})