

// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


$(window).on("shown.bs.modal", function() {
    AOS.init({disable:true});
});

// var player;

// function onYouTubeIframeAPIReady() {
//      player = new YT.Player("video-b", {
//          videoId: "Ii5N6YEACkY"
//     });
// }

// function onPlayerReady(event) {
//     event.target.playVideo();
//   }

// var done = false;
// function onPlayerStateChange(event) {
// if (event.data == YT.PlayerState.PLAYING && !done) {
//       setTimeout(stopVideo, 6000);
//       done = true;
//     }
// }


// function stopVideo() {
//     player.stopVideo();
// }

// $("#videoModal-b").on("hidden.bs.modal", function () {
//     callPlayer("video-b", "stopVideo");
// });