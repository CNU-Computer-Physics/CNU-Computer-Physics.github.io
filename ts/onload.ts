
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
function image_move() {
    document.querySelectorAll("p>img[src$='.gif']")!.forEach(elem => {
        let src = elem.getAttribute("src")
        elem.setAttribute("src", src!.replace(".gif", ".png"))
    })
    // document.querySelectorAll("p>img")!.forEach(elem => {
    //     const closet = elem.closest("p")
    //     const p = closet!.nextElementSibling
    //     p!.insertBefore(elem, p!.childNodes[0])
    // })
}
function page_slice() {
    let refHeight = window.getComputedStyle(document.querySelector("div.page.home")!).height
    document.querySelectorAll("div.page:not(.title)")!.forEach(elem => {
        let sub = 1
        let refPage = elem
        let newPage = document.createElement("div")
        let child
        newPage.setAttribute("class", elem.className)
        while (true) {
            if (refPage.lastElementChild) {
                child = refPage.lastElementChild!.cloneNode(true)
            } else {
                break
            }
            if (window.getComputedStyle(refPage).height > refHeight) {
                if (newPage.childNodes[0]) {
                    newPage.insertBefore(child, newPage.childNodes[0])
                } else {
                    newPage.appendChild(child)
                }
                refPage.removeChild(refPage.lastElementChild!)
            } else if (window.getComputedStyle(newPage).height > refHeight) {
                sub++
                newPage.innerHTML += '<span class="page-number"></span>'
                refPage.after(newPage)
                refPage = newPage
                newPage = document.createElement("div")
                newPage.setAttribute("class", elem.className)
            } else if (newPage.innerHTML != "") {
                newPage.innerHTML += '<span class="page-number"></span>'
                refPage.after(newPage)
                break
            } else {
                break
            }
        }
    })
}
function gen_toc() {
    // 페이지 번호 생성
    document.querySelectorAll("div.page")!.forEach((elem, idx)=>{
        const pageNumber = elem.querySelector(".page-number")
        if (pageNumber) pageNumber.innerHTML = `${idx}`
    })
    // 목차 셋 생성
    const toc_warp = document.getElementById("textbook-toc")!
    document.querySelectorAll("div.warpper.chapter")!.forEach( chapter => {
        const chapterTitle = chapter.querySelector(".page.chapter h1")!.innerHTML
        const chapterID = chapter.querySelector(".page.chapter h1")!.getAttribute("id")
        const chapterPage = chapter.querySelector(".page.chapter .page-number")!.innerHTML
        let chapterElem = `<li class="chapter"><a href="#${chapterID}"><span class="chapter-title">${chapterTitle}</span><span class="chapter-page">${chapterPage}</span></a><ul class="clauses-warp">`
        chapter.querySelectorAll(".page.clauses")!.forEach(clauses => {
            if (clauses.querySelector("h1")) {
                const clausesTitle = clauses.querySelector("h1")!.innerHTML
                const clausesID = clauses.querySelector("h1")!.getAttribute("id")
                const clausesPage = clauses.querySelector(".page-number")!.innerHTML
                chapterElem += `<li class="clauses-item"><a href="#${clausesID}"><span class="clauses-title">${clausesTitle}</span><span class="clauses-page">${clausesPage}</span></a></li>`
            }
        })
        chapterElem += "</ul></li>"
        toc_warp.innerHTML += chapterElem
    })
}
window.onload = () => {
    if(document.querySelector("body.print")){
        image_move()
        page_slice()
        gen_toc()
    }
}
window.addEventListener('resize', () => {
    if(document.querySelector("body.print")){
        image_move()
        page_slice()
    } else {
        const articleHeight = window.getComputedStyle(document.querySelector("main")!).height
        document.getElementById('toc-sidebar')!.style.height = articleHeight
        closeSidebar()
    }
})