// get all the panels
const panels = document.querySelectorAll('.panel');
panels.forEach((panel)=> {
    // have an event listener
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})
const removeActiveClasses = () => {
    panels.forEach((panel)=> {
        panel.classList.remove('active');
    })
}