

$(function () {
	//logo
	 $('#logo').click(function(){
		 window.location.href='homepage.html';
		 }); 

	//点击全选按钮全选
    $('#chkall').change(function(){
	$('tbody input[type = checkbox]').prop('checked',$('#chkall').prop('checked'));
                                })


        
 
	//MP3播放			 
            $("#jquery_jplayer_1").jPlayer({
                ready: function (event) {
                    $(this).jPlayer("setMedia", {
                        mp3: "mp3/yangcong.mp3" //mp3的播放地址
                    });
                },
                timeupdate: function (event) {
                    if (event.jPlayer.status.currentTime == 0) {
                        time = "";
                    } else {
                        time = event.jPlayer.status.currentTime;
                    }
                },
                play: function (event) {
                    //点击开始方法调用lrc。start歌词方法 返回时间time
                    $.lrc.start($('#lrc_content').val(), function () {
                        return time;
                    });
                },
                ended: function (event) {
                    $("#lrc_list").removeAttr("style").html("<li>歌曲播放完毕！</li>");
                },
                swfPath: "/js",         //存放jplayer.swf的决定路径
                solution: "html, flash", //支持的页面
                supplied: "mp3",    //支持的音频的格式
                wmode: "window"
            });
        $('.content').fadeIn();
        /*图标显示*/
        $('tbody>tr').hover(
                function () {
                    $(this).children().children().show();
                },
                function () {
                    $(this).children().children().eq(1).hide();
                }
        );

        /*触碰图标变色*/
        $('.imags>img').hover(
            function(e){
                var index = $(this).index();
                if(index == 0){
                    $(this).attr('src' , 'images/bofang2.png');
                }
                else if(index == 1){
                    $(this).attr('src', 'images/tianjia2.png');
                }
                else if(index == 2){
                    $(this).attr('src', 'images/xzz2.png');
                }
                else if(index == 3){
                    $(this).attr('src', 'images/zhuanfa2.png');
                }
                e.stopPropagation();

            }, 
            function(e){
                var index = $(this).index();
                if(index == 0){
                    $(this).attr('src' , 'images/bofang.png');
                }
                else if(index == 1){
                    $(this).attr('src', 'images/tianjia.png');
                }
                else if(index == 2){
                    $(this).attr('src', 'images/xzz.png');
                }
                else if(index == 3){
                    $(this).attr('src', 'images/zhuanfa.png');
                }
                 e.stopPropagation();
            }
        );
        // $('.imags').children().eq(0).hover(function(e){
        //     $(this).attr('src' , 'images/tianjia2.png');
        //     e.stopPropagation();
        // } , function(e){
        //     console.log(this);
        //     e.stopPropagation();
        // });


 });
var os1 = new Optiscroll(document.getElementById('os1'), { maxTrackSize: 20, preventParentScroll: true });
var wr = new Optiscroll(document.getElementById('m-wrapper'), { forceScrollbars: true });

