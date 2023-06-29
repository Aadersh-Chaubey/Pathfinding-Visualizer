const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const cleanButton = document.getElementById("cleanButton");
// const resetButton = document.getElementById("resetButton");
const removeAllTimeOuts = function(){
    timeOuts.forEach(timeOut=>{
        clearTimeout(timeOut);
    })
    timeOuts = [];
}
searchButton.addEventListener("click", function(){
    stopEveryThing = 1;
    removeAllTimeOuts();
    clearSearch();
    var a = bfs();
    animate(a[0], a[1], 0);
})

clearButton.addEventListener("click", function(){
    clearAll();
    removeAllTimeOuts();
    stopEveryThing = 0;
    instantSearchOn = 0;
})

cleanButton.addEventListener("click", function(){
    clearSearch();
    removeAllTimeOuts();
    stopEveryThing = 0;
    instantSearchOn = 0;
})