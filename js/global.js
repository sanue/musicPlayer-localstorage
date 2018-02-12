$(function () {

    /*点击Logo返回主页*/
    $('#logo').click(function () {
        window.location.href = 'homepage.html';
    });
    $('#navRol').hover(function () {
        $('#navRol').animate({left: '0px'}, 1000);
    },function () {
        $('#navRol').animate({left: '-160px'}, 1000);
    });

    if (null != sessionStorage.userName) {

        //传入用户名
        $('#register>a').remove();
         var userName = $('<div></div>').addClass('userName').appendTo($('#register'));
         var zhuxiao =  $('<div></div>').addClass('zhuxiao').appendTo($('#register')).text('注销');
         $('.userName').text(sessionStorage.userName);
        userName.click(function(){
            window.location.href="musicBox.html";
        });
         zhuxiao.click(function(){
            sessionStorage.removeItem('userName');
           location.reload();

         })
    }
});

function btnLogin_onclick() {
    var dialog = document.querySelector('#dialogContainer');
    dialog.style.display = 'block';
}

