$(function () {
  // 找到該元素
  $(".lightbox").click(function (e) {
    // 防止點擊時跳轉
    e.preventDefault();
    // 找到父元素的ID
    let parentId = $(this).parent().attr("id");
    $("." + parentId).fadeIn();
    // 停掉body的滾輪
    $("body").css("overflow", "hidden");
  });

  //點擊x關閉
  $(".lightbox_close").click(function () {
    $(this).parent().fadeOut();
    $("body").css("overflow", "visible");
  });
  // 點擊旁邊關閉
  $(".lightbox_content").click(function (e) {
    e.stopPropagation();
  });
  $(".lightbox_overlay").click(function (e) {
    $(this).fadeOut();
    $("body").css("overflow", "visible");
  });
});
