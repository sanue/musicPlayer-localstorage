var data;
var currentIndex = 0;
var player;

$(window).on('load', function () {

    //检查是否登录了
    if (null != sessionStorage.userName) {
        $('.content').fadeOut();
        $('#myHome').fadeIn();
        //传入用户名
        $('#myname').text(sessionStorage.userName);
        $('#register').children().remove();
         $('#register')
    } else {
        $('.content').fadeIn();
        $('#myHome').fadeOut();
    }

    loadit();
    oparate();
    addMySong();
    loadMyplayer(getSongName());
     data = JSON.parse(localStorage.songs);
    currentIndex = data.length-1;

});
function loadit() {
    //把内容存储
    if (localStorage.songs === undefined || JSON.parse(localStorage.songs).length == 0) {
        var mysongs = [
            {id: 1, name: '伞下', songer: '张宇', duration: 420, source: 'res/sanxia.mp3'},
        ];
        localStorage.No = mysongs.length;

        localStorage.songs = JSON.stringify(mysongs);
    }
    data = JSON.parse(localStorage.songs);
    //chuangjian
    for (var i = 0; i < data.length; i++) {
        var tby = $('tbody');
        tby.append(create(data[i], i + 1));

    }

    /*var mp3 = decodeURI($('#myplayer')[0].contentWindow.document.querySelector('audio').src.split('res/')[1]);*/
    player = $('#myplayer')[0].contentWindow.document.querySelector('audio');
    play();



}

function oparate() {
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
        function (e) {
            var index = $(this).index();
            if (index == 0) {
                $(this).attr('src', 'images/bofang2.png');
            }
            else if (index == 1) {
                $(this).attr('src', 'images/tianjia2.png');
            }
            else if (index == 2) {
                $(this).attr('src', 'images/xzz2.png');
            }
            else if (index == 3) {
                $(this).attr('src', 'images/zhuanfa2.png');
            }
            e.stopPropagation();

        },
        function (e) {
            var index = $(this).index();
            if (index == 0) {
                $(this).attr('src', 'images/bofang.png');
            }
            else if (index == 1) {
                $(this).attr('src', 'images/tianjia.png');
            }
            else if (index == 2) {
                $(this).attr('src', 'images/xzz.png');
            }
            else if (index == 3) {
                $(this).attr('src', 'images/zhuanfa.png');
            }
            e.stopPropagation();
        }
    );



    $('#contentlogin2').bind('click', function () {

        window.open("register.html");


    });


    //播放暂停
    $('#btnn1').bind('click', function () {
        if (player.paused) {
            play();


        }

    });
    $('#btnn2').bind('click', function () {
        player.pause();
        $('.musicc').hide();
    });
    //上一首
    $('#btnn3').bind('click', function () {

        if (currentIndex == 0) {
            currentIndex = data.length - 1;
        } else {
            currentIndex--;
        }
        play();
    });

    //下一首
    $('#btnn4').bind('click', function () {

        if (currentIndex < data.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        play();

    });

    //自动循环播放
    $(player).bind('ended', function () {
        if (currentIndex < data.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        play();
    });

    //移动光标变色
    $('td').bind('mousemove', function () {
        $(this).parent().attr('class', 'bgc');
    });
    $('td').bind('mouseout', function () {
        $(this).parent().removeClass('bgc');

    });

    //添加
    $('#addSong').bind('click', function () {
        $('#fileUp').get(0).click();

    });
    //注销
    $('.zhuxiao').click(function(){
        sessionStorage.removeItem('userName');
        location.reload();

    })
}


//play
function play() {
    player.src = data[currentIndex].source;
    player.play();
     var thisSongName = data[currentIndex].name;
     loadMyplayer(thisSongName);
}
function create(c) {

    var tr = $('<tr></tr>');
    var idTd = $('<td></td>');
    idTd.appendTo(tr);
    var nameTd = $('<td></td>').text(c.name).appendTo(tr);
    var songerTd = $('<td></td>').text(c.songer).appendTo(tr);

    /*音乐条*/
    var musicTd = $('<td></td>').appendTo(tr);

    dd = $('<div></div>').attr({'class': 'musicc'}).appendTo(musicTd);
    $('<span></span>').appendTo(dd);
    $('<span></span>').appendTo(dd);
    $('<span></span>').appendTo(dd);
    $('<span></span>').appendTo(dd);
    $('<span></span>').appendTo(dd);
    $('<span></span>').appendTo(dd);

    var lengthTd = $('<td></td>').text(c.duration).appendTo(tr);
    var doTd = $('<td></td>').attr('class', 'del').appendTo(tr);

    var imag = $('<div></div>').attr({'class': 'imags', 'style': 'display:none'}).appendTo(doTd);
    var img1 = $('<img />').attr({'src': 'images/bofang.png', 'height': '25', 'width': '25'}).appendTo(imag);
    var img2 = $('<img />').attr({
        'src': 'images/tianjia.png',
        'height': '25',
        'width': '25',
        'id': 'addSong'
    }).appendTo(imag);
    var img3 = $('<img />').attr({'src': 'images/xzz.png', 'height': '25', 'width': '25'}).appendTo(imag);
    var img4 = $('<img />').attr({'src': 'images/zhuanfa.png', 'height': '25', 'width': '25'}).appendTo(imag);
    var img5 = $('<img />').attr({'src': 'images/dele.png', 'height': '25', 'width': '25'}).appendTo(imag);
    //删除当前行
    img5.bind('click', function () {
        //删除同时删除数据
        data = JSON.parse(localStorage.songs);
        var index = $(this).parent().index();
        data.splice(index, 1);

        localStorage.songs = JSON.stringify(data);
        tr.remove();
        localStorage.No = parseInt(localStorage.No) - 1;
        getId();

    })
    tr.hover(function () {
        imag.show();
    }, function () {
        imag.hide();
    })
    //点击播放
    img1.bind('click', function () {
        player.src = c.source;
        player.play();
        var songName = $($(this).parent().parent().parent().children()[1]).text();

        currentIndex = $(this).parent().parent().parent().index();
        loadMyplayer(songName);

    })


    return tr;
}
//添加文件显示文件信息
function addFileMessage(sender) {
    var file = sender.files[0];
    //{id:5,name:'平凡之路',songer:'张信哲',length:1234,source:'audio/平凡之路-张信哲.mp3'},

    var id = parseInt(localStorage.No) + 1;
    var fileName = file.name;
    var name = file.name.substring(0, file.name.lastIndexOf('-'));
    var songer = file.name.substring(name.length + 1, file.name.lastIndexOf('.'));
    var length = file.size;
    var c = {id: id, name: '歌曲', songer: '歌手名', duration: '420', source: 'res/' + fileName};
    data.push(c);
    $('tbody').append(create(c, id));
    localStorage.songs = JSON.stringify(data);

    localStorage.No = id;
    currentIndex = localStorage.No - 1;
    play();
}
function getId() {
    var $rows = $('tbody>tr');
    $rows.each(function (index, element) {
        $(element).children().eq(0).text(index + 1);
    })
}
function getSongName() {
    var url = decodeURI(location.search);
    var songName = url.substring(1);

    return songName;
}

function addMySong() {
    var songlist = JSON.parse(localStorage.songss || '[]');

    //  check song is exists from my song list
    var index = -1;
    data = JSON.parse(localStorage.songs);
    var songName = getSongName();
    for (var i = 0; i < data.length; i++) {
        if (data[i].name === songName) {
            index = i;
            break;
        }
    }

    //  if not exists , append to my song list end

    if (index === -1) {
        // get song's info from global song list
        var currentSong = null;
        for (var j = 0; j < songlist.length; j++) {
            if (songlist[j].name === songName) {
                currentSong = songlist[j];
                break;
            }
        }
        if (null != currentSong) {
            /*data.push(currentSong);*/
            localStorage.songs = JSON.stringify(data);
            for (var i = 0; i < songlist.length; i++) {
                if (songlist[i].name == getSongName()) {
                    currentsonglist = songlist[i];
                    var c = {
                        name: currentsonglist.name,
                        songer: currentsonglist.singer.name,
                        duration: currentsonglist.duration,
                        source: 'res/' + currentsonglist.res
                    };
                    data.push(c);
                    localStorage.songs = JSON.stringify(data);
                    $('tbody').append(create(c));
                  //  currentIndex = data.length - 1;
                    play();


                }
            }
        }
    }
}
function loadMyplayer(songName){
    var songlist = JSON.parse(localStorage.songss || '[]');
    for(var i=0;i<songlist.length;i++){
        if(songName == songlist[i].name){
            var currentsonglist = songlist[i];
            $('#myplayer')[0].contentWindow.document.querySelector('audio').src = 'res/' + currentsonglist.res;
            $('#myplayer')[0].contentWindow.document.querySelector('.cover>img').src ='icon/' + currentsonglist.icon;
            $($('#myplayer')[0].contentWindow.document.querySelector('.album')).text(currentsonglist.res);
            $($('#myplayer')[0].contentWindow.document.querySelector('strong')).text(currentsonglist.name);
            $($('#myplayer')[0].contentWindow.document.querySelector('.artist')).text(currentsonglist.singer.name);

            break;
        }
    }




}



