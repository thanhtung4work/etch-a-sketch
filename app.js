
const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('#reset');
const applyBtn = document.querySelector('#apply');
const input = document.querySelector('#input');
const gridOut = document.querySelector('#gridOutput')
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
        console.log('hover');
    }
});

resetBtn.addEventListener('click', resetGrid)
applyBtn.addEventListener('click', function(e){
    boxPerRow = input.value;
    gridOut.innerHTML = `${boxPerRow} x ${boxPerRow}`;
    resetGrid();
})

createGrid();