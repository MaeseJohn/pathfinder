const CREATE_BUTTON = document.getElementById('create')

let grid

CREATE_BUTTON.onclick = function(){

    if(grid != undefined)
    {
        grid.removeGrid();
    }

    let grid_height = document.getElementById('heigth').value
    let grid_width  = document.getElementById('width').value
    
    grid = new Grid(grid_height, grid_width)
    grid.makeGrid()
}