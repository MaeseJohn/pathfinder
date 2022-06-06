const CREATE_BUTTON = document.getElementById('create')

let grid

gridObjetc = () => {
    let grid_height = document.getElementById('heigth').value
    let grid_width  = document.getElementById('width').value
    
    grid = new Grid(grid_height, grid_width)
}

CREATE_BUTTON.onclick = function(){

    if(grid != undefined)
    {
        grid.removeGrid();
    }

    gridObjetc()
    grid.makeGrid()
}

const MAZE_RANDOMIZER_BUTTON = document.getElementById('mazerun')

let algorithim

MAZE_RANDOMIZER_BUTTON.onclick = function()
{
    if(algorithim != undefined)
    {
        grid.removeGrid()

        gridObjetc()

        grid.makeGrid()
    }

    algorithim = new Backtraking()
    
    Maze.generateMaze(grid, algorithim)
}