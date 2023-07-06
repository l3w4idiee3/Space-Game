canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
// set the fill color to black
ctx.fillRect(0,0, canvas.height, canvas.width)

function loadAsset(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            resolve(img);
        }
    })
}