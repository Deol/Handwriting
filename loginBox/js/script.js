$(document).ready(function(){

    function showBox(val){
        $("."+val).click(function (){
            var mHeight = $(document).height();
            var mWidth = $(document).width();
            $(".masklayer").css({
                "height":mHeight+'px',
                "width":mWidth+'px'
            }).show();/*显示遮障*/

            var dWidth = $(".loginBox").outerWidth();
            var dHeight = $(".loginBox").outerHeight();
            var dLeft = mWidth/2;
            var dTop = mHeight/2;
            $(".loginBox").css({
                "top":dTop,
                "left":dLeft,
                "margin-left":-(dWidth/2),
                "margin-top":-(dHeight/2)
            }).show("fast");/*弹出登陆框*/
        });

        $(window).resize(function(){
            var mHeight = $(this).height();
            var mWidth = $(this).width();
            $(".masklayer").css({
                "height":mHeight+'px',
                "width":mWidth+'px'
            });
            var dWidth = $(".loginBox").outerWidth();
            var dHeight = $(".loginBox").outerHeight();
            var dLeft = mWidth/2;
            var dTop = mHeight/2;
            $(".loginBox").css({
                "top":dTop,
                "left":dLeft,
                "margin-left":-(dWidth/2),
                "margin-top":-(dHeight/2)
            });
        });/*自适应窗口*/

        $(".loginClose").click(function (){
            $(".masklayer").hide();
            $(".loginBox").hide();
        });/*关闭功能*/

    }

    var num;

    function chosen(num){
        $(".tabLi"+num).click(function(){ 
            $(this).css({
                "background-color":"#ecf0f1",
                "border-bottom":"1px solid #ecf0f1"
            });
            $(".tabLi"+(3-num)).css({
                "background-color":"#edece9",
                "border":"1px solid #b4b4b3"
            });

            $(".loginIcon"+num).css("background-position","0px 0px");
            $(".loginIcon"+(3-num)).css("background-position","0px -20px");

            $(".loginArea"+num).css("display","block");
            $(".loginArea"+(3-num)).css("display","none");
        });
    }/*点击切换功能*/

    showBox("loginBtn");
    
    chosen(1);
    chosen(2);

});