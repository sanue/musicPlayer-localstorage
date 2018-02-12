/*用户名和密码*/
var data = [
    {name: 'Abcd', password: '123'},

];
var users = JSON.parse(localStorage.users || '[]');
for (var i = 0; i < users.length; i++) {
    data.push(users[i]);
}
//把登录的用户名传入
function getUser(currentUser) {
    $('#myname').text(currentUser);

}
$(function () {

    //提交表单
    $('form').bind('submit', function (e) {
        if ($('.name').triggerHandler('blur') | $('.pwd').triggerHandler('blur')) {
            sessionStorage.userName = $('#name').val();
            btnClose();

            window.open('musicBox.html');
            window.parent.close();
            //保存输入的用户名
            currentUser = sessionStorage.userName;
            //登录时间
            var time = new Date().toLocaleString();
            //创建Json对象转为字符串
            var users = [];
            //检查当前是否存在登录日志
            if (null != localStorage.usersList) {
                users = JSON.parse(localStorage.usersList);
            }
            var loginArray = {userName: name, loginTime: time};
            users.push(loginArray);
            localStorage.usersList = JSON.stringify(users);
            getUser(currentUser);
            return true;
        }
        return false;
    });
    //建立对话框

    var userName;
    var password;

    $('.jiesuan').bind('click', function () {
        $('.contain').addClass('blockk');
    });
    //focus
    $('.inputt').focus(function () {
        $(this).prev().removeClass('sp').removeClass('sp2').addClass('sp1');
        if ($(this).hasClass('name')) {
            var new_img = $('<img />').attr({'src': 'images/username1.jpg'});
        }
        else {
            var new_img = $('<img />').attr({'src': 'images/pwd1.jpg'});
        }
        $(this).prev().children().replaceWith(new_img);
        //吧文本框边框重新变蓝
        $(this).removeClass('inputt_red').removeClass('inputt_gray').addClass('inputt_blue');

    });
    //blur
    $('.inputt').blur(function () {
//验证是否为空

        if ($(this).val() == "") {
            $(this).prev().removeClass('sp1').removeClass('sp').addClass('sp2');
            //修改图片
            //修改顶部图片
            var new_img_top = $('<img />').attr({
                'src': 'images/warning.jpg',
                'width': '12px',
                'height': '12px',
                'id': 'img'
            });
            $('#img').replaceWith(new_img_top);
            //修改文本框前面的图片
            if ($(this).hasClass('name')) {
                var new_img = $('<img />').attr({'src': 'images/username2.jpg'});
            } else {
                var new_img = $('<img />').attr({'src': 'images/pwd2.jpg'});
            }
            $(this).prev().children().replaceWith(new_img);
            $(this).removeClass('inputt_gray').removeClass('inputt_blue').addClass('inputt_red');
            //修改Class和text
            $('.all').removeClass('tip').addClass('tip_red');
            $('#span_tip').text('请输入账户名和密码');
            return false;
        } else {
            //right时显示的
            $(this).prev().removeClass('sp1').removeClass('sp2').addClass('sp');
            $('#img').replaceWith(new_img_top);
            //修改文本框前面的图片
            if ($(this).hasClass('name')) {
                var new_img = $('<img />').attr({'src': 'images/username.jpg'});
            } else {
                var new_img = $('<img />').attr({'src': 'images/pwd2.jpg'});
            }
            $(this).prev().children().replaceWith(new_img);
            $(this).removeClass('inputt_red').removeClass('inputt_blue').addClass('inputt_gray');
            //right时显示的

        }
        if ($('#pwd').val() == "") {
            //修改顶部图片
            var new_img = $('<img />').attr({'src': 'images/warning.jpg', 'id': 'img'});
            $('#img').replaceWith(new_img);

            $('.all').removeClass('tip').addClass('tip_red');
            $('#span_tip').text('请输入密码');
            return false;
        }
        for (var i = 0; i < data.length; i++) {
            if ($('#name').val() == data[i].name && $('#pwd').val() == data[i].password) {
                //删除顶部图片
                $('#img').remove();
                $('.all').removeClass('tip_red').addClass('tip_green');
                //修改文本框前面的图片
                if ($(this).hasClass('name')) {
                    var new_img = $('<img />').attr({'src': 'images/username.jpg'});
                }
                if ($(this).hasClass('pwd')) {
                    var new_img = $('<img />').attr({'src': 'images/pwd.jpg'});
                }
                $(this).prev().children().replaceWith(new_img);
                $('#span_tip').text('输入正确');
                return true;
            }

        }

        //验证用户名和密码是否一致
        for (var i = 0; i < data.length; i++) {
            if ($('#name').val() != data[i].name && $('#pwd').val() != data[i].password) {
                var new_img = $('<img />').attr({'src': 'images/warning.jpg', 'id': 'img'});
                $('#img').replaceWith(new_img);
                //wrong时显示的
                $(this).prev().removeClass('sp1').removeClass('sp').addClass('sp2');
                $('#img').replaceWith(new_img_top);
                //修改文本框前面的图片
                if ($(this).hasClass('name')) {
                    var new_img = $('<img />').attr({'src': 'images/username2.jpg'});
                } else {
                    var new_img = $('<img />').attr({'src': 'images/pwd2.jpg'});
                }
                $(this).prev().children().replaceWith(new_img);
                $(this).removeClass('inputt_gray').removeClass('inputt_blue').addClass('inputt_red');
                //wrong时显示的

                $('.all').removeClass('tip').removeClass('tip_green').addClass('tip_red');
                $('#span_tip').text('用户名和密码不匹配！');
                return false;
            }

        }


    });


});
function btnClose() {
    var doc = window.parent.document;
    doc.querySelector('#dialogContainer').style.display = 'none';
}