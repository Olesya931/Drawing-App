
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    
    canvas.height = 400;
    canvas.width = 600;
    let penSize = 10;
    let penColor = 'black';

    let isPainting =  false;

    function drawing(e){
        if (isPainting){
            context.lineWidth = penSize;
            context.strokeStyle = penColor;
            context.lineCap = 'round';
            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.stroke();

            context.beginPath();
            context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }
    }

    canvas.addEventListener('mousedown', (e)=>{
        isPainting = true;
        drawing(e);
    })

    canvas.addEventListener('mouseup', ()=>{
        isPainting = false;
        context.beginPath();
    })

    canvas.addEventListener('mousemove', drawing)

    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click',()=>{
        context.clearRect(0,0,canvas.width, canvas.height);
    })

    const sizeInput = document.querySelector('.pen-size');
    sizeInput.addEventListener('change',()=>{
        penSize = sizeInput.value;
    })

    const colorInput = document.querySelector('.pen-color');
    colorInput.addEventListener('change',(e)=>{
        penColor = colorInput.value;
        console.log(penColor);
    })