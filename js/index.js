$(function(){
//轮播
var num=0;
		var tim=setInterval(move,1000);
		function move(){
			num++;
			if(num>=$(".bander-img>img").length){
				num=0;
			}
			$(".bander-img>img").hide().eq(num).show();
			$(".bander-btn").css("background","deepskyblue").eq(num).css("background","red");
		}
		$(".bander").hover(function(){
			clearInterval(tim);
		},function(){
			tim=setInterval(move,1000);
		});
		$(".bander-btn").click(function(){
			var index=$(this).index();
			$(".bander-img>img").hide().eq(index).show();
			$(".bander-btn").css("background","deepskyblue").eq(index).css("background","red");
		});	
		
	





});
