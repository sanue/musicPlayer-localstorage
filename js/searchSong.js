/**
 * Created by Administrator on 2016/9/20.
 */
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');

    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
        // $('.sousuo').text('sousuo').appendTo(container);
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        // clear and hide result container when we press close
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});


    }

}
$(function(){
    $('.search-icon>span').click(function(){
        var index = -1;
        var songName = $('.search-input').val();
        var songsList = JSON.parse(localStorage.songss);
        for(var i=0;i<songsList.length;i++){
            if(songName=="") {
                return;
            }
            if(songName==songsList[i].name){
                index = 0;
            }
        }
        if(index==-1){
            alert("没有你选择的歌手");
        }
        if(index==0){
            var myurl = 'musicBox.html'+'?'+ songName;

            window.open(encodeURI(myurl));
        }


    });
});