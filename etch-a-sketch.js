let pixelCanvas;

window.addEventListener('DOMContentLoaded', e => {
    let pixelCanvas = document.querySelector('#pixel-canvas');
    createGrid(pixelCanvas, 33);
});

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    return pixel;
}

function createGrid(parent, size) {
    let numPixels = size*size;
    for (let i = 0; i < numPixels; i++) {
        parent.append(createPixel());
    }
    parent.style.width = `${size*16 + 2}px`;
}