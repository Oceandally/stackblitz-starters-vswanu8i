function loadVideo() {
  const urlVal = document.getElementById('url-input').value.trim();
  const errorMsg = document.getElementById('error-message');
  let videoId = '';

  if (urlVal.includes('youtu.be/')) {
    const afterSlash = urlVal.split('youtu.be/');
    if (afterSlash[1]) {
      videoId = afterSlash[1].split('?')[0];
    }
  } else if (urlVal.includes('v=')) {
    const afterV = urlVal.split('v=');
    if (afterV[1]) {
      videoId = afterV[1].split('&')[0];
    }
  } else if (urlVal.length === 11) {
    videoId = urlVal;
  }

  if (videoId && videoId.length === 11) {
    // fs=0 natively signals YouTube's layout script to omit the display icon
    document.getElementById('player-frame').src =
      'https://www.youtube.com/embed/' + videoId + '?fs=0';

    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('video-room').classList.remove('hidden');
    if (errorMsg) errorMsg.classList.add('hidden');
  } else {
    if (errorMsg) {
      errorMsg.textContent = 'Please enter a valid YouTube video link.';
      errorMsg.classList.remove('hidden');
    }
  }
}

function resetRoom() {
  document.getElementById('player-frame').src = '';
  document.getElementById('url-input').value = '';
  document.getElementById('video-room').classList.add('hidden');
  document.getElementById('input-section').classList.remove('hidden');
}

function triggerAdAndFullscreen() {
  const adNetworkUrl = 'https://example-ad-network.com';
  window.open(adNetworkUrl, '_blank');

  const playerFrame = document.getElementById('player-frame');
  if (playerFrame.requestFullscreen) {
    playerFrame.requestFullscreen();
  } else if (playerFrame.webkitRequestFullscreen) {
    playerFrame.webkitRequestFullscreen();
  } else if (playerFrame.msRequestFullscreen) {
    playerFrame.msRequestFullscreen();
  }
}
