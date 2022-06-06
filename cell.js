class Cell {
    constructor(row, column, cell)
    {
        this.row    = row
        this.column = column
        this.cell   = cell

        this.visited = false

        this.topwall   = true
        this.rightwall = true
        this.botwall   = true
        this.leftwall  = true
        
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

    instack(){
        this.cell.className = 'stack' 
    }

    outstack(){
        this.cell.className = ''  
    }

    cellStyle()
    {
        let top   = this.topwall   ? 'solid' : 'hidden'
        let right = this.rightwall ? 'solid' : 'hidden'
        let bot   = this.botwall   ? 'solid' : 'hidden'
        let left  = this.leftwall  ? 'solid' : 'hidden'

        this.cell.style.borderStyle = `${top} ${right} ${bot} ${left}`
    }
}