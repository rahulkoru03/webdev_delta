
var sequence = f1()


function f1(){
    var elems = document.body.getElementsByClassName("cell")
    var randomElement =[];
    var chosenIndexes = [];

    while (!(chosenIndexes.length==16)){
        var index = Math.floor(Math.random()*elems.length)
        if (!(index in chosenIndexes) && !(elems[index] in randomElement)) {
            chosenIndexes.push(index)
            // console.log("index: ",index)
            // console.log("len: ",chosenIndexes.length)
            randomElement.push(elems[index])
        }
    }
    return (randomElement)
}

console.log(sequence)


function StartGame(pattern){
    let temp = [];

    function blink (tile){
        
        setTimeout(function() {
            tile.style.backgroundColor = "black"; //(f.style.display == 'none' ? '' : 'none');
            setTimeout(function() {
                tile.style.backgroundColor = "aqua"; //(f.style.display == 'none' ? '' : 'none');
                tile.addEventListener("mouseover", function(){
                    tile.style.backgroundColor = "blue"
                })
                tile.addEventListener("mouseout", function(){
                    tile.style.backgroundColor = "aqua"
                })
            },500);
        }, 500);       
    }
    
    function inner(list,counter) {
        setTimeout(function(){
            for (let k = 0; k < counter+1; k++) {
                blink(list[k])
            }
        },1000);

    //     let tilesGuessed = [];
    //     let allTiles =document.body.getElementsByClassName("cell");
        
    //     for (let j = 0; j < counter+1; j++) {
            
    //         for (let m = 0; m < allTiles.length; m++) {
                // allTiles[m].addEventListener("click", function() {
    //                 tilesGuessed.push(allTiles[m])
    //             })    
    //         }

    //     }
    //     console.log(tilesGuessed)
    //     setTimeout(function(){
    //             if (tilesGuessed == list ) {
    //                 alert("Round 1 success")
    //             }
    //     },6000)

    }

    for (let i = 0; i < pattern.length; i++) {
        
        temp.push(pattern[i])
        
        console.log(temp)
        
        inner(temp,i)

        
                
    }
}