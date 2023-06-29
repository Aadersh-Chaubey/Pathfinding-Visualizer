const bfs = function(){
    var visitedList = [];
    var visited = new Set();
    var parent = new Map();
    // b(startCell, visitedList, visited);
    var q = [];
    var curr;
    q.push(startCell);
    while(q.length > 0){
        curr = q.shift();
        // console.log(curr);
        if(curr == null ||curr.classList.contains('wall'))continue;
        if(curr == endCell)break;
        visitedList.push(curr);
        visited.add(curr);
        var x = curr.id.split(' ')[0] - '0';
        var y = curr.id.split(' ')[1] - '0';
        var child = document.getElementById((x + 1) + " " + (y));
        if(!visited.has(child)){
            q.push(child);
            parent.set(child, curr);
            visited.add(child);
        }

        child = document.getElementById((x - 1) + " " + (y));
        if(!visited.has(child)){
            q.push(child);
            parent.set(child, curr);
            visited.add(child);
        }

        child = document.getElementById((x) + " " + (y - 1));
        if(!visited.has(child)){
            q.push(child);
            parent.set(child, curr);
            visited.add(child);
        }

        child = document.getElementById((x) + " " + (y + 1));
        if(!visited.has(child)){
            q.push(child);
            parent.set(child, curr);
            visited.add(child);
        }
        // if()
    }
    var path = [];
    var curr = endCell;
    // console.log(parent.get(curr));
    while(parent.get(curr) !== startCell && curr !== undefined){
        // console.log(curr);
        // console.log(curr, parent.get(curr.id));
        // console.log(curr.id.split(' ')[0] - '0');\
        path.push(parent.get(curr));
        curr = parent.get(curr);
    }
    path = path.reverse();
    return [visitedList, path];
}

// var a = bfs();
// a.forEach(cell=>{cell.classList.add("wall")})
// console.log(a.length);