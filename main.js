
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');

    const clearBtn = document.querySelector('.clear-btn');
    
    canvas.height = innerHeight -200;
    canvas.width = 600;
    let penSize = 10;

    let isPainting =  false;

    function drawing(e){
        if (isPainting){
            context.lineWidth = penSize;
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

    clearBtn.addEventListener('click',()=>{
        context.clearRect(0,0,canvas.width, canvas.height);
    })
