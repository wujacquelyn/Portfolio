//Scroll Animations//


//Title//
var wordmark = document.querySelector('.rainbow-title');

var wordmarkImg = wordmark.querySelector('.rainbow-title__image');
var canvas = wordmark.querySelector('.rainbow-title__canvas');
var ctx = canvas.getContext('2d');
var trailCount = 100;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var nameImage = new Image();
nameImage.onload = onImageLoad;
nameImage.src ="./images/weirdcombo.png"

function onImageLoad() {
  setColorCanvas( 'blue', '#6DC4FF' );
  setColorCanvas( 'gold', '#EFC156' );
  setColorCanvas( 'pink', '#EF8BC7' );
  setColorCanvas( 'red', '#EF6969' );
  animate();
}
var colorCanvases = {};

function setColorCanvas( name, color ) {
  var colorCanvas = document.createElement('canvas');
  colorCanvas.width = nameImage.width;
  colorCanvas.height = nameImage.height;
  var colorCtx = colorCanvas.getContext('2d');
  colorCtx.drawImage( nameImage, 0, 10 );
  colorCtx.globalCompositeOperation = 'source-in';
  colorCtx.fillStyle = color;
  colorCtx.fillRect( 0, 0, nameImage.width, nameImage.height );
  colorCanvases[ name ] = colorCanvas;
}


var t = 0;
var rainbow = [];

(function() {
  for ( var i=0; i < trailCount; i++ ) {
    rainbow.push(null);
  }
})();

var colorCycle = [ 'blue', 'gold', 'pink', 'red' ];

function animate() {
  update();
  render();
  requestAnimationFrame( animate );
}

function update() {
  t++;
  var colorCycleIndex = Math.floor( t / 8 ) % 4;
  var nextColor =  colorCycle[ colorCycleIndex ];
  rainbow.pop();
  rainbow.pop();
  rainbow.pop();
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
}

function render() {
  ctx.clearRect( 0, 0, canvasWidth, canvasHeight );

  // iterate backwards through rainbow
  for ( var i = rainbow.length-1; i >= 0; i-- ) {
    var color = rainbow[i];
    if ( color ) {
      ctx.drawImage( colorCanvases[ color ], i+1, i+1 );
    }
  }
}
