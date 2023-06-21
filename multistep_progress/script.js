const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActiveStep = 1;

nextBtn.addEventListener('click',()=> {
    currentActiveStep++;
    if(currentActiveStep > circles.length){
        currentActiveStep=circles.length;
        
    }
    update()
    
});
prevBtn.addEventListener('click',()=> {
    currentActiveStep--;
    if(currentActiveStep <1){
        currentActiveStep=1;
    }
    update()
    
});
const update = () => {
    circles.forEach((circle,idx)=> {
        if(idx<currentActiveStep){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (((actives.length -1) / (circles.length-1)) * 100) + "%"
    if(currentActiveStep == 1){
        prevBtn.disabled = true;
    }else if(currentActiveStep === circles.length){
        nextBtn.disabled = true;
    }else{
        prevBtn.disabled=false;
        nextBtn.disabled=false;
    }
}