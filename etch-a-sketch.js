let pixelCanvas;
let mousedown = false;

window.addEventListener('DOMContentLoaded', e => {
    let pixelCanvas = document.querySelector('#pixel-canvas');
    pixelCanvas.addEventListener('mousedown', e => { mousedown = true; });
    pixelCanvas.addEventListener('mouseup', e => { mousedown = false; });

    createGrid(pixelCanvas, 33);
});

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', onPixelHovered);
    pixel.addEventListener('dragstart', e => e.preventDefault());
    return pixel;
}

function createGrid(parent, size) {
    let numPixels = size*size;
    for (let i = 0; i < numPixels; i++) {
        parent.append(createPixel());
    }
    parent.style.width = `${size*16 + 2}px`;
}

function onPixelHovered(e) {
    e.preventDefault();
    if (mousedown) {
        e.target.style.background = 'black';
    }
}