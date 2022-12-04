(() => {

  const actions = {
    birdFlies(key) {
      if (key) {
        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
      } else {
        document.querySelector('[data-index="2"] .bird').style. transform = `translateX(-100%)`;
      }
    },
    birdFlies2(key) {
      if (key) {
        document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`;
      } else {
        document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
      }
    }
  };

  const stepElems = document.querySelectorAll('.step');
  const graphicElems = document.querySelectorAll('.graphic-item');
  // 현재 활성화된(visible 붙은) .graphic-item을 지정
  let currenItem = graphicElems[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    // console.log(entries[0].target.datase   t.index);
    ioIndex = entries[0].target.dataset.index * 1;
  });

  // 인텍스 넣기
  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    // stepElems[i].setAttribute('data-index', i);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  // 활성화
  function activate(action) {
    currenItem.classList.add('visible');
    if (action) {
      actions[action](true);
    }
  }

  // 비활성화
  function inactiveate(action) {
    currenItem.classList.remove('visible');
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener('scroll', () => {

    let step;
    let boundingRect;

    // for (let i = 0; i < stepElems.length; i++) {
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];

      if (!step) continue;
      
      boundingRect = step.getBoundingClientRect();
      // console.log(boundingRect.top);

      if (boundingRect.top > window.innerHeight * 0.1 &&
          boundingRect.top < window.innerHeight * 0.8) {
        // console.log(step.dataset.index);
        inactiveate();
        currenItem = graphicElems[step.dataset.index];
        activate(currenItem.dataset.action);
      }
    }

  });

  window.addEventListener('load', () => {
    setTimeout(() => scrollTo(0, 0), 100);
  });

  activate();


})();