class Cell {
    constructor(row, column)
    {
        this.row    = row
        this.column = column

        this.visited = false
      
        this.top   = true
        this.bot   = true
        this.left  = true
        this.rigth = true
    }
}