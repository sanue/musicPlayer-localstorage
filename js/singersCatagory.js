//为空
function kong(){
    if($('#aa').html().length==6||$('#aa').html().length==38){
   $('#aaa').remove();
    var a = $('<div></div>').attr('id','aaa').text('没有找到符合条件的歌手。').appendTo($('#aa'));
  }else{
    $('#aaa').remove();
  }
}
//按照拼音找歌手
function pin(){
   var singerInfoList = JSON.parse(localStorage.singersInfo);
        $('.searchSinger>ul>li').click(function(){
          var li = $('li');
          $('#aa>li').remove();
          localStorage.singersInfo == undefined;
             var zimu = $(this).text();

               for(var i = 0 ; i < singerInfoList.length ;i++){
                  var thisList = singerInfoList[i].songlist;
                   for(var j = 0;  j < thisList.length;j++){
                       var szm = thisList[j].pinyin.substring(0,1);
                       if(szm == zimu){
                      $('#aa').append(createSingersInfo(thisList[j]));

                                 };     
                   }
                 
                    }
        kong(); 
      });

}
//创建歌手地区分类标题
function createSingersRegion(c){
     var li = $('<li></li>');
     $('<a></a>').attr('href','#').text(c.name).appendTo(li);
     li.click(function(){
          var text = $(this).children().text();
          var list = JSON.parse(localStorage.singersInfo);
          var currentCategory = null;

           for(var i = 0 ; i < list.length ; i++){
                    if(text === list[i].name){
                        currentCategory = list[i];
                        break;
                    }
                }
                //  清除现有的歌曲
                $('#aa').html('');

                //  加载当前分类所包含的歌曲信息
                if(null != currentCategory){
                    //  显示歌曲信息
                    //  创建歌曲项
                    for(var i = 0 ; i < currentCategory.songlist.length ;i++) {
                        //  添加到容器里
                        var song = currentCategory.songlist[i];
                        var $songRow = createSingersInfo(song);

                        $('#aa').append($songRow);
                    }
                }kong();
     });
     return li;
}
//创建歌手单
function createSingersInfo(c){
   var container = $('<li></li>');
   var singerNames = $('<div></div>').attr('id','singerNames').text(c.singer.singername).appendTo(container);
   var shape = $('<div></div>').addClass('shape').appendTo(container);
   $('<a></a>').addClass('overlay').addClass('pentagon').attr('href','#').appendTo(shape);
   
   var details = $('<div></div>').addClass('details').appendTo(shape);
   $('<span></span>').addClass('heading').text(c.singer.singername).appendTo(details);
   $('<hr />').appendTo(details);
   $('<p></p>').text(c.name).appendTo(details);
   var Listenbtn = $('<a></a>').attr({'href':'#','id':'Listenbtn'}).addClass('button').text('Listen').appendTo(details);
   //传值
   Listenbtn.click(function(){
       var singerName = $(this).parent().children().first().text();
   	   var myurl = 'singerDetails.html'+'?'+ singerName;
       window.close();
       window.open(encodeURI(myurl));
   })

   var bg = $('<div></div>').addClass('bg').appendTo(shape);
   var base = $('<div></div>').addClass('base').appendTo(shape);
   $('<img />').attr({'src':'icon/'+c.icon,'height':'200','width':'200'}).appendTo(base);
   
   return container;
}

function loadInfo(){
     if(undefined === localStorage.singersInfo || JSON.parse(localStorage.singersInfo).length == 0){
       var singers = [
         {id:1,name:'华语男歌手',songlist:[
                        {id:1,name:'从头再来',pinyin:'LH',singer:{id:1,singername:'刘欢'},icon:'liuhuan.jpg'},
                        {id:2,name:'怒放的生命',pinyin:'WF',singer:{id:1,singername:'汪峰'},icon:'wangfeng.jpg'},
                        {id:3,name:'一无所有',pinyin:'PS',singer:{id:1,singername:'崔健'},icon:'pushu.jpg'},
                        {id:4,name:'风往北吹',pinyin:'SN',singer:{id:1,singername:'孙楠'},icon:'sunnan.jpg'},
                        {id:5,name:'贝加尔湖畔',pinyin:'LJ',singer:{id:1,singername:'李健'},icon:'lijian.jpg'},
                    ]} ,
         {id:2,name:'华语女歌手' , songlist:[
                        {id:1,name:'默',pinyin:'NY',singer:{id:1,singername:'那英'},icon:'naying.jpg'},
                        {id:2,name:'那片海',pinyin:'HH',singer:{id:1,singername:'韩红'},icon:'hanhong.jpg'},
                    ]},
         {id:3,name:'港台歌手' , songlist:[
                        {id:1,name:'慢慢',pinyin:'ZXY',singer:{id:1,singername:'张学友'},icon:'zhangxueyou.jpg'},
                        {id:2,name:'十年',pinyin:'CYX',singer:{id:1,singername:'陈奕迅'},icon:'chenyixun.jpg'},
                        {id:3,name:'匆匆那年',pinyin:'WF',singer:{id:1,singername:'王菲'},icon:'wangfei.jpg'},
                        {id:4,name:'信仰',pinyin:'ZXZ',singer:{id:1,singername:'张信哲'},icon:'zhangxinzhe.jpg'},
                        {id:5,name:'富士山下',pinyin:'LKQ',singer:{id:1,singername:'李克勤'},icon:'likeqin.jpg'},
                        {id:6,name:'风月',pinyin:'LJJ',singer:{id:1,singername:'林俊杰'},icon:'linjunjie.jpg'},
                        {id:7,name:'Moment',pinyin:'ZGR',singer:{id:1,singername:'张国荣'},icon:'zhangguorong.jpg'},
                        {id:8,name:'七里香',pinyin:'ZJL',singer:{id:1,singername:'周杰伦'},icon:'zhoujielun.jpg'},
                        {id:9,name:'情人',pinyin:'BY',singer:{id:1,singername:'Beyond'},icon:'beyond.jpg'},
                        {id:10,name:'一次就好',pinyin:'YZW',singer:{id:1,singername:'杨宗纬'},icon:'yangzhongwei.jpg'},
                        {id:11,name:'喜欢你',pinyin:'DZQ',singer:{id:1,singername:'邓紫棋'},icon:'dengziqi.jpg'},
                        {id:12,name:'后来',pinyin:'LRY',singer:{id:1,singername:'刘若英'},icon:'liuruoying.jpg'},
                        {id:13,name:'女人花',pinyin:'MYF',singer:{id:1,singername:'梅艳芳'},icon:'meiyanfang.jpg'},
                        {id:14,name:'给你们',pinyin:'ZY',singer:{id:1,singername:'张宇'},icon:'zhangyu.jpg'},
                        {id:15,name:'夜太黑',pinyin:'ZYS',singer:{id:1,singername:'张雨生'},icon:'zhangyusheng.jpg'},
                        {id:16,name:'五月胡雪',pinyin:'YMH',singer:{id:1,singername:'游鸿明'},icon:'youhongming.jpg'},
                        {id:17,name:'伤痕',pinyin:'LYL',singer:{id:1,singername:'林忆莲'},icon:'liyilian.jpg'},
                    ]},
         {id:4,name:'欧美歌手' , songlist:[
                        {id:1,name:'What d I Say',pinyin:'L',singer:{id:1,singername:'雷·查尔斯'},icon:'raycharlce.jpg'},
                        {id:2,name:'歌曲BB',pinyin:'HJNH',singer:{id:1,singername:'后街男孩'},icon:'backstreet.jpg'},
                        {id:3,name:'歌曲BC',pinyin:'JST',singer:{id:1,singername:'贾斯汀·比伯'},icon:'justinbieber.jpg'},
                        {id:4,name:'歌曲BC',pinyin:'BLN',singer:{id:1,singername:'布兰妮'},icon:'BritneySpears.jpg'},
                        {id:5,name:'歌曲BC',pinyin:'ADR',singer:{id:1,singername:'阿黛尔'},icon:'Adele.jpg'},
                        {id:6,name:'歌曲BC',pinyin:'ADR',singer:{id:1,singername:'麦克杰克逊'},icon:'michaeljackson.jpg'},

                    ]}
                                    ];
      
 localStorage.singersInfo = JSON.stringify(singers);
        }

        var singerInfoList = JSON.parse(localStorage.singersInfo);
         //  加载并显示
        for(var i = 0 ; i < singerInfoList.length ;i++){
            //  构造显示单元
            var c = singerInfoList[i];     
            $('#navRolLeft>ul').append(createSingersRegion(c));
            for(var j = 0;j<c.songlist.length;j++){
                  $('#aa').append(createSingersInfo(c.songlist[j]));

            }
        }   
}




$(function(){

loadInfo();

pin();

})