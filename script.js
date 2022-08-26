squaresContainer = document.querySelector(".squares_container")

let default_color = 'black';

function ClearCanvas(color=default_color, n=50) {
    // console.log(document.querySelectorAll('div.squares_container div').length)
    if (document.querySelectorAll('div.squares_container div').length> 0) {
        document.querySelectorAll('div.squares_container div').forEach((someDiv) => squaresContainer.removeChild(someDiv));
    }
    for (let i = 0; i < n*n; i++) {
        // Create a singular div element
        let div = document.createElement('div');
        // heightDiv = 500/n;
        // widthDiv = 500/n;

        //Apply the appropriate dimensions to it
        // div.style.height = heightDiv.toString() + 'px'
        // div.style.width = widthDiv.toString() + 'px'
        div.classList.add('divy');
        squaresContainer.appendChild(div);
        // div.addEventListener('mouseenter',() => {
        //     div.classList.remove('divy');
        //     if (color == 'random') {
        //         div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        //     } else {
        //     div.style.backgroundColor = color;
        //     }
        //     // console.log(div.style.backgroundColor, color, default_color)
        //     // div.classList.remove('div:hover')
        // })


        div.onmouseenter= () => {
            div.classList.remove('divy');
            if (color == 'random') {
                if (div.style.backgroundColor == false) {
                div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
                } else {
                    let y = div.style.backgroundColor.split(/\D/);
                    console.log(y)
                    let finalRgbList = new Array();
                    for (const x of y) {
                        if (typeof +x ==="number" && +x > 0) {
                            // console.log(x, typeof x);
                            if (+x == 0) {
                                continue;
                            }
                            let newColor = +x - Math.ceil((+x)*0.1);
                            finalRgbList.push(newColor);

                        }
                    }
                    console.log(finalRgbList)
                    div.style.backgroundColor = `rgb(${finalRgbList.join()})`
                }
            } else {
            div.style.backgroundColor = color;
            }
            // console.log(div.style.backgroundColor, color, default_color)
            // div.classList.remove('div:hover')
        }

    }
}




slider = document.querySelector('#slider');
newcan = document.querySelector('.new');
newcan.addEventListener('click',() => {
    ClearCanvas(default_color,+slider.value);
})

// slider.oninput = () => {
//     console.log(slider.value)
//     ClearCanvas(default_color,+slider.value)
// };


but = document.querySelector('.but');
but.addEventListener('click',() => ClearCanvas(default_color,+slider.value));

makeBlack = document.querySelector('.BLACK');
makeBlack.addEventListener('click',() => {
    default_color='black';
    ClearCanvas(default_color,slider.value)
})

makeRainbow = document.querySelector('.rainbow');
makeRainbow.addEventListener('click', () => {
    default_color = 'random'
    // console.log(default_color)
    ClearCanvas(default_color,+slider.value);
})

ClearCanvas(default_color,+slider.value);












// let insertSquares = function(n) {
//     for (let i = 0; i < n*n; i++) {
//         let div = document.createElement('div');
//         let height = squaresContainer.style.height;
//         let width = squaresContainer.style.width;
//         console.log(height);

//         heightDiv = 500/n;
//         console.log(heightDiv);
//         widthDiv = 500/n;
//         div.style.height = heightDiv.toString() + 'px';
//         div.style.width = widthDiv.toString() + 'px';

//         div.classList.add('default_white')
//         squaresContainer.appendChild(div);
//         div.addEventListener('mouseenter',() => {div.classList.add('make_black')});

//         }
// };



// let clearSquares = function() {
//     divList = document.querySelectorAll('div.squares_container div');
//     for (const div of divList) {
//         div.classList.remove('make_black');
//     }
// };



// RANDOM 
