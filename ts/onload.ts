
function openSidebar() {
    document.getElementById('close-sidebar')!.style.display = 'block'
    document.getElementById('toc-sidebar')!.style.width = "250px";
}

function closeSidebar() {
    document.getElementById('close-sidebar')!.style.display = 'none'
    document.getElementById('toc-sidebar')!.style.width = "0";
}