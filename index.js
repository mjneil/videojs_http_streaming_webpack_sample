var videojs = require('video.js');

require('@videojs/http-streaming');

var player = videojs('player');

player.ready(function() {
  player.src({
    src: 'http://d2zihajmogu5jn.cloudfront.net/sintel/master.m3u8',
    type: 'application/x-mpegURL'
  });
});

