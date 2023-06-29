const table = document.getElementById('map');
const container = [];
const body = document.getElementsByTagName('body')[0];
const cellDimension = 14;
const numberOfRows = table.offsetHeight.toFixed(0) / cellDimension;
const numberOfCols = table.offsetWidth.toFixed(0) / cellDimension;
var instantSearchOn = 0;
var stopEveryThing = 0;
for(let i = 0; i < numberOfRows; i++){
    var row = document.createElement("tr");
    container.push([]);
    for(let j = 0; j < numberOfCols; j++){
        var cell = document.createElement("td");
        cell.id = i + " " + j;
        container[i].push(cell);
        // container.append(cell);
        row.appendChild(cell);
    }
    table.appendChild(row);
}
var startCell = container[(numberOfRows / 2).toFixed(0)][(numberOfCols / 3).toFixed(0)];
var endCell = container[(numberOfRows / 2).toFixed(0)][2 * (numberOfCols / 3).toFixed(0)];
var classBeforeStart = [];
var classBeforeEnd = [];
startCell.classList.add("startCell");
endCell.classList.add("endCell");
var mouseDownForCell = false;
var mouseDownForStartCell = false;
// var mous

var mouseDownForEndCell = false;

var lastCellToChange;
// table.
body.addEventListener("mouseup", function(){
    mouseDownForCell = false;
    mouseDownForStartCell = false;
    mouseDownForEndCell = false;
    lastCellToChange = null;

})
// const functionForStartCellMouseDown = function(){
//     // mouseDownForCell = false;
//     mouseDownForStartCell = true;
//     console.log("start cell mouse down", mouseDownForStartCell);
//     // console.log("dfs");
// }
// startCell.addEventListener("mousedown", functionForStartCellMouseDown);
// startCell.addEventListener("mousedown", functionForStartCellMouseDown);
// endCell.addEventListener("mousedown", function(){
//     // mouseDownForCell = false;
//     mouseDownForEndCell = true;
//     // console.log("dfs");
// })
container.forEach(row => {
    row.forEach(cell => {
        // console.log("for cell", mouseDownForStartCell);
        
        cell.addEventListener("mousedown", function(){
            if(cell == startCell){
                mouseDownForStartCell = true;
                // console.log("start cell mouse down", mouseDownForStartCell);
            }else if(cell == endCell){
                mouseDownForEndCell = true;
            }else{
                mouseDownForCell = true;
                // console.log("table mouse down");
            }
            
        })
        cell.addEventListener("mousemove", function(){
            if(!stopEveryThing && lastCellToChange != cell && cell != startCell && cell != endCell){
                lastCellToChange = cell;
                
                if(mouseDownForStartCell){
                    lastCellToChange = cell;
                    moveCell(cell, 1);
                }
                if(mouseDownForEndCell){
                    moveCell(cell, 0);
                }
                if(mouseDownForCell){
                    if(cell.classList.contains("wall"))cell.classList.remove("wall");
                    else {
                        cell.classList = "";
                        cell.classList.add("wall");
                    }
                }
            }
        })
        cell.addEventListener("click", function(){
            if(!stopEveryThing && cell != startCell && cell != endCell){
                if(cell.classList.contains("wall"))cell.classList.remove("wall");
                else {
                    cell.classList = "";
                    cell.classList.add("wall");
                }
            }
        })
    });
});

function moveCell(cell, start){
    var previousCell;
    if(start){
        // console.log("moving");
        previousCell = startCell;
        previousCell.classList.remove("startCell");
        previousCell.classList = classBeforeStart;
        // console.log(classBeforeStart, cell.classList);
        classBeforeStart = [...cell.classList];
        cell.classList = [];
        cell.classList.add("startCell");
        startCell = cell;
        // startCell.addEventListener("mousedown", functionForStartCellMouseDown);
    }else{
        // console.log("moving");
        previousCell = endCell;
        previousCell.classList.remove("endCell");
        previousCell.classList = classBeforeEnd;
        // console.log(classBeforeEnd);
        classBeforeEnd =  [...cell.classList];
        cell.classList = [];
        cell.classList.add("endCell");
        endCell = cell;
    }
    if(instantSearchOn){
        const a = bfs();
        clearSearch();
        animate(a[0], a[1], 1);
    }
    // previousCell.removeEventListener("mousedown", functionForStartCellMouseDown);
    // previousCell.removeEventListner()
}



// console.log(container);