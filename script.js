const panels = document.querySelectorAll('.panel');
panels.forEach(panel =>{
    
    panel.addEventListener('click',()=>{
        RemoveActiveClass();
        panel.classList.add("active");
    })
    
})
function RemoveActiveClass(panel) {
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
    
}