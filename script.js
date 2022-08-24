squaresContainer = document.querySelector(".squares_container")

// let mouseDown = false;

// squaresContainer.addEventListener('mousedown', () => {

// });

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
        div.addEventListener('mouseup',() => {div.classList.add('make_black')});

        }
};

let clearSquares = function() {
    divList = document.querySelectorAll('div.squares_container div');
    for (const div of divList) {
        div.classList.remove('make_black');
    }
};

insertSquares(16);
but = document.querySelector('.but');
but.addEventListener('click',clearSquares);




