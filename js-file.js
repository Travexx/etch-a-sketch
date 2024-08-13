const container = document.createElement("div")
container.classList.add("container");
container.id = "etchContainer";

const gridButton = document.createElement("button");
document.body.appendChild(gridButton);

document.body.appendChild(container);

gridButton.addEventListener("click", resizeGrid);
gridButton.textContent = "Resize Grid";

function resizeGrid(){
    let gridSize = prompt("How many tiles?");

    while(gridSize > 100 || gridSize <1 || gridSize === NaN){
        gridSize = prompt("Enter a valid number between 1 and 100")
    }

    createGrid(gridSize);
}

function createGrid(size) {
    container.innerHTML = "";

    const boxSize = 960 / size;
    const totalSize = size * size;

    for (let i = 0; i < totalSize; i++){
        let etchBox = document.createElement("div");
        etchBox.classList.add("etchBox");
        etchBox.style.width = `${boxSize}px`;
        etchBox.style.height = `${boxSize}px`;
        

    etchBox.addEventListener('mouseover', function(){
        etchBox.style.backgroundColor = "black";
    });

    container.appendChild(etchBox);
    }

}

const tiles = prompt("How many tiles?")
createGrid(parseInt(tiles));
