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
    }

    right()
    {
        this.rightwall = false
    }

    bottom()
    {
        this.botwall = false
    }

    up()
    {
        this.topwall = false
    }

    cellStyle()
    {
        let className = ''
        className += this.topwall   ? 'top'   : ''
        className += this.rightwall ? 'right' : ''
        className += this.botwall   ? 'bot'   : ''
        className += this.leftwall  ? 'left'  : ''
    
        if(className == '')
        {
            className = 'nowalls'
        }
        this.cell.className = className
        console.log('hola')
    }
}