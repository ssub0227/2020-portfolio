/// 메인 페이지 JS - main.js ////

var hel = Array('h', 'e', 'l', 'v', 'e', 't', 'c', 'a');

// 모바일인가 ?
var mob = 0; //0-모바일 아님, 1-모바일, 2- 태블릿
if ($(window).width() <= 500) {
    mob = 1;
} //// if ///////////
else if ($(window).width() <= 1024 && ($(window).width() > 500)) {
    mob = 2;
} ////////// else if ///////////////

$(function (e) { /////// jQB ///////////////////////
    console.log(mob);

    // 사이드 메뉴
    $(".menu").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("on");
        $("header").toggleClass("on");
        $(".gnb_list").toggleClass("on");
    })

    // 원 날리기~
    var numberOfDivs = 80;
    // add x number of divs to page.
    for (var i = 0; i < numberOfDivs; i++) {
        var g = Math.floor(Math.random() * 5);
        var c = Math.floor(Math.random() * 5);
        //Create div with class c0/c3 (color) and g0/g4 (size)
        var p = $('<div/>').addClass('c' + c).addClass('g' + g).addClass('parti');
        //Add object to body
        $('#main').append(p);
    } //////// for /////////////
    $(".parti").movingBubble({
        addCss: false
    });

    // 전화번호 복사
    $(".phone").click(function () {
        copyToClipboard('010-4073-0227');
        alert('전화번호가 복사되었습니다!');
    });


    // 슬라이드 효과 시작
    var itpos = [];
    var itcnt = $(".itpos").length;
    //console.log(itcnt);
    for (var i = 0; i < itcnt; i++) {
        itpos[i] = $(".itpos").eq(i).offset().top;
    } ////// for문 /////////////////
    //console.log("위치순서:" + itpos);

    // 위치 갭
    var gap = 150;
    $(".wrap").scroll(function () {
        var scTop = $(this).scrollTop();
        //console.log(scTop);
        if (!mob) { // 모바일아니면
            // cont1 위치 
            if (scTop >= itpos[0] - gap * 2) {
                $("#cont1 p").addClass("on");
                $(".skill_box").addClass("on");
            } /////// if ///////////

            // 블루엘리펀트 위치 
            if (scTop >= itpos[1] - gap * 2) {
                $(".prjt").eq(0).find("h4").addClass("on");
            } ///// if ////////////

            // 블루 사진 위치 
            if (scTop >= itpos[2] - gap * 2) {
                $(".prj_list").eq(0).addClass("on");
            } ///// if ////////////

            // 샤롯데 위치 
            if (scTop >= itpos[3] - gap * 2) {
                $(".prjt").eq(1).find("h4").addClass("on");
            } ///// if ////////////

            // 블루 사진 위치 
            if (scTop >= itpos[4] - gap * 2) {
                $(".prj_list").eq(1).addClass("on");
            }

            // 클론 위치 
            if (scTop >= itpos[5] - gap * 2) {
                $(".prjt").eq(2).find("h4").addClass("on");
                 $(".prj_list").eq(2).addClass("on");
            } ///// if ////////////
        } else { // 모바일이면
            // cont1 위치 
            if (scTop >= itpos[0] - gap * 3) {
                $("#cont1 p").addClass("on");
                $(".skill_box").addClass("on");
            } /////// if ///////////

            // 블루엘리펀트 위치 
            if (scTop >= itpos[1] - gap * 3) {
                $(".prjt").eq(0).find("h4").addClass("on");
            } ///// if ////////////

            // 블루 사진 위치 
            if (scTop >= itpos[2] - gap * 3) {
                $(".prj_list").eq(0).addClass("on");
            } ///// if ////////////

            // 샤롯데 위치 
            if (scTop >= itpos[3] - gap * 3) {
                $(".prjt").eq(1).find("h4").addClass("on");
            } ///// if ////////////

            // 블루 사진 위치 
            if (scTop >= itpos[4] - gap * 3) {
                $(".prj_list").eq(1).addClass("on");
            }

            // 클론 위치 
            if (scTop >= itpos[5] - gap * 3) {
                $(".prjt").eq(2).find("h4").addClass("on");
            } ///// if ////////////

            // 클론 사진 위치 
            if (scTop >= itpos[6] - gap * 3) {
                $(".prj_list").eq(2).addClass("on");
            } ///// if ////////////
        }
    }); //////// scroll ////////

    // 스킬박스 더보기
    $(".cert").click(function () {
        $(".certificate").toggleClass("on");
        $(".certificate li:nth-child(n+6)").slideToggle();
    }); //////// click ////////////

    var cert = ["웹디자인기능사",
                "컴퓨터그래픽스운용기능사",
                "GTQ(그래픽기술자격) 1급",
                "컴퓨터활용능력 2급",
                "워드프로세서",
                "정보기술자격(ITQ) A등급 - 아래한글",
                "정보기술자격(ITQ) A등급 - 한글파워포인트",
                "정보기술자격(ITQ) A등급 - 한글엑세스",
                "전산회계 2급",
                "전산회계 운용사 3급",
                "ERP 회계정보관리사 2급",
                "무역영어 3급",
                "국제무역사 2급",
                "비서 3급",
                "SMAT(서비스경영자격) 3급"
               ];
    var date = ["2020.09.25",
                "2020.10.08",
                "2018.11.16",
                "2016.08.12",
                "2016.12.09",
                "2016.12.01",
                "2017.03.16",
                "2018.11.01",
                "2017.04.27",
                "2018.04.26",
                "2018.06.12",
                "2018.10.11",
                "2017.09.09",
                "2017.12.13",
                "2017.03.06"
               ];

    // 배열 갯수
    var Anum = cert.length;
    // 포문
    for (i = 0; i < Anum; i++) {
        $(".certificate ul")
            .append("<li>" +
                "<span>" +
                date[i] +
                "</span>" +
                cert[i] +
                "</li>");
    }

    // 메뉴 클릭을 위해 페이지 위치 구하기
    var pgnum = $(".pgpos").length;
    console.log("cont 개수 : " + pgnum);
    var pgpos = [];

    for (i = 0; i < pgnum; i++) {
        pgpos[i] = $(".pgpos").eq(i).offset().top;
        console.log("cont" + i + "위치 : " + pgpos[i]);
    } /////// for //////


    // 광클금지
    var msts = 0; //0-허용, 1 - 비허용

    // 메뉴 클릭시 이동
    $(".gnb_list li").click(function (e) {
        e.preventDefault();
        // 실행중이면 돌아가
        if (msts) return true;
        msts = 1; // 잠금(기존 0값을 변경)
        setTimeout(function () {
            msts = 0;
        }, 800); // 0.8초동안 이동하고 나서는 0이 된다

        var idx = $(this).index();
        // console.log(idx);
        $(".wrap").animate({
            scrollTop: pgpos[idx] + "px"
        }, 800, "easeOutSine"); //// animate /////////////////
    }); ////// click /////////

    // 클론코딩 내용
    var title = [
                    "하나투어",
                    "수학박사",
                    "인디고",
                    "로와맘(Mobile Only)",
                    "수행코디",
                    "마이로컬푸드",
                    "라임잉글리시",
                    "강원삼삼코리아",
                    "알티오라",
                    "트래터"
                ]
    var cont = [
                    "HTMl, CSS, JavaScript",
                    "HTMl, CSS, Media Queries",
                    "HTMl, CSS, Media Queries",
                    "HTMl, CSS",
                    "HTMl, CSS",
                    "HTMl, CSS",
                    "HTMl, CSS",
                    "HTMl, CSS",
                    "HTMl, CSS",
                    "HTMl, CSS"
                ]
    var page = [
                "Main",
                "Main, Sub1",
                "Main",
                "Main, Sub1, Sub2",
                "Intro, Main, Sub1, Sub2",
                "Main, Sub1",
                "Main, Sub1",
                "Main",
                "Main",
                "Main",
                ]

    // 배열 갯수
    var clone = $(".clone li").length;
    console.log(clone);
    // 포문
    for (i = 0; i < clone; i++) {
        $(".clone_box").eq(i)
            .append("<li>" +
                title[i] +
                "</li>" +
                "<li>" +
                cont[i] +
                "</li>" +
                "<li>" +
                page[i] +
                "</li>");
    } /////////////// for ////////////////


    // 모바일 아닐 때- 모바일 일 때가 다른 경우
    if (mob === 0) { // 모바일아니고 pc일때만
        // 전화번호 알림 보이기
        $(".phone img").hover(function () {
            $(".phone_msg").fadeIn(300);
        }, function () { // 알림 사라지기
            $(".phone_msg").fadeOut(300);
        }); ///////// hover ///////

        // 클론코딩 박스 슬라이드 되게하기 위해 일단 닫기
        $(".clone_box").fadeOut();
        // 클론코딩 호버시 나오게 하기
        $(".prj_list.clone li").hover(function () {
            $(this).find(".clone_box").stop().fadeIn();
        }, function () {
            $(this).find(".clone_box").stop().fadeOut();
        }); /////// hover //////////
    } else if (mob === 1) { // 모바일일 때 함수
        // 메뉴 클릭시 디자인 다르게
        $(".menu").click(function () {
            $(".sns_list").toggleClass("on");
        }); //////////// click //////////
    } //////// else /////////////

    // 클릭 걸기
    
    // blue 클릭시
    $(".blue li").eq(0).find("a").click(function(e){
        e.preventDefault();
        location.href="portfolio2/index.html";
    }); ///// click ////////////
    
    $(".blue li").eq(1).find("a").click(function(e){
        e.preventDefault();
        location.href="portfolio2/gallery.html";
    }); ///// click ////////////
    
    $(".blue li").eq(2).find("a").click(function(e){
        e.preventDefault();
        location.href="portfolio2/list.html";
    }); ///// click ////////////
    
    $(".blue li").eq(3).find("a").click(function(e){
        e.preventDefault();
        location.href="portfolio2/show.html";
    }); ///// click ////////////
    
    // lotte 클릭시
    $(".lotte li").eq(0).find("a").click(function(e){
        e.preventDefault();
        location.href="portfolio1/index.html";
    }); ///// click ////////////
    
    // clone 클릭시
    $(".clone>li").eq(0).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/hana/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(1).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/shbs/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(2).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/indigo/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(3).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/lowamom/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(4).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/shcd/intro.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(5).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/mylocalfood/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(6).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/lime/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(7).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/samsam/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(8).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/ator/index.html";
    }); ///// click ////////////
    
    $(".clone>li").eq(9).find("a").click(function(e){
        e.preventDefault();
        location.href="clone/trater/index.html";
    }); ///// click ////////////
    
    
    
    
    
    
}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////

// 전화번호 복사 함수
function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
