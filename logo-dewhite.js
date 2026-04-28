// ── LOGO DE-WHITE ──
// Removes near-white pixels from PNG logo images using canvas,
// replacing them with full transparency so the logo blends into the dark background.

(function () {
  var THRESHOLD = 230; // pixels with R,G,B all above this are treated as background white

  function dewhiteImage(img) {
    if (!img.complete || img.naturalWidth === 0) return;

    var canvas = document.createElement('canvas');
    canvas.width  = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
      var r = data[i];
      var g = data[i + 1];
      var b = data[i + 2];
      // If pixel is near-white, make it fully transparent
      if (r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) {
        data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL('image/png');
  }

  function processLogos() {
    var logos = document.querySelectorAll('.logo, .footer-logo');
    logos.forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        dewhiteImage(img);
      } else {
        img.addEventListener('load', function () { dewhiteImage(img); });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processLogos);
  } else {
    processLogos();
  }
})();
