/// 메인 페이지 JS - main.js ////

var winH = $(window).height();
var winW = $(window).width();
// 메뉴변경허용 상태값
var menuSts = 0; // (0-불허용,1-허용)
// 슬라이드 갯수 
var snum = 5;

// 모바일
var mob = 0; //0-모바일 아님, 1-모바일
if ($(window).width() <= 500) {
    mob = 1;
} //// if ///////////

$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!" + winW);

    $("#wrap").smoothWheel();

    // 미디어쿼리 변수 설정
    if (winW > 1024) {
        snum = 5;
        console.log(snum);
    } else if (winW > 500 && winW <= 1024) {
        snum = 4;
        console.log(snum);
    } else if (winW <= 500) {
        snum = 2;
        console.log(snum);
    }


    // 아이템 위치 변수
    var itpos = [];
    // 클래스 itpos를 준 요소의 개수만큼 위치를 알아온다!
    var itcnt = $(".itpos").length;
    console.log("위치개수:" + itcnt);
    for (var i = 0; i < itcnt; i++) {
        itpos[i] = $(".itpos").eq(i).offset().top;
    } ////// for문 /////////////////

    console.log("위치순서:" + itpos);
    
    // 위치갭(이전,이후)
    var gap = 150;
    ////// scroll 셋팅 ///////////
    $("#wrap").scroll(function () {
        
        
        var scTop = $(this).scrollTop();
        console.log("스위:" + scTop);

        // 로고 기준선 액션 ///
        if (scTop > itpos[0] - 200) {
            // class넣기
            $("#header").addClass("on");
            menuSts = 1; //허용
        } ///////// if ////////////////////
        else { // 첫번째 영역
            $("#header").removeClass("on");
            menuSts = 0; //불허용
        } ///////// else ////////////////////


        console.log("메뉴허용:" + menuSts);
        if (mob) return true;

        // 1번째 기준선 액션 ///
        if (scTop > itpos[0] - gap * 2 &&
            scTop < itpos[0] + gap * 2) {
            // class넣기
            $("#sun_cont_wrap .title_wrap").addClass("on");
        } ///////// if ////////////////////
        else {
            $("#sun_cont_wrap .title_wrap").removeClass("on");
        } ///////// else ////////////////////

        // 2번째 기준선 액션 ///
        if (scTop > itpos[1] - gap &&
            scTop < itpos[1] + gap) {
            // class넣기
            $(".sun_cont1").addClass("on");
        } ///////// if ////////////////////
        else {
            $(".sun_cont1").removeClass("on");
        } ///////// else ////////////////////


        // 3번째 기준선 액션 ///
        if (scTop > itpos[2] - gap &&
            scTop < itpos[2] + gap) {
            // class넣기
            $(".sun_cont2").addClass("on");
        } ///////// if ////////////////////
        else {
            $(".sun_cont2").removeClass("on");
        } ///////// else ////////////////////

        // 4번째 기준선 액션 ///
        if (scTop > itpos[3] - gap * 2 &&
            scTop < itpos[3] + gap * 2) {
            // class넣기
            $("#gls_cont_wrap .title_wrap").addClass("on");
        } ///////// if ////////////////////
        else {
            $("#gls_cont_wrap .title_wrap").removeClass("on");
        } ///////// else ////////////////////

        // 5번째 기준선 액션 - 스와이퍼로 인한 위치값 이상으로 4번째기준선으로 등장함///
        if (scTop > itpos[3] &&
            scTop < itpos[3]  + gap * 5) {
            // class넣기
            //console.log("if---->"+(itpos[3])+"/"+(itpos[3]  + gap * 5));
            $("#shop_wrap .title_wrap").addClass("on");
        } ///////// if ////////////////////
        else {
            
            //console.log("else---->"+(itpos[3])+"/"+(itpos[3]  + gap * 5));
            $("#shop_wrap .title_wrap").removeClass("on");
        } ///////// else ////////////////////
    }); ///////// scroll //////////////
    /// 셋팅된 위치에서 등장액션 class주기

    // 스와이퍼 설정
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: snum,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // 안경 리스트 배경이미지 넣기 
    for (var i = 1; i < 9; i++) {
        $(".gls_list li:nth-child(" + i + ")").css({
            background: "url(images/0" + i + ".jpg) no-repeat 0/cover"
        }); /////// css ////////////
    } ///////// for //////////////
    
    // 모바일일때 일단 다 on 넣기
    if (mob) {
        $("#sun_cont_wrap .title_wrap").addClass("on");
        $("#gls_cont_wrap .title_wrap").addClass("on");
        $("#shop_wrap .title_wrap").addClass("on");
        $(".ban_btn").text("CLICK HERE !")
    } //////// if //////////////
    
    // ban_btn 클릭시 갤러리로 이동
    $(".ban_btn").click(function(e){
        e.preventDefault();
        location.href="gallery.html";
    }); ///// click ////////////

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
