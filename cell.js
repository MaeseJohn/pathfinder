class Cell {
    constructor(row, column, cell)
    {
        this.row    = row
        this.column = column
        this.cell   = cell

        this.visited = false

        this.topwall   = true
        this.botwall   = true
        this.leftwall  = true
        this.rightwall = true
        
    }

    left()
    {
        this.leftwall = false
        this.cellStyle()
    }

    right()
    {
        this.rightwall = false
        this.cellStyle()
    }

    bottom()
    {
        this.botwall = false
        this.cellStyle()
    }

    up()
    {
        this.topwall = false
        this.cellStyle()
    }

    cellStyle()
    {
        let className 
    
        let topname   = this.topwall   ? 'top'   : ''
        let rightname = this.rightwall ? 'right' : ''
        let botname   = this.botwall   ? 'bot'   : ''
        let leftname  = this.leftwall  ? 'left'  : ''

        className = topname + rightname + botname + leftname
    
        if(className == '')
        {
            className = 'nowalls'
        }
        this.cell.className = className
    }
}