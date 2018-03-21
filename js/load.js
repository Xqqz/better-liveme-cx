$(document).ready(function(){
  $(".hot_heart, .live_gifts, .gift_w").hide();
});

$.get(chrome.extension.getURL('/volume.html'), function(data) {
  $($.parseHTML(data)).appendTo('.wh_img');
});

$.get(chrome.extension.getURL('/fullscreen.html'), function(data) {
  $($.parseHTML(data)).appendTo('.wh_img');
});


$('.fullscreen').on('click', function(){
  // if already full screen; exit
  // else go fullscreen
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    element = $('.wh_img').get(0);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
});

