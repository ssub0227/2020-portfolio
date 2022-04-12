// 상단 광고
function AdvertClose(){         document.getElementById("advert_wrap").style.display="none";
document.getElementsByClassName("quick_wrap")[0].style.top="170px";                       
}

// 퀵메뉴
var quick=0;
function QuickToggle(){
    if(quick==0){
        document.getElementById("quick_area").style.display="block";
        document.getElementById("quick_toggle").src="images/quick_close.png"
        quick=1;
    }else{
        document.getElementById("quick_area").style.display="none";
        document.getElementById("quick_toggle").src="images/quick_open.png"
        quick=0;
    }
}

//헤더 검색
function SearchNone(){
	document.getElementById("header_search_box").style.display="none"
}

function SearchShow(){
	document.header_search_area.header_search_input.value="";
	document.getElementById("header_search_box").style.display="block";
}
function SearchHide(){
	document.header_search_area.header_search_input.value="4명만 모이면 단독여행 OK! 우리끼리 단독여행";
}

// 헤더 검색창 탭메뉴
function SearchTab(tab, content){
    for(var k=0; k<=2; k++){
        document.getElementById("header_search_tab").children[k].classList.remove("active");
    } document.getElementById("header_search_tab").children[tab].classList.add("active");
    
	for(var k=0; k<=2; k++){
		document.getElementById("header_search_content").children[k].style.display="none";
	}
	document.getElementById(content).style.display="block";
}


// 헤더 핫
function HotShow(){
	document.getElementById("header_hot_area").style.display="block";
}

function HotHide(){
	document.getElementById("header_hot_area").style.display="none";
}

var header_hot=new Array();
var header_hot_num=-1;

header_hot[0]="울릉도"
header_hot[1]="제주도"
header_hot[2]="강릉"
header_hot[3]="속초"
header_hot[4]="삼척"

function HeaderHotCount(){
	header_hot_num++;	
	if (header_hot_num==header_hot.length){
		header_hot_num=0;
	}
	document.getElementById("header_hot_rank").innerText=header_hot[header_hot_num];
	
	setTimeout("HeaderHotCount()",1000);
}

HeaderHotCount();

// 나 자기자신을 함수 안에서 1초에 한 번씩 호출(settimeout 하고), 함수는 밖에서 호출되어야 실행되기 때문에 밖에 한 번 불러준다.

// settimeout >한번반복 / setInterval > 여러번반복
//함수는 주로 대문자/ 변수는 주로 소문자/ 소대문자 다 똑같이 하면 오류남

// 헤더 마이 메뉴
function MyPopupShow(){
    document.getElementById("header_my_popup").style.display="block";
}
function MyPopupHide(){
    document.getElementById("header_my_popup").style.display="none";
}


// 헤더 lnb total
var header_toggle=0;

function HeaderTotalShow(){
	if(header_toggle==0){
	document.getElementById("lnb_total_wrap").style.display="block";
	document.getElementById("lnb_toggle").style.border="1px solid #333";
	document.getElementById("lnb_toggle").style.borderBottom="1px solid #fff";
	
	header_toggle=1;
	}else{
	document.getElementById("lnb_total_wrap").style.display="none";
	header_toggle=0;
	document.getElementById("lnb_toggle").style.border="1px solid #ddd";
	document.getElementById("lnb_toggle").style.borderBottom="0";
	}
}

function HeaderTotalHide(){
	document.getElementById("lnb_total_wrap").style.display="none";
	header_toggle=0;
	document.getElementById("lnb_toggle").style.border="1px solid #ddd";
	document.getElementById("lnb_toggle").style.borderBottom="0";
}

// 메인 비주얼 검색 탭
function MainVisualTab(tab){
num=document.getElementById("main_visual_tab_area").getElementsByTagName("section").length-1
    
    for(var k=0; k<=num; k++){         document.getElementById("main_visual_tab").getElementsByTagName("a")[k].classList.remove("active");
    }
     // active 모두 안 보이게
     document.getElementById("main_visual_tab").getElementsByTagName("a")[tab].classList.add("active");
     // active 클릭한 것만 보이게

    for(var k=0; k<=2; k++){ document.getElementById("main_visual_tab_area").getElementsByTagName("section")[k].style.display="none";
    } // section 모두 안 보이게
     document.getElementById("main_visual_tab_area").getElementsByTagName("section")[tab].style.display="block";
    // section 클릭한 것만 보이게
}

// 메인 슬라이드 배너
function MainSlideBanner(slide){
num=document.getElementById("main_slide_tab").getElementsByTagName("a").length-1
    
    for(var k=0; k<=num; k++){ document.getElementById("main_slide_box").getElementsByTagName("section")[k].style.display="none";
     document.getElementById("main_slide_tab").getElementsByTagName("a")[k].classList.remove("active");
    }
     document.getElementById("main_slide_box").getElementsByTagName("section")[slide].style.display="block";
    document.getElementById("main_slide_tab").getElementsByTagName("a")[slide].classList.add("active");
}

// 메인 비주얼 플레이어
var main_visual_num=1;

var main_bg=new Array();
main_bg[0]="a6c2cb";
main_bg[1]="98aead";
main_bg[2]="b6a59e";
main_bg[3]="aaacb7";

function NextVisual(){
    if(main_visual_num==4){
       main_visual_num=0;
    }
    main_visual_num++;
    document.getElementById("main_visual_box").style.backgroundImage="url(images/main_visual_"+main_visual_num+".png)";
    document.getElementById("main_visual_count").innerText=main_visual_num+"/4";
    document.getElementById("main_visual_wrap").style.backgroundColor="#"+main_bg[main_visual_num-1];
        
    clearInterval(TimeId);
    TimeId=setInterval("NextVisual();",1000);
}
var visual_toggle=0;

function PlayerVisual(){
    if(visual_toggle==0){
        clearInterval(TimeId);
        document.getElementById("player_visual").innerHTML="<i class='fas fa-play'></i>";
        visual_toggle=1;
    }else{
        TimeId=setInterval("NextVisual();",1000);
        document.getElementById("player_visual").innerHTML="<i class='fas fa-pause'></i>";
        visual_toggle=0;
    }   
}

var TimeId=setInterval("NextVisual();",1000);

//clearInterval (시간 해제하는 것) > 변수로 setInterval 줘야 함

function PrevVisual(){
    if(main_visual_num==1){
       main_visual_num=5;
    }
    main_visual_num--;
    document.getElementById("main_visual_box").style.backgroundImage="url(images/main_visual_"+main_visual_num+".png)";
    document.getElementById("main_visual_count").innerText=main_visual_num+"/4";
    document.getElementById("main_visual_wrap").style.backgroundColor="#"+main_bg[main_visual_num-1];
    
     clearInterval(TimeId);
    TimeId=setInterval("NextVisual();",1000);
}








// 메인 추천 상품
var main_recommend="";

var main_recommend_img=new Array();
main_recommend_img[0]="recommend_sample_1.jpg";
main_recommend_img[1]="recommend_sample_2.jpg";
main_recommend_img[2]="recommend_sample_3.jpg";
main_recommend_img[3]="recommend_sample_4.jpg";

var main_recommend_text_small=new Array();
main_recommend_text_small[0]="내륙숙박";
main_recommend_text_small[1]="제주숙박";
main_recommend_text_small[2]="내륙여행";
main_recommend_text_small[3]="제주여행";

var main_recommend_text_h4=new Array();
main_recommend_text_h4[0]="[호텔] 국내로 떠나는 여름 썸바캉스!";
main_recommend_text_h4[1]="[제주숙박] 일출랜드 입장권 증정";
main_recommend_text_h4[2]="[내륙] 벤타고 우리끼리 여행 2일/3일";
main_recommend_text_h4[3]="[제주] 신라호텔 자유여행 3일";

var main_recommend_text_big=new Array();
main_recommend_text_big[0]="45,662";
main_recommend_text_big[1]="35,538";
main_recommend_text_big[2]="324,000";
main_recommend_text_big[3]="323,000";

for (var k=0; k<=main_recommend_img.length-1; k++){
	main_recommend+="<li>";
	main_recommend+="	<a href=''>";
	main_recommend+="		<div style='background-image:url(images/"+main_recommend_img[k]+");' alt='추천 여행지' class='main_recommend_img'>";
	main_recommend+="		</div>";
	main_recommend+="		<div class='main_recommend_text'>";
	main_recommend+="			<small>"+main_recommend_text_small[k]+"</small>";
	main_recommend+="			<h4>"+main_recommend_text_h4[k]+"</h4>";
	main_recommend+="			<big>"+main_recommend_text_big[k]+"</big><span>원~</span>";
	main_recommend+="		</div>";
	main_recommend+="	</a>";
	main_recommend+="</li>";
}

document.getElementById("main_recommend_list").innerHTML=main_recommend;


// 메인 여행 계획 여행
var main_plan="";

var main_plan_img=new Array();
main_plan_img[0]="plan_sample_1.jpg";
main_plan_img[1]="plan_sample_2.jpg";
main_plan_img[2]="plan_sample_3.jpg";

var main_plan_text_small=new Array();
main_plan_text_small[0]="제주숙박"
main_plan_text_small[1]="제주여행"
main_plan_text_small[2]="내륙여행"

var main_plan_text_h4=new Array();
main_plan_text_h4[0]="[숙박] 히든클리프호텔&네이쳐"
main_plan_text_h4[1]="[제주] 에어카텔 3일"
main_plan_text_h4[2]="[내륙] 아름다운 섬 여행"

var main_plan_text_p=new Array();
main_plan_text_p[0]="47m 인피니트 사계절 온수풀"
main_plan_text_p[1]="아시아나/서귀포칼호텔/바다전망 업그레이드"
main_plan_text_p[2]="흥도, 흑산도, 백령도, 울릉도"

var main_plan_text_big=new Array();
main_plan_text_big[0]="363,000"
main_plan_text_big[1]="179,000"
main_plan_text_big[2]="99,000"

// 따옴표 바꿀 때 \" 해서 이스케이프 문자 사용해도 된다

for (var k=0; k<=main_plan_img.length-1; k++){
	main_plan+="<li>";
	main_plan+="	<a href='#'>";
	main_plan+="		<div class='main_plan_img' style='background-image:url(images/"+main_plan_img[k]+");'></div>";
	main_plan+="		<div class='main_plan_text'>";
	main_plan+="			<small>"+main_plan_text_small[k]+"</small>";
	main_plan+="			<h4>"+main_plan_text_h4[k]+"</h4>";
	main_plan+="			<p>"+main_plan_text_p[k]+"</p>";
	main_plan+="			<big>"+main_plan_text_big[k]+"</big><span>원~</span>";
	main_plan+="		</div>";
	main_plan+="	</a>";
	main_plan+="</li>";
}

document.getElementById("main_plan_list").innerHTML=main_plan;

// 메인 HOT 영역
var main_hot="";

var main_hot_img=new Array();
main_hot_img[0]="hot_smaple_1.jpg";
main_hot_img[1]="hot_smaple_2.jpg";
main_hot_img[2]="hot_smaple_3.jpg";
main_hot_img[3]="hot_smaple_4.jpg";
main_hot_img[4]="hot_smaple_5.jpg";

var main_hot_h4=new Array();
main_hot_h4[0]="괌";
main_hot_h4[1]="강원";
main_hot_h4[2]="제주";
main_hot_h4[3]="울릉도/독도";
main_hot_h4[4]="호주";

var main_hot_p=new Array();
main_hot_p[0]="괌 PIC골드로 떠나는<br>온 가족 특급휴양!";
main_hot_p[1]="청량함으로 승부한다!<br> 동해바다 즐기기 딱 좋은 때";
main_hot_p[2]="지금 즐기는 휴식<br> 제주스러운 오늘을 만나요!";
main_hot_p[3]="청정지역 울릉도<br>자유여행부터 패키지까지";
main_hot_p[4]="도시와 자연이<br>공존하는 이국적 여행지";

for (var k=0; k<=main_hot_img.length-1; k++){
	if(k==2){
		main_hot+="<li class='main_hot_recommend'>";
		main_hot+="		<a href='#'>";
		main_hot+="			<div style='background-image:url(images/"+main_hot_img[k]+");' alt='HOT' class='main_hot_img'><span class='main_hot_label'>추천</span></div>";
	}else{
	    main_hot+="<li>";
		main_hot+="		<a href='#'>";
		main_hot+="			<div style='background-image:url(images/"+main_hot_img[k]+");' alt='HOT' class='main_hot_img'></div>";
    }
	main_hot+="			<h4>"+main_hot_h4[k]+"</h4>";
	main_hot+="			<p>"+main_hot_p[k]+"</p>";
	main_hot+="		</a>";
	main_hot+="</li>";
}

document.getElementById("main_hot_list").innerHTML=main_hot;







// 푸터 공지사항
var footer_notice=new Array();

footer_notice[0]="오늘은 2020년 7월 3일 금요일 입니다."
footer_notice[1]="현재 날씨 '맑음'입니다."
footer_notice[2]="현재 시각은 오후 1시 입니다."

var footer_num=0;
function FooterNotice(){
   if(footer_num==3){
    footer_num=0;
    } document.getElementById("footer_top_notice").innerText=footer_notice[footer_num];
    footer_num++;    
    
    setTimeout("FooterNotice()",1000)
}
FooterNotice();

















