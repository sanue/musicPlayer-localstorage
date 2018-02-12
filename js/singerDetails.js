	$(function(){
        cli();
        getSingerName();
        loadSingerInfo();
        loadSongInfo();

	})
  function cli(){
        $('.messages').click(function(){
      $('.singerDetails').show();
      $('.allsongs').hide();
      $('.personalSongs').hide();
      $('.singerPictures').hide();
      $('.singerSongs').hide();
    })
    $('.songs').click(function(){
      $('.allsongs').show();
      $('.singerDetails').hide();
      $('.personalSongs').hide();
      $('.singerPictures').hide();
      $('.singerSongs').hide();
    })
  }
    function createsongsList(c){
      var li = $('<li></li>');
      $('<div></div>').addClass('name').text(getSingerName()).appendTo(li);
      $('<div></div>').addClass('songName').text(c.name).appendTo(li);
      var music = $('<div></div>').addClass('musicc').appendTo(li);
      $('<span></span>').appendTo(music);
      $('<span></span>').appendTo(music);
      $('<span></span>').appendTo(music);
      $('<span></span>').appendTo(music);
      $('<span></span>').appendTo(music);
      $('<span></span>').appendTo(music);
      var operate = $('<div></div>').addClass('operate').appendTo(li);
      $('<img />').attr({'src':'images/zj.png','width':'25','height':'25'}).appendTo(operate);

       li.click(function(){
               var songName = $(this).children()[1].innerText;
                var myurl = 'musicBox.html'+'?'+ songName;
                          window.close();
                          window.open(encodeURI(myurl));
               })

      return li;
    }
    function loadSongInfo(){
      var singerName = getSingerName();
      var songerList = JSON.parse(localStorage.songss);
      for(var i=0;i<songerList.length;i++){
        if(songerList[i].singer.name==singerName){
           $('.dymaUl').append(createsongsList(songerList[i]));
        }

      }
    }
    function loadSingerInfo(){
    	var singerName = getSingerName();
        $('.singerName').text(singerName);

        var singerList = JSON.parse(localStorage.singerss);
        for(var i = 0;i<singerList.length;i++){
        	if(singerList[i].name == singerName){
        		var currentsingerList = singerList[i];
        		var currentSingerPic = currentsingerList.icon;
        		var currentsingersex = currentsingerList.sex;
        		var currentSingerNick = currentsingerList.nickname;
        		var currentbirth = currentsingerList.birth;
        		var currentre = currentsingerList.region.name;
        		var currentintr = currentsingerList.introduce;
        	} 
        }
       $('.myImg>img').attr('src','icon/'+currentSingerPic);
       $('#one>td').eq(0).text('姓名：'+singerName);    
       $('#one>td').eq(1).text('性别：'+currentsingersex);    
       $('#two>td').eq(0).text('别名：'+currentSingerNick);    
       $('#two>td').eq(1).text('生日：'+currentbirth);    
       $('#three>td').eq(0).text('地区：'+currentre);    
       $('#three>td').eq(1).text('个人简介:'+currentintr);       
    }

	function getSingerName(){
		var url = decodeURI(location.search);
        var singerName = url.substring(1);

        return singerName;
	}