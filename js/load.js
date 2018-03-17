$(document).ready(function(){
  $(".hot_heart, .live_gifts, .gift_w").hide();
});

$.get(chrome.extension.getURL('/volume.html'), function(data) {
  $($.parseHTML(data)).appendTo('.wh_img');
});
