var videojs = require('video.js');
require('@videojs/http-streaming');

var player = videojs('player');

player.src({ src: 'https://hslsslak-a.akamaihd.net/3303963094001/3303963094001_5147618278001_5147609827001.m3u8?pubId=3303963094001&videoId=5147609827001', type: 'application/x-mpegURL'});
