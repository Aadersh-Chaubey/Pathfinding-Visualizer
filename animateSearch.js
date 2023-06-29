var timeOuts = [];
const animate = function(list, path, instant){
    if(instant){
        list.forEach(curr => {
                curr.classList.add("searchI");
        });


        path.forEach(curr => {
                curr.classList.remove("searchI");
                curr.classList.add("pathI");
        });
    }else{
        var i = 0;
        var inv = 50;
        list.forEach(curr => {
            var timeOut = setTimeout(function(){
                curr.classList.add("search");
            }, i + inv);
            i += inv;
            timeOuts.push(timeOut);
        });
        // i = 0;
        // console.log(path);
        path.forEach(curr => {
            var timeOut = setTimeout(function(){
                curr.classList.remove("search");
                curr.classList.add("path");
            }, i + inv);
            i += inv;
            timeOuts.push(timeOut);
        });
        i -= inv;
        setTimeout(function(){
            stopEveryThing = 0;
            instantSearchOn = 1;
        }, i);
    }
}

const clearSearch = function(){
    container.forEach(row => {
        row.forEach(cell=>{
            cell.classList.remove("path");
            cell.classList.remove("search");
            cell.classList.remove("pathI");
            cell.classList.remove("searchI");
            // classBeforeEnd.remove('path');
            // classBeforeEnd.remove('pathI');
            // classBeforeEnd.remove('search');
            // classBeforeEnd.remove('searchI');
            
            // classBeforeStart.remove('path');
            // classBeforeStart.remove('pathI');
            // classBeforeStart.remove('search');
            // classBeforeStart.remove('searchI');
        })
    });
}

const clearWalls = function(){
    container.forEach(row => {
        row.forEach(cell=>{
            cell.classList.remove("wall");
        })
    });
    classBeforeEnd = [];
    classBeforeStart = [];
    // classBeforeEnd.remove('wall');
    // classBeforeStart.remove('wall');
}

const clearAll = function(){
    // instantSearchOn = 0;
    clearSearch();
    clearWalls();
}