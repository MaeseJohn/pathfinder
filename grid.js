function makeGrid()
{
    let table = document.getElementById("grid")
    let navbarHeight = document.getElementById("navbar").clientHeight

    let width = window.innerWidth
    let height = window.innerHeight

    table.style.width = width + "px";
    table.style.height = height - navbarHeight + "px";

    for(let i = 0; i < 10; i++)
    {
        let row = document.createElement("tr")
        row.id = "row" + i
        row.style.height = window.innerHeight/10

        table.appendChild(row)
        row = document.getElementById("row" + i)

        for(let i = 0; i < 10; i++)
        {
            let cell = document.createElement("td")
            cell.style.width = window.innerWidth/10
            row.appendChild(cell)
        }
    }
}