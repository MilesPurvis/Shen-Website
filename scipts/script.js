var lastDisplayedVideoId = null;

function showVideo(videoId) {
  if (lastDisplayedVideoId != null) {
    var lastDisplayedVideoElement =
      document.getElementById(lastDisplayedVideoId);
    lastDisplayedVideoElement.style.display = "none";
  }

  var videoElement = document.getElementById(videoId);

  videoElement.style.display = "block";

  lastDisplayedVideoId = videoId;
}
