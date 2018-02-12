/*********************创建和加载新歌速递歌手推荐***************************/
	//创建新歌速递
	function createNew(c){
		var pics = $('<div></div>').attr('class','pics');
		var zhe = $('<div></div>').attr('class','zhe').appendTo(pics);
		var play = $('<div></div>').attr('class','play').appendTo(pics);
		var imgPlay = $('<img />').attr({'src':'images/play12.png','height':'40','width':'40'}).appendTo(play);

		var songPic = c.picsrc;
		var imgsinger = $('<img />').attr({'src':songPic,'height':'250','width':'250'}).appendTo(pics);
        var thisName = $('<div></div>').addClass('nameTip').text(c.name).appendTo(play);
                pics.click(function(){
                    var songName = $($(this).children()[1]).children()[1].innerText;
                     var myurl = 'musicBox.html'+'?'+ songName;
                               window.close();
                               window.open(encodeURI(myurl));
                })

		return pics;

	}
	//创建歌手推荐
     	function createNewSinger(c){
     		var pics = $('<div></div>').attr('class','pics');
     		var zhe = $('<div></div>').attr('class','zhe').appendTo(pics);
     		var play = $('<div></div>').attr('class','play').appendTo(pics);
     		var imgPlay = $('<img />').attr({'src':'images/play12.png','height':'40','width':'40'}).appendTo(play);

     		var songPic = 'icon/'+ c[0].icon;
     		var imgsinger = $('<img />').attr({'src':songPic,'height':'250','width':'250'}).appendTo(pics);
             var thisName = $('<div></div>').addClass('nameTip').text(c[0].name).appendTo(play);
                     pics.click(function(){
                         var songName = $($(this).children()[1]).children()[1].innerText;
                          var myurl = 'singerDetails.html'+'?'+ songName;
                                    window.close();
                                    window.open(encodeURI(myurl));
                     })

     		return pics;

     	}
    //加载新歌速递
  function loadSongData(){
 	var title = $('<div></div>').attr('class','middleTitle').appendTo('#middle');
 	$('<div></div>').attr('id','titleLeft').text('新歌速递').appendTo(title);
 	$('<div></div>').attr('id','more').text('更多').appendTo(title);     

 	if(undefined === localStorage.NewSongList || JSON.parse(localStorage.NewSongList).length == 0){
            var data = [
			{id:1,name:'夜太黑',duration:310,singer:{id:1,name:'那英'},introduce:'歌曲介绍', res:'yetaihei.mp3',picsrc:'icon/yetaihei.jpg'},
			{id:2,name:'baby',duration:274,singer:{id:2,name:'汪峰'},introduce:'歌曲介绍', res:'baby.mp3',picsrc:'icon/baby.jpg'},
			{id:3,name:'Moment',duration:274,singer:{id:3,name:'张学友'},introduce:'歌曲介绍', res:'Moment.mp3',picsrc:'icon/Moment.jpg'},
			{id:4,name:'平凡之路',duration:310,singer:{id:1,name:'那英'},introduce:'歌曲介绍', res:'pingfanzhilu.mp3',picsrc:'icon/pingfanzhilu.jpg'},
			{id:5,name:'慢慢',duration:274,singer:{id:2,name:'汪峰'},introduce:'歌曲介绍', res:'manman.mp3',picsrc:'icon/manman.jpg'},
			{id:6,name:'十年',duration:274,singer:{id:3,name:'张学友'},introduce:'歌曲介绍', res:'shinian.mp3',picsrc:'icon/shinian.jpg'}
            ];
            localStorage.NewSongList = JSON.stringify(data);
        }
        var songList = JSON.parse(localStorage.NewSongList);
        //  加载并显示
        for(var i = 0 ; i < songList.length ;i++){
            var thisLink = $('<a></a>').attr({'href':'#'}).append(createNew(songList[i]));
            $('#middle').append(thisLink);
        }

  	    $('<hr />').appendTo($('#newsong'));
  	}
  	//加载歌曲推荐
  	 function loadSingerData(){
     	var title = $('<div></div>').attr('class','middleTitle clearFloataf').appendTo('#middle');
     	$('<div></div>').attr('id','titleLeft').text('歌手推荐').appendTo(title);
        var nextpage = $('<div></div>').attr('class','nexttipp').appendTo($('#middle'));
     	$('<div></div>').attr('id','more').text('更多').appendTo(title);

                var data = [];
                var songList = JSON.parse(localStorage.singerss);
                var i = 6;
                while(data.length<i){
                    var temp = Math.random()*songList.length;
                    data.push(songList.splice(temp,1));
                }
                localStorage.NewSingerList = JSON.stringify(data);


            var singerList = JSON.parse(localStorage.NewSingerList);
            //  加载并显示
            for(var i = 0 ; i < singerList.length ;i++){
               var thisLink = $('<a></a>').attr({'href':'singerDetails.html','class':'newone'}).append(createNewSinger(singerList[i]));
               $('#middle').append(thisLink);
            }
            $('<div></div>').attr('id','mylovesinger').text('换我喜欢').appendTo(nextpage);
            var songList = JSON.parse(localStorage.NewSongList);
            nextpage.click(function(){
               for(var i = 0 ; i < songList.length ;i++){
                  $('.newone').remove();
                  $('.nexttipp').remove();
                   $('.middleTitle').remove();
                }
                loadSingerData();
            })

     }
 /*function changePic(){
  	if(undefined === localStorage.NewSongListTwo || JSON.parse(localStorage.NewSongListTwo).length == 0){
            var datatwo = [
			{id:1,name:'张国荣',duration:310,singer:{id:1,name:'那英'},introduce:'歌曲介绍', res:'zhengfu.mp3',picsrc:'icon/zhangguorong.jpg'},
			{id:2,name:'BritneySpears',duration:274,singer:{id:2,name:'汪峰'},introduce:'歌曲介绍', res:'hengxing.mp3',picsrc:'icon/BritneySpears.jpg'},
			{id:3,name:'齐秦',duration:274,singer:{id:3,name:'张学友'},introduce:'歌曲介绍', res:'huitoutainan.mp3',picsrc:'icon/qiqin.jpg'},
			{id:4,name:'吕方',duration:310,singer:{id:1,name:'那英'},introduce:'歌曲介绍', res:'zhengfu.mp3',picsrc:'icon/lvfang.jpg'},
			{id:5,name:'张惠妹',duration:274,singer:{id:2,name:'汪峰'},introduce:'歌曲介绍', res:'hengxing.mp3',picsrc:'icon/zhanghuimei.jpg'},
			{id:6,name:'张宇',duration:274,singer:{id:3,name:'张学友'},introduce:'歌曲介绍', res:'huitoutainan.mp3',picsrc:'icon/zhangyu.jpg'}
            ];
            localStorage.NewSongListTwo = JSON.stringify(datatwo);
        }
        var songListtwo = JSON.parse(localStorage.NewSongListTwo);
        for(var i = 0 ; i < songListtwo.length ;i++){
            var thisLink = $('<a></a>').attr({'href':'#','class':'newone'}).append(createNew(songListtwo[i]));
            $('#middle').append(thisLink);
        }

  }*/
/**********************图片轮播*****遮罩******************************/
function autoChange(){
    $('#visual').pignoseParallaxSlider({
   			play    : '.btn-play',
   			pause   : '.btn-pause',
   			next    : '.btn-next',
   			prev    : '.btn-prev'
   		});
}


	$(window).load(function() {
//动态创建新歌速递
   loadSongData();
//歌手信息加载
   loadSingerData();
//图片轮播
	autoChange();

//遮罩
		$('#navRol').hover(function(){
			$('#navRol').animate({left:'0px'},1000);
		},
	    function(){
			$('#navRol').animate({left:'-160px'},1000);
		}
		);



	});

