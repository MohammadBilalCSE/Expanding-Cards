const panels = document.querySelectorAll('.Mimg')

panels.forEach(Mimg => {
    Mimg.addEventListener('click', () => {
        removeActiveClasses()
        Mimg.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(Mimg => {
        Mimg.classList.remove('active')
    })
}