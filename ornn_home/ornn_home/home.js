/* ********** ********** ********** */
/*             HOME JS              */
/* ********** ********** ********** */

/* ********** ********** ********** */
// Work 배경이미지
jQuery( function() {

  const contentBox = $('.full2 article .contentBox');
  let bgNum = 8;

  for (let i = 1; i <= bgNum; i++ ) {
    console.log(i);
    contentBox.append('<img src="/wp-content/uploads/main_work_' + i + '.jpg">');
  }

});


/* ********** ********** ********** */
// 우주선 이동
(function() {

  const full1 = document.querySelector('.full1');
  const spaceship = document.querySelector('#o_spaceship');
  const spaceshipImg = document.querySelector('#o_spaceship img');
  const dot_m = document.getElementById('dot_m');

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.05;

  let obj = {
    wid : "",
    hei : "",
    x : "",
    y : "",
    dataX : "",
    dataY : ""
  }

  // h1 = document.getElementsByTagName('h1')[0];
  window.addEventListener('click', mouseFunc, false);

  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;

    // e = e || window.event;
 
    obj.wid = full1.offsetWidth;
    obj.hei = full1.offsetHeight;
    obj.x = e.offsetX; 
    obj.y = e.offsetY;
 
    obj.dataX = obj.x - (obj.wid / 2);
    obj.dataY = obj.y - (obj.hei / 2);
    
    // dot_m.style.transform = `translate(${obj.dataX}px, ${obj.dataY}px)`;
    setTimeout(function() {
      spaceship.style.top = "0";
      spaceship.style.left = "0";
      spaceship.style.transform = `translate(${x}px, ${y}px)`;
      bounceBox.style.animationName = `none`;
    }, 1000);

    setTimeout(function() {
      bounceBox.style.animationName = `bounce`;
    }, 2000);

    // spaceship.style.top = "0";
    // spaceship.style.left = "0";
    // spaceship.style.transform = "translate(" + x +"px," + y + "px)";
 
    set_xy();
    display_atan2();

  }

  function set_xy(){
      dot_m.dataset.x = obj.dataX;
      dot_m.dataset.y = obj.dataY * -1;
  }
  
  // 0,0을 기준으로 클릭한 좌표의 atan2 값
  function display_atan2(){
      const deg = Math.atan2(dot_m.dataset.y, dot_m.dataset.x) * (180 / Math.PI);
      rotate_arrow(deg);
  }

  // 클릭한 좌표 방향으로 rotate 회전
  function rotate_arrow(deg){
      const nowDeg = -(deg - 90);
      console.log(nowDeg);
      spaceshipImg.style.transform = `rotate(${nowDeg}deg)`;
  }

})();

/* ********** ********** ********** */
// 우주선 이동
// (function() {
//   let spaceship;

//   let x = 0;
//   let y = 0;
//   let mx = 0;
//   let my = 0;
//   let speed = 0.05;

//   // h1 = document.getElementsByTagName('h1')[0];
//   spaceship = document.querySelector('#o_spaceship');
//   window.addEventListener('click', mouseFunc, false);

//   function mouseFunc(e) {
//     x = e.clientX;
//     y = e.clientY;

//     spaceship.style.top = "0";
//     spaceship.style.left = "0";
//     spaceship.style.transform = "translate(" + x +"px," + y + "px)";
//   }

// })();

/* ********** ********** ********** */
// 준비중 입니다. 팝업
jQuery( function() {

  const readyBtn = $('.readyBtn');
  const readyPopUpBox = `<div class="readyPopupBox"><p>준비 중 입니다.</p></div>`;
  const readyClass = $('.readyPopupBox');

  $('body').append(readyPopUpBox);

  readyBtn.on('click', function() {
    $('.readyPopupBox').show().delay(600).fadeOut(1000);
  });

});