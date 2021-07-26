
function openSidebar() {
    const articleHeight = window.getComputedStyle(document.querySelector("main")!).height
    document.getElementById('close-sidebar')!.style.display = 'block'
    document.getElementById('toc-sidebar')!.classList.add("show")
    document.getElementById('toc-sidebar')!.style.height = articleHeight
}

function closeSidebar() {
    document.getElementById('close-sidebar')!.style.display = 'none'
    document.getElementById('toc-sidebar')!.classList.remove("show")
}

window.addEventListener('resize', () => {
    const articleHeight = window.getComputedStyle(document.querySelector("main")!).height
    document.getElementById('toc-sidebar')!.style.height = articleHeight
    closeSidebar()
})