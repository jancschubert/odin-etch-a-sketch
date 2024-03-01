let inputGridSize;
let pixelCanvas;
let grid;
let mousedown = false;
let colorPots
let selectedColor = '#f00';

window.addEventListener('DOMContentLoaded', e => {
    pixelCanvas = document.querySelector('#pixel-canvas');
    pixelCanvas.addEventListener('mousedown', e => { mousedown = true; });
    pixelCanvas.addEventListener('mouseup', e => { mousedown = false; });

    grid = document.querySelector('#grid');

    let gridSizeUi = document.querySelector('.ui');
    gridSizeUi.addEventListener('submit', onNewGridSizeEntered);

    colorPots = document.querySelectorAll('.color-pot');
    colorPots.forEach(pot => pot.addEventListener('click', onPotClicked));
    colorPots[0].classList.add('selected');

    inputGridSize = document.querySelector('.grid-size-change');

    createGrid(pixelCanvas, 33);
});

function createPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', onPixelHovered);
    pixel.addEventListener('dragstart', e => e.preventDefault());
    pixel.addEventListener('click', onPixelClicked);
    return pixel;
}

function createGridSquare() {
    const pixel = document.createElement('div');
    pixel.classList.add('grid-square');
    return pixel;
}

function createGrid(parent, size) {
    parent.innerHTML = '';
    grid.innerHTML = '';

    let numPixels = size*size;
    for (let i = 0; i < numPixels; i++) {
        parent.append(createPixel());
    }
    parent.style.width = `${size*16 + 2}px`;

    let gridSize = size;
    if (size % 2 === 0) {
        // to get the checkers pattern, the gridsize has to be uneven.
        gridSize += 1; 
    }
    let numGridSquares = gridSize * gridSize;
    for (let j = 0; j < numGridSquares; j++) {
        grid.append(createGridSquare());
    }
    grid.style.width = `${gridSize*16+ 2}px`
}

function onPixelHovered(e) {
    e.preventDefault();
    if (mousedown) {
        e.target.style.background = selectedColor;
    }
}

function onPixelClicked(e) {
    e.target.style.background = selectedColor;
}

function onNewGridSizeEntered(e) {
    e.preventDefault();

    const newSize = +inputGridSize.value;
    if (isNaN(newSize)) {
        console.log("NaN!");
        return;
    }
    createGrid(pixelCanvas, newSize);
}

function onPotClicked(e) {
    selectedColor = getComputedStyle(e.target).backgroundColor;
    colorPots.forEach(pot => pot.classList.remove('selected'));
    e.target.classList.add('selected');
}