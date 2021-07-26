
function openSidebar() {
    const articleHeight = window.getComputedStyle(document.querySelector("main")!).height
    document.getElementById('close-sidebar')!.style.display = 'block'
    document.getElementById('toc-sidebar')!.style.width = "250px"
    document.getElementById('toc-sidebar')!.style.height = articleHeight
}

function closeSidebar() {
    document.getElementById('close-sidebar')!.style.display = 'none'
    document.getElementById('toc-sidebar')!.style.width = "0"
}