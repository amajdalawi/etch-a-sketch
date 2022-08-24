squaresContainer = document.querySelector(".squares_container")

let insertSquares = function(n) {
    for (let i = 0; i < n*n; i++) {
        let div = document.createElement('div');
        let height = squaresContainer.style.height;
        let width = squaresContainer.style.width;
        console.log(height);

        heightDiv = 500/n;
        console.log(heightDiv);
        widthDiv = 500/n;
        div.style.height = heightDiv.toString() + 'px';
        div.style.width = widthDiv.toString() + 'px';

        squaresContainer.appendChild(div);
        
        
    }
}

insertSquares(16);