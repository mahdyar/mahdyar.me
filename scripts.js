anime({
    targets: '.mahdyar .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  });

  anime({
    targets: '.link',
    translateY: -30
  });


  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline()
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 300,
    delay: (el, i) => 45 * i
  })
  .add({
    targets: '.description',
    translateY: -30,
    opacity: 1,
  });