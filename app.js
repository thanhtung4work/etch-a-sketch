
const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('#reset');
const applyBtn = document.querySelector('#apply');
const blackBtn = document.querySelector('#blackBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const input = document.querySelector('#input');
const gridOut = document.querySelector('#gridOutput');


let currentColor = 'black';
let boxPerRow = 10;

function createDiv(size){
    let div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

function createGrid(){
    for(let i = 0; i < boxPerRow; i++){
        for(let j = 0; j < boxPerRow; j++){
            grid.appendChild(createDiv(grid.clientWidth / boxPerRow));
        }
    }
}

function resetGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild)
    }
    createGrid();
}

grid.addEventListener('mouseover', function (e){
    //set active when hover on box
    if (e.target.classList.contains('box')){
        e.target.classList.add('active');

        //draw color
        if(currentColor == 'random'){
            //generate random rgb color
            let r = Math.floor( Math.random() * 256 );
            let g = Math.floor( Math.random() * 256 );
            let b = Math.floor( Math.random() * 256 );

            e.target.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
        }else{
            e.target.style['background-color'] = currentColor;
        }
            
        console.log('hover');
    }
});

resetBtn.addEventListener('click', resetGrid)
applyBtn.addEventListener('click', function(e){
    if (input.value == "") return;
    boxPerRow = input.value;
    gridOut.innerHTML = `${boxPerRow} x ${boxPerRow}`;
    resetGrid();
})

rainbowBtn.addEventListener('click', function (e){
    currentColor = 'random';
    document.querySelector('#status').innerHTML = 'rainbow';
})

blackBtn.addEventListener('click', function (e){
    currentColor = 'black';
    document.querySelector('#status').innerHTML = 'black';
})

eraserBtn.addEventListener('click', function(e){
    currentColor = 'white';
    document.querySelector('#status').innerHTML = 'eraser';
})
createGrid();