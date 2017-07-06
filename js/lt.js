$(".button").click(function() {
  if ($(".texta").val() == "") {
    $("label").text("请填写内容！");
  } else {
    $(".fs>ul").append("<li></li>");
    $(".fs>ul>li").eq(-1).text($(".texta").val());
    $(".texta").val(null);
  }
})
$(".texta").change(function(){
  $("label").text(null);
})
