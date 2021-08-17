
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    
    canvas.height = 400;
    canvas.width = 600;
    let penSize = 10;
    let penColor = 'black';

    let isPainting =  false;

    //рисование
    function drawing(e){
        if (isPainting){
            context.lineWidth = penSize;
            context.strokeStyle = penColor;
            context.lineCap = 'round';
            context.lineTo(e.offsetX, e.offsetY);
            context.stroke();

            context.beginPath();
            context.lineTo(e.offsetX, e.offsetY);
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

    //очистить 
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click',()=>{
        context.clearRect(0,0,canvas.width, canvas.height);
    })

    //изменение размера кисти
    const sizeInput = document.querySelector('.pen-size');
    sizeInput.addEventListener('change',()=>{
        penSize = sizeInput.value;
    })

    //измение цвета кисти
    const colorInput = document.querySelector('.pen-color');
    colorInput.addEventListener('change',(e)=>{
        penColor = colorInput.value;
        console.log(penColor);
    })

    //сохранение рисунка
    const downloadBtn = document.querySelector(".download-btn");
    downloadBtn.addEventListener('click',(e)=>{
        e.target.href = canvas.toDataURL()
    })