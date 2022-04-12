// 상세페이지 

// 모바일 구분
var mob = 0; //0-데스크탑, 1-모바일
$(function () { ////////////////// JQB ////////////
    console.log("로딩완료");

    // 모바일?
    if ($(window).width() <= 500) mob = 1
    console.log("현재 상태" + mob);

    menuSts = 1; // (0-불허용,1-허용)
     //$("#wrap").smoothWheel();

    // 왼쪽 이미지 넣기

    if (mob === 0) { // 모바일아니면
        for (var i = 1; i < 6; i++) {
            $(".show_list").append("<li><img src='images/show/hendrix_mandarincrystal_dt_0" + i + ".jpg'></li>")
        } ////////// for /////////////////

        // 위치갭(이전,이후)
        var gap = 400;

        ////// scroll 셋팅 ///////////
        $(window).scroll(function () {
            var scTop = $(this).scrollTop();
            console.log("스위:" + scTop);

            // 왼쪽 높이 구하기
            var lpos = $(".show_list").height();
            console.log(lpos);

            // 로고 기준선 액션 ///
            if (scTop > lpos - gap * 2) {
                //console.log("하이하이" + $("#show_right").offset().top);
                $("#show_right").css({
                    position: "absolute",
                    top: $("#show_right").offset().top + "px"
                }); //////// css ////////////
            } /////// if ///////////
            else {
                $("#show_right").attr("style", ""); //////// css ////////////
            }
        }); /////////// 스크롤 ////////////

    } ////// if ///////////////
    else { // 모바일이면
        $("#show_left").addClass("swiper-container").append("<div class='swiper-pagination'></div>");
        $(".show_list").addClass("swiper-wrapper");
        for (var i = 1; i < 6; i++) {
            $(".show_list").append("<li class='swiper-slide'><img src='images/show/hendrix_mandarincrystal_dt_0" + i + ".jpg'></li>")
        } ////////// for /////////////////  
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });

    } /////// else //////////////////

    // 상세 정보 클릭시
    $(".show_info div").hide();
    $(".show_info li").click(function () {
        $(this).find("div").slideToggle();
        $(this).css({
            height: "auto"
        }); /////// css ////////
        $(this).toggleClass("on");
    }); //////////// click /////////////////////

    // 하트 토글
    $(".heart").click(function () {
        $(this).toggleClass("on");
    }); ///// click //////////   

    // a태그 튕김
    $("#show_right a").click(function(e){
        e.preventDefault();
    }); ///////// click ////////

}); ////////////////////////////////////////////
///////////////////JQB  ////////////////////////
///////////////////////////////////////////////
