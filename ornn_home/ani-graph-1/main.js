$(document).ready(function() {

  // data 내용을 html로 입력
  // 그 중 가장 높은 수를 찾아 100%로 정한다. 그 기준으로 다른 수들 또한 %로 만든다.
  // data의 입력된 값을 그래프 width를 %로 적용한다.(반응형)
  const brandProgress = $('.brand-progress');

  // 최대 값 찾기
  let dpArr = [];
  for(let i = 0; i < brandProgress.length; i++) {
    let dpValue = $('.brand-progress').eq(i).attr("data-progress");
    dpArr.push(dpValue);
  }
  let maxNum = Math.max.apply(null, dpArr); // 최대 값 결과

  // 적용
  brandProgress.each(function() {
    let dataProgress = $(this).attr("data-progress");
    let dataPer = (dataProgress * 100) / (maxNum * 1);

    $(this).parent().siblings(".brand-per").text(dataProgress + "%"); // text 적용
    $(this).css('width', (dataPer) + '%'); // 그래프 적용
  });

})