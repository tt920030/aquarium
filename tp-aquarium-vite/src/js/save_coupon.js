$(".fishgame_savecoupon_btn").on("click", function() {
    var e;
    sessionStorage.getItem("member_id") ? (e = $(".fishgame_coupon").html(),
    $.ajax({
        type: "POST",
        url: "php/coupon.php",
        data: {
            coupom: e
        },
        success: function(e) {
            alert("已儲存優惠碼")
        },
        error: function() {
            alert("連線失敗")
        }
    })) : $(".fishgame_savecoupon").css("display", "flex")
}),
$(".fishgame_savecoupon_sure_btn").on("click", function() {
    var e = $(".fishgame_coupon").html();
    sessionStorage.setItem("coupon", e),
    location.href = "f_signin.html"
}),
$(".fishgame_savecoupon_cancel_btn").on("click", function() {
    $(this).parent().css("display", "none")
}),
$(".fishgame_back_btn").on("click", function() {
    location.href = "index.html"
})

;