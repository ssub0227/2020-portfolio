$(function () { ////////////////// JQB ////////////
    console.log("로딩완료");

    // 햄버거 메뉴 on 넣기
    $(".menu_btn").click(function () {
        $("#menu_wrap").toggleClass("on");
        if (menuSts)
            $("#header").toggleClass("on");
    }); ////////// click /////////////
    

    // 로케이션 설정

        // 로고
        $(".logo").click(function(){
            location.href="index.html";
        });/////// click /////////
        
        // 메뉴
        $(".nav_list").find("a").first().click(function(){
            location.href="gallery.html";
        });/////// click /////////

         $(".nav_list li:nth-child(2) a, .nav_list li:nth-child(3) a").click(function(){
            location.href="list.html"
        });/////// click /////////

        $(".nav_list").find("a").last().click(function(){
            alert("해당 페이지는 준비중입니다.");
        }); /////// click /////////
    
        // 선글라스 리스트 
        $(".cont_img").click(function(){
            location.href="list.html";
        }); /////// click /////////
        
        // 안경 show
        $(".gls_list a").click(function(){
            location.href="show.html";
        }); /////// click /////////
    
    // 메뉴 li 오버시 배경 바뀌게
    $(".nav_list li").mouseover(function () {
        var i = $(this).index();
        // console.log(i);

        $("#menu_wrap").css({
            background: "url(images/menu" + (i + 1) + ".jpg) no-repeat center/cover"
        })
    }); ////// mouseover //////////
    
    

}); ////////////////// JQB //////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
