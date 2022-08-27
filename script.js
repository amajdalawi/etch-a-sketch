squaresContainer = document.querySelector(".squares_container")

let default_color = 'black';

function ClearCanvas(color=default_color, n=50) {
    if (document.querySelectorAll('div.squares_container div').length> 0) {
        squaresContainer.innerHTML = '';
    }

    squaresContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    squaresContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`

    for (let i = 0; i < n*n; i++) {

        // Create a singular div element
        let div = document.createElement('div');
        div.classList.add('divy');
        squaresContainer.appendChild(div);
        

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
                        if (x !== "" && typeof +x ==="number") {
                            if (+x === 0) {
                                finalRgbList.push(+x);
                                continue;
                            } else if (+x > 0)  {
                                let newColor = +x - Math.ceil((+x)*0.1);
                                finalRgbList.push(newColor);
                            }
                        }
                    }
                    console.log(finalRgbList)
                    div.style.backgroundColor = `rgb(${finalRgbList.join()})`
                }
            } else {
            div.style.backgroundColor = color;
            }
        }

    }
}




slider = document.querySelector('#slider');
newcan = document.querySelector('.new');
newcan.addEventListener('click',() => {
    ClearCanvas(default_color,+slider.value);
})


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
    ClearCanvas(default_color,+slider.value);
})

ClearCanvas(default_color,+slider.value);

