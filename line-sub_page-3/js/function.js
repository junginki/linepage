//1.준비핸들러
$(function(){
const $header = $('header');
const $gnbmnu = $('.gnb');
const $sub= $('.lnb')
$('a').on('click', function(evt){
evt.preventDefault();
}) //앵커 클릭시 올라감 방지

$gnbmnu.on('click' , function(evt){
 console.log('시험작동')
});

$('h1>a').on('click',function(){
  alert('정상작동')
})

$header.hover(
  function(){
      // mnuIdx = $gnbmnu.index(this);각각의 인덱스
$(this).css({opacity: 0.9})
      // $('header').css({
      //   opacity: 0.09 오페써티 오류 잡아냄
      // })
      $('header').css({
        height: 400
      })

      // $gnbmnu.find().css({
      // }).fadeIn(500);

      $sub.fadeIn(300);
  }
  ,
  function(){
      // $().remove();//특정요소를 제거
      $sub.hide();   
      // $('section').css({
      //   opacity: 1 오페써티 오류 잡아냄
      // })
      $(this).css({opacity: 1})
      $('header').css({
        height: 96
      })
  }
);


const $container = $('.slides > .slides-container');
const $indicator = $('.slides > .slides-pagination > li>a');
let nowIdx = 0;

//indicator.on
$indicator.on('click', function(evt){
  evt.preventDefault();
  // alert('정상작동')

  //nowIdx 값 추출
  nowIdx = $indicator.index(this);

  //활성화표시
  $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
  //컨테이너이동
  $container.stop().animate({
    left: -(100 * nowIdx) + "%"  //100%만큼 이동한다
  });
});//end of indicator.on


//----

const $container_payment = $('.slides_payment > .slides-container');
const $indicator_payment = $('.slides_payment .slides-pagination > li>a');
let nowIdx_payment = 0;

//$indicator_payment.on
$indicator_payment.on('click', function(evt){
  evt.preventDefault();
  // alert('정상작동')

  //nowIdx 값 추출
  nowIdx_payment = $indicator_payment.index(this);

  //활성화표시
  $indicator_payment.eq(nowIdx_payment).parent().addClass('on').siblings().removeClass('on');
  
  //컨테이너이동
  $container_payment.stop().animate({
    left: -(100 * nowIdx_payment) + "%"  //100%만큼 이동한다
  });
});//end of $indicator_payment.on

const $lang = $('.footer-inner__container_3__lang')
$lang.on('click' , function(evt){
  evt.preventDefault();
  $('.lang-taiwan').toggle(0)
  $('.lang-thailand').toggle(0)
  $('.lang-global').toggle(0)
})


})//end of 준비핸들러