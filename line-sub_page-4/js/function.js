//1.준비핸들러
$(function(){

const $container = $('slides_mv > .slides-mv_container');
const $indicator = $('slides_mv > .slides-pagination > li>a');
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

const $container_mv = $('.slides_mv > .slides-mv_container');
const $indicator_mv = $('.slides_mv .slides-pagination > li>a');
let nowIdx_mv = 0;

//$indicator_payment.on
$indicator_mv.on('click', function(evt){
  evt.preventDefault();
  // alert('정상작동')

  //nowIdx 값 추출
  nowIdx_mv = $indicator_mv.index(this);

  //활성화표시
  $indicator_mv.eq(nowIdx_mv).parent().addClass('on').siblings().removeClass('on');
  
  //컨테이너이동
  $container_mv.stop().animate({
    left: -(100 * nowIdx_mv) + "%"  //100%만큼 이동한다
  });
});//end of $indicator_payment.on



$('a').on('click' , function(evt){
  evt.preventDefault();
})//a태그 클릭시 화면이동 방지

})//end of 준비핸들러