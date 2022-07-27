$(function(){


  const $top = $('ul.top > li > a');
  const $mnu = $('.mnu>li>a');
  const arrTopVal = [];//각 section의 top값
  const $article = $('article');

    arrTopVal.push($article.eq(0).offset().top);
    arrTopVal.push($article.eq(2).offset().top);
    arrTopVal.push($article.eq(3).offset().top);
  
  $top.on('click' , function(evt){
    evt.preventDefault();
    pageMove([0]);
  
  })




  const pageMove = function(topVal){
    $('html,body').animate({
      scrollTop:topVal
    });    
  };

  $mnu.on('click', function(evt){
    evt.preventDefault();
    const nowIdx = $mnu.index(this);


    pageMove(arrTopVal[nowIdx]);//페이지이동함수 호출
  });

  $(window).on('scroll', function(){
    
    const scrollTop = $(this).scrollTop();
  
    if(scrollTop>=arrTopVal[0]){
      //메뉴활성화표시
      //주의할점 변수 ,CSS , 클레스명을 잘봐야한다 이것때매 별것도아닌걸로
      //엄청 고생했음!
      $mnu.eq(0).parent().addClass('mnu_on').siblings().removeClass('mnu_on')
    }
    if(scrollTop>=arrTopVal[1] - 10){
      //메뉴활성화표시
      $mnu.eq(1).parent().addClass('mnu_on').siblings().removeClass('mnu_on')
    }
    if(scrollTop>=arrTopVal[2] - 10){
      //메뉴활성화표시
      $mnu.eq(2).parent().addClass('mnu_on').siblings().removeClass('mnu_on')
    }
  
  })
  









//  ----- 헤더 lang txt변환 자바스크립트부분-----
//1.일단 원시적인 방법으로 문제는 해결함
//2.Index메쏘드를 이용해서 한번 간결하게 하는걸 시도는 해볼만할거 같음
  const $sub__li = $('.sub_lang>li>a');
  $sub__li.on('click' , function(){
    $(this).parent().addClass('sub__on').siblings().removeClass('sub__on');//활성화표시
    $('.lang__on>a').text();
  })

  $('.sub_lang>li:nth-child(1)').on('click' ,function(evt){
    evt.preventDefault();
    $('.lang__on>a').text('EN');
  })

  $('.sub_lang>li:nth-child(2)').on('click' ,function(evt){
    evt.preventDefault();
    $('.lang__on>a').text('JP');
  })

  $('.sub_lang>li:nth-child(3)').on('click' ,function(evt){
    evt.preventDefault();
    $('.lang__on>a').text('KR');
  })

  $('.sub_lang>li:nth-child(4)').on('click' ,function(evt){
    evt.preventDefault();
    $('.lang__on>a').text('TW');
  })

  $('.sub_lang>li:nth-child(5)').on('click' ,function(evt){
    evt.preventDefault();
    $('.lang__on>a').text('TH');
  })

  $('.sub_lang>li:nth-child(6)').on('click' ,function(evt){
    evt.preventDefault();
    $('.lang__on>a').text('ID');
  })


// --------------toogle---------------------
//display none 해놓고 toogle을 사용하면 똑딱이처럼 보이기 or hide기능 가능!
//쓰다보면 재밋는 메쏘드@@ 
  const $lang = $('.lang')
  $lang.on('click' , function(evt){
    evt.preventDefault();
    $('.sub_lang').toggle(0)
    
  })

// -----------------------visual slide START---------------------------
  let $slides = $('.slides'),
      $firstSlide = $slides.find('p').first() // 첫번째 슬라이드
      .stop(true).animate({'opacity':1},400); // 첫번째 슬라이드만 보이게 하기


      function NextSlide(){ // 다음 버튼 함수
        stopSlide();startSlide(); //타이머 초기화
        $secondSlide =$slides.find('p').eq(1).stop(true).animate({'opacity':0},5000);
        $firstSlide = $slides.find('p').first().appendTo($slides); // 첫 번째 슬라이드 // 맨 마지막으로 보내기
        //  $lastSlide = $slides.find('p').last() // 맨 마지막으로 보낸 슬라이드
        // .stop(true).animate({'opacity':0},400); // fadeOut시키기
        $firstSlide = $slides.find('p').first()// 맨 처음 슬라이드
        .stop(true).animate({'opacity':1},5000);// fadeIn 시키기
      }


      let theInterval_1 =null

      function startSlide() {
        theInterval_1 = setInterval(NextSlide, 7000); //자동 슬라이드 설정
      }
    
    
      function stopSlide() { //자동 멈추기
        clearInterval(theInterval_1);
      }
      
      // $('.slider').hover(function(){ //마우스 오버시 슬라이드 멈춤
      //   stopSlide();   //마우스 진입
      // }, function (){
      //   startSlide(); //마우스 떠남
    
      // });
      
      startSlide(); // 자동 슬라이드 시작

// -----------------------visual slide END---------------------------

// ----------hover기능----------
const $gnbmnu = $('.service_continer>ul');
const $submnu = $('.service_continer>ul>li>a');
let mnuIdx = null
let subIdx = null
$gnbmnu.hover(
  function(){
      mnuIdx = $gnbmnu.index(this);
      subIdx = $submnu.index(this);
      $(this).css({
        opacity: 0.7 

      })

      $submnu.eq(mnuIdx).css({
        display:'block' 
      });
  }
  ,
  function(){
      // $().remove();//특정요소를 제거
      $submnu.hide();   
      $($gnbmnu).css({
        opacity: 1
      })
      
  }
);


// ---------------마감처리-------------------
//이부분은 별로 중요한 부분이나이라서 나중에 삭제해도 상관없음

// $('article>div>div>a').on('click' , function(evt){
//   evt.preventDefault();
// })

$('.article2__flexcontainer__box_1>ul>.gogle-store , .apple-store').on('click' , function(evt){
  evt.preventDefault();
})



$('.support>a').on('click' , function(evt){
  evt.preventDefault();
})

$('.service_continer>ul>li>a').on('click' , function(evt){
  evt.preventDefault();
})

$('.fot_gnb>li>a').on('click' , function(evt){
  evt.preventDefault();
})

$('.fot_lnb>li>a').on('click' , function(evt){
  evt.preventDefault();
})




})