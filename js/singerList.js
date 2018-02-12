$(function(){
     loadlist();
     hotload();
})
function loadlist(){
	 if(undefined === localStorage.CategoryList || JSON.parse(localStorage.CategoryList).length == 0){
   var data = [
                    {id:1,name:'巅峰榜·热歌',songlist:[
    {id:1 , name:'默' , singer:{id:1 , name:'那英'} , duration:314 , introduce:'歌曲介绍' , icon:'mo.jpg' , res:'mo.mp3'},
    {id:2 , name:'有个爱你的人不容易' , singer:{id:1 , name:'那英'} , duration:270 , introduce:'歌曲介绍' , icon:'ygandrbry.jpg' , res:'ygandrbry.mp3'},
    {id:3 , name:'怒放的生命' , singer:{id:2 , name:'汪峰'} , duration:263 , introduce:'歌曲介绍' , icon:'nufangdeshengming.jpg' , res:'nufangdeshengming.mp3'},
    {id:4 , name:'像梦一样自由' , singer:{id:2 , name:'汪峰'} , duration:229 , introduce:'歌曲介绍' , icon:'xiangmongyixiang.jpg' , res:'xiangmongyixiang.mp3'},
    {id:5 , name:'慢慢' , singer:{id:3,name:'张学友'} , duration:273 , introduce:'歌曲介绍' , icon:'manman.jpg' , res:'manman.mp3'},
    {id:6 , name:'小城大事' , singer:{id:3,name:'张学友'} , duration:226 , introduce:'歌曲介绍' , icon:'dachengxiaoshi.jpg' , res:'dachengxiaoshi.mp3'},
    {id:7 , name:'一个人' , singer:{id:4,name:'韩红'} , duration:273 , introduce:'歌曲介绍' , icon:'yigeren.jpg' , res:'yigeren.mp3'},
    {id:8 , name:'那片海' , singer:{id:4,name:'韩红'} , duration:259 , introduce:'歌曲介绍' , icon:'napianhai.jpg' , res:'napianhai.mp3'},
    {id:9 , name:'好久不见' , singer:{id:5,name:'陈奕迅'} , duration:250 , introduce:'歌曲介绍' , icon:'haojiubujian.jpg' , res:'haojiubujian.mp3'}
                    ]} ,
                    {id:2,name:'巅峰榜·中国新歌声' , songlist:[
    {id:1 , name:'匆匆那年' , singer:{id:7,name:'王菲'} , duration:234 , introduce:'歌曲介绍' , icon:'cuocuonanian.jpg' , res:'cuocuonanian.mp3'},
    {id:2 , name:'红豆' , singer:{id:7,name:'王菲'} , duration:251 , introduce:'歌曲介绍' , icon:'hongdou.jpg' , res:'hongdou.mp3'},
    {id:3 , name:'What d I Say' , singer:{id:8,name:'雷·查尔斯'} , duration:377 , introduce:'歌曲介绍' , icon:'What d I Say.jpg' , res:'What d I Say.mp3'},
    {id:4 , name:'Sorry Seems to Be the Hardest Word' , singer:{id:8,name:'雷·查尔斯'} , duration:230 , introduce:'歌曲介绍' , icon:'Sorry Seems to Be the Hardest Word.jpg' , res:'Sorry Seems to Be the Hardest Word.mp3'},
    {id:5 , name:'As Long As You Love Me' , singer:{id:9,name:'后街男孩'} , duration:230 , introduce:'歌曲介绍' , icon:'As Long As You Love Me.jpg' , res:'As Long As You Love Me.mp3'},
    {id:6 , name:'Show Me The Meaning Of Being Lonely' , singer:{id:9,name:'后街男孩'} , duration:230 , introduce:'歌曲介绍' , icon:'Show Me The Meaning Of Being Lonely.jpg' , res:'Show Me The Meaning Of Being Lonely.mp3'},
    {id:7 , name:'信仰' , singer:{id:10,name:'张信哲'} , duration:246 , introduce:'歌曲介绍' , icon:'xinyang.jpg' , res:'xinyang.mp3'},
    {id:8 , name:'平凡之路' , singer:{id:10,name:'张信哲'} , duration:251 , introduce:'歌曲介绍' , icon:'pingfanzhilu.jpg' , res:'pingfanzhilu.mp3'}
	                    ]},
                    {id:3,name:'巅峰榜·新歌' , songlist:[
    {id:1 , name:'风月' , singer:{id:12,name:'林俊杰'} , duration:220 , introduce:'歌曲介绍' , icon:'fengyue.jpg' , res:'fengyue.mp3'},
    {id:2 , name:'她说' , singer:{id:12,name:'林俊杰'} , duration:307 , introduce:'歌曲介绍' , icon:'tashuo.jpg' , res:'tashuo.mp3'},
    {id:3 , name:'拯救' , singer:{id:13,name:'孙楠'} , duration:320 , introduce:'歌曲介绍' , icon:'zhengjiu.jpg' , res:'zhengjiu.mp3'},
    {id:4 , name:'风往北吹' , singer:{id:13,name:'孙楠'} , duration:282 , introduce:'歌曲介绍' , icon:'fengwangbeicui.jpg' , res:'fengwangbeicui.mp3'},
    {id:5 , name:'贝加尔湖畔' , singer:{id:14,name:'李健'} , duration:307 , introduce:'歌曲介绍' , icon:'bjrhp.jpg' , res:'bjrhp.mp3'},
    {id:6 , name:'当你老了' , singer:{id:14,name:'李健'} , duration:308 , introduce:'歌曲介绍' , icon:'dangnilaole.jpg' , res:'dangnilaole.mp3'},
    {id:7 , name:'Moment' , singer:{id:15,name:'张国荣'} , duration:233 , introduce:'歌曲介绍' , icon:'Moment.jpg' , res:'Moment.mp3'},
    {id:8 , name:'你该停留的地方' , singer:{id:15,name:'张国荣'} , duration:180 , introduce:'歌曲介绍' , icon:'nigaitingliudedifang.jpg' , res:'nigaitingliudedifang.mp3'},
    {id:9 , name:'从头再来' , singer:{id:17,name:'刘欢'} , duration:233 , introduce:'歌曲介绍' , icon:'congtouzailai.jpg' , res:'congtouzailai.mp3'},
    {id:10 , name:'弯弯的月亮' , singer:{id:17,name:'刘欢'} , duration:180 , introduce:'歌曲介绍' , icon:'wanwanyueliang.jpg' , res:'wanwanyueliang.mp3'}
                    ]},
                    {id:4,name:'巅峰榜·网络热歌' , songlist:[
     {id:1 , name:'七里香' , singer:{id:18,name:'周杰伦'} , duration:288 , introduce:'歌曲介绍' , icon:'qilixiang.jpg' , res:'qilixiang.mp3'},
    {id:2 , name:'青花瓷' , singer:{id:18,name:'周杰伦'} , duration:232 , introduce:'歌曲介绍' , icon:'qinghuaci.jpg' , res:'qinghuaci.mp3'},
    {id:3 , name:'真的爱你' , singer:{id:19,name:'Beyond'} , duration:278 , introduce:'歌曲介绍' , icon:'zhendiaini.jpg' , res:'zhendiaini.mp3'},
    {id:4 , name:'情人' , singer:{id:19,name:'Beyond'} , duration:320 , introduce:'歌曲介绍' , icon:'zhendiaini.jpg' , res:'qingren.mp3'},
    {id:5 , name:'一次就好' , singer:{id:20,name:'杨宗纬'} , duration:266 , introduce:'歌曲介绍' , icon:'yicijiuhao.jpg' , res:'yicijiuhao.mp3'},
    {id:6 , name:'空白格' , singer:{id:20,name:'杨宗纬'} , duration:222 , introduce:'歌曲介绍' , icon:'kongbaige.jpg' , res:'kongbaige.mp3'},
    {id:7 , name:'喜欢你' , singer:{id:21,name:'邓紫棋'} , duration:230 , introduce:'歌曲介绍' , icon:'xihuanni.png' , res:'xihuanni.mp3'},
    {id:8 , name:'后会无期' , singer:{id:21,name:'邓紫棋'} , duration:215 , introduce:'歌曲介绍' , icon:'houhuiwuqi.jpg' , res:'houhuiwuqi.mp3'},
    {id:9 , name:'后来' , singer:{id:22,name:'刘若英'} , duration:326 , introduce:'歌曲介绍' , icon:'houlai.jpg' , res:'houlai.mp3'},
    {id:10 , name:'为爱痴狂' , singer:{id:22,name:'刘若英'} , duration:293 , introduce:'歌曲介绍' , icon:'weiaichikuang.jpg' , res:'weiaichikuang.mp3'},
    {id:11 , name:'女人花' , singer:{id:23,name:'梅艳芳'} , duration:290 , introduce:'歌曲介绍' , icon:'nvrenhua.jpg' , res:'nvrenhua.mp3'},
    {id:12 , name:'亲密爱人' , singer:{id:23,name:'梅艳芳'} , duration:298 , introduce:'歌曲介绍' , icon:'qinmiairen.jpg' , res:'qinmiairen.mp3'},
    {id:13 , name:'我要飞' , singer:{id:24,name:'张惠妹'} , duration:209 , introduce:'歌曲介绍' , icon:'woyaofei.jpg' , res:'woyaofei.mp3'},
    {id:14 , name:'存在' , singer:{id:24,name:'张惠妹'} , duration:127 , introduce:'歌曲介绍' , icon:'cunzai.jpg' , res:'cunzai.mp3'},
    {id:15 , name:'baby' , singer:{id:25,name:'贾斯汀·比伯'} , duration:207 , introduce:'歌曲介绍' , icon:'baby.jpg' , res:'baby.mp3'},
    {id:16 , name:'WhatDoYouMean' , singer:{id:25,name:'贾斯汀·比伯'} , duration:200 , introduce:'歌曲介绍' , icon:'WhatDoYouMean.jpg' , res:'WhatDoYouMean.mp3'}
                    ]}
                ];
                localStorage.CategoryList = JSON.stringify(data);
            }
            var list = JSON.parse( localStorage.CategoryList);
            var a = $('<li></li>').attr({'id':'navRolTitle','style':'font-size:25px'}).appendTo('#navRolLeft>ul');
            $('<a></a>').attr({'href':'#','style':'color:gray'}).text('音乐巅峰榜').appendTo(a);
            for(var i = 0 ; i < list.length ; i++ ){
                var c = list[i];
                // 生成数据项
                //  添加到窗口内
                $('#navRolLeft>ul').append(createCategoryDataItem(c));
            }
      
}
/*创建分类项*/
        function createCategoryDataItem(c){
        	var li = $('<li></li>');
            var link = $('<a href="#"></a>').text(c.name).appendTo(li);
            link.bind('click' , function(e){
                  //  获取当前选中的分类
                var cata =  $(this).text();
                $('#ti').text(cata);
                //  根据当前分类名称，找到分类对象
                var list = JSON.parse(localStorage.CategoryList);
                var currentCategory = null;
                for(var i = 0 ; i < list.length ; i++){
                    if(cata === list[i].name){
                        currentCategory = list[i];
                        break;
                    }
                }

                //  清除现有的歌曲
                $('.dymaUl').html('');


                //  加载当前分类所包含的歌曲信息
                if(null != currentCategory){
                    //  显示歌曲信息
                    //  创建歌曲项
                    for(var i = 0 ; i < currentCategory.songlist.length ;i++) {
                        //  添加到容器里
                        var song = currentCategory.songlist[i];
                        var $songRow = createSongDataRow(song);

                        $('.dymaUl').append($songRow);
                    }
                }

            });
            return li;
        }
  //创建当前类别排行信息
  function createSongDataRow(c){
        var li = $('<li></li>').addClass('cata');
        var songnum = $('<div></div>').attr('id','songnum').appendTo(li);
        $('<div></div>').text(c.id).appendTo(songnum);

        $('<div></div>').addClass('name').text(c.singer.name).appendTo(li);
        $('<div></div>').addClass('songName').text(c.name).appendTo(li);
        var musicl = $('<div></div>').addClass('musicc').appendTo(li);
        $('<span></span>').appendTo(musicl);
        $('<span></span>').appendTo(musicl);
        $('<span></span>').appendTo(musicl);
        $('<span></span>').appendTo(musicl);
        $('<span></span>').appendTo(musicl);
        $('<span></span>').appendTo(musicl);
        var operate = $('<div></div>').addClass('operate').text('click to listen').appendTo(li);
        var ope = $('<img />').attr({'src':'images/play_03.png','width':'20','height':'20'}).appendTo(operate);

        li.click(function(){
             var songName = $(this).children().eq(2).text();
             var myurl = 'musicBox.html'+'?'+ songName;
             window.close();
             window.open(encodeURI(myurl));
        })

        return li;
  }
 function hotload(){
        var list = JSON.parse(localStorage.CategoryList);
    for(var i = 0 ; i < list[0].songlist.length ;i++) {
                        //  添加到容器里
                        var song = list[0].songlist[i];
                        var $songRow = createSongDataRow(song);

                        $('.dymaUl').append($songRow);
                    }
 }

