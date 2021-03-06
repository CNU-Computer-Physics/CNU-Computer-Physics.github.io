"use strict";
function openSidebar() {
    // 모바일 버전에서 사이드바 열기
    var articleHeight = window.getComputedStyle(document.querySelector("main")).height;
    document.getElementById('close-sidebar').style.display = 'block';
    document.getElementById('toc-sidebar').classList.add("show");
    document.getElementById('toc-sidebar').style.height = articleHeight;
}
function closeSidebar() {
    // 모바일 버전에서 사이드바 닫기
    document.getElementById('close-sidebar').style.display = 'none';
    document.getElementById('toc-sidebar').classList.remove("show");
}
function image_move() {
    // 프린트용 페이지에서 GIF이미지를 PNG로 변경
    document.querySelectorAll("p>img[src$='.gif']").forEach(function (elem) {
        var src = elem.getAttribute("src");
        elem.setAttribute("src", src.replace(".gif", ".png"));
    });
}
// 페이지 자르기 함수
function page_slice() {
    // 기준 높이를 잡을 페이지로부터 랜더링한 높이를 기준 높이로 출력
    var refHeight = window.getComputedStyle(document.querySelector("div.page.title")).height;
    document.querySelectorAll("div.page:not(.title)").forEach(function (elem) {
        var sub = 1;
        var refPage = elem;
        var newPage = document.createElement("div");
        var child;
        newPage.setAttribute("class", elem.className);
        while (true) {
            // 모든 페이지가 기준 크기보다 작아질 때까지 페이지 분할 반복
            if (refPage.lastElementChild) {
                child = refPage.lastElementChild.cloneNode(true);
            }
            else {
                break;
            }
            if (window.getComputedStyle(refPage).height > refHeight) {
                // 기존 페이지의 높이가 기준높이보다 크면
                // 기존 페이지의 마지막 자식 노드를 새 페이지로 이동
                if (newPage.childNodes[0]) {
                    newPage.insertBefore(child, newPage.childNodes[0]);
                }
                else {
                    newPage.appendChild(child);
                }
                refPage.removeChild(refPage.lastElementChild);
            }
            else if (window.getComputedStyle(newPage).height > refHeight) {
                // 새 페이지의 높이가 기준 높이보다 크면 새 페이지 생성
                sub++;
                newPage.innerHTML += '<span class="page-number"></span>';
                refPage.after(newPage);
                refPage = newPage;
                newPage = document.createElement("div");
                newPage.setAttribute("class", elem.className);
            }
            else if (newPage.innerHTML != "") {
                // 새 페이지를 기존 페이지 뒤에 추가
                newPage.innerHTML += '<span class="page-number"></span>';
                refPage.after(newPage);
                break;
            }
            else {
                break;
            }
        }
    });
}
function gen_toc() {
    // 페이지 번호 생성
    document.querySelectorAll("div.page").forEach(function (elem, idx) {
        var pageNumber = elem.querySelector(".page-number");
        if (pageNumber)
            pageNumber.innerHTML = "" + idx;
    });
    // 목차 셋 생성
    var toc_warp = document.getElementById("textbook-toc");
    document.querySelectorAll("div.warpper.chapter").forEach(function (chapter) {
        var chapterTitle = chapter.querySelector(".page.chapter h1").innerHTML;
        var chapterID = chapter.querySelector(".page.chapter h1").getAttribute("id");
        var chapterPage = chapter.querySelector(".page.chapter .page-number").innerHTML;
        var chapterElem = "<li class=\"chapter\"><a href=\"#" + chapterID + "\"><span class=\"chapter-title\">" + chapterTitle + "</span><span class=\"chapter-page\">" + chapterPage + "</span></a><ul class=\"clauses-warp\">";
        chapter.querySelectorAll(".page.clauses").forEach(function (clauses) {
            if (clauses.querySelector("h1")) {
                var clausesTitle = clauses.querySelector("h1").innerHTML;
                var clausesID = clauses.querySelector("h1").getAttribute("id");
                var clausesPage = clauses.querySelector(".page-number").innerHTML;
                chapterElem += "<li class=\"clauses-item\"><a href=\"#" + clausesID + "\"><span class=\"clauses-title\">" + clausesTitle + "</span><span class=\"clauses-page\">" + clausesPage + "</span></a></li>";
            }
        });
        chapterElem += "</ul></li>";
        toc_warp.innerHTML += chapterElem;
    });
}
window.onload = function () {
    if (document.querySelector("body.print")) {
        image_move();
        page_slice();
        gen_toc();
    }
};
window.addEventListener('resize', function () {
    if (document.querySelector("body.print")) {
        image_move();
        page_slice();
    }
    else {
        var articleHeight = window.getComputedStyle(document.querySelector("main")).height;
        document.getElementById('toc-sidebar').style.height = articleHeight;
        closeSidebar();
    }
});
