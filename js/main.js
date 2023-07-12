
var isLoadedMore = false
var defaultPanelSize = 0;
var fullPanelSize = 0;
var panelLen = 0;
var project_panel = null;
var browserZoomLevel = 0;


function detectNewSize(){
    // let project_panel = document.getElementById("project_panel");
    resetsize();
    let NewbrowserZoomLevel = Math.round(window.devicePixelRatio * 100);
    if(NewbrowserZoomLevel !== browserZoomLevel){
        browserZoomLevel = NewbrowserZoomLevel
        resetsize();
    }
    
}

function resetsize(){
    project_panel.classList.remove("project-panel")
    if(isLoadedMore){
        fullPanelSize=0;
        for(let i = 0;i<panelLen;i++){
            console.log(project_panel.children[i].offsetHeight)
            fullPanelSize+=project_panel.children[i].offsetHeight
        }
        console.log(fullPanelSize)
        project_panel.style.height = fullPanelSize+"px";
    }else{
        defaultPanelSize = project_panel.children[1].offsetHeight+project_panel.children[0].offsetHeight+project_panel.children[panelLen-1].offsetHeight;
        project_panel.style.height = defaultPanelSize+"px";
    }
    project_panel.classList.add('project-panel')
}

function hoverProject(ele){ 
    ele.querySelector("span").setAttribute("style", "display: flex;");
}

function mouseLeave(ele){
    ele.querySelector("span").setAttribute("style", "display: none;");
}

function onTransitionEnd(){
    project_panel.style.overflow = null;
}

function loadLastProject(){
    project_panel = document.getElementById("project_panel");
    project_panel.addEventListener("webkitTransitionEnd", onTransitionEnd);
    project_panel.addEventListener("transitionend", onTransitionEnd);
    browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    panelLen = project_panel.children.length;
    defaultPanelSize = project_panel.children[1].offsetHeight+project_panel.children[0].offsetHeight+project_panel.children[panelLen-1].offsetHeight;
    project_panel.style.height = defaultPanelSize+"px";
    
    for(let i = 0;i<panelLen;i++){
        console.log(project_panel.children[i].offsetHeight)
        fullPanelSize+=project_panel.children[i].offsetHeight
    }
    console.log(fullPanelSize)
    // project_panel.style.maxHeight = defaultPanelSize+"px";
    
    for(let i = 2;i<panelLen-1;i++){
        project_panel.children[i].style.display = "none";
    }

    // for(let i = 0;i<3;i++){
    //     document.getElementById("project_panel").children[i].removeAttribute("hidden");
    //     setTimeout(function () {
    //         document.getElementById("project_panel").children[i].style.opacity = 1;
    //     }, 0)
    // }
}

function loadMore(btn){
    // let project_panel = document.getElementById("project_panel");
    if(isLoadedMore){
        project_panel.style.height = defaultPanelSize+"px";
        for(let i = 2;i<panelLen-1;i++){
            project_panel.children[i].style.display = "none";
        }
        btn.innerHTML = 'more <i class="fa fa-fw fa-angle-down" aria-hidden="true"></i>'
        isLoadedMore = false;
    }else{
        project_panel.style.height = fullPanelSize+"px";
        project_panel.style.overflow = "hidden";
        for(let i = 2;i<panelLen-1;i++){
            project_panel.children[i].style.display = "block";
        }
        btn.innerHTML = 'less <i class="fa fa-fw fa-angle-up" aria-hidden="true"></i>'
        isLoadedMore = true;
        
    }






    // if(isLoadedMore){
    //     let len = document.getElementById("project_panel").children.length-1;
    //     for(let i = 3; i<len; i++){
    //         setTimeout(function () {
    //             document.getElementById("project_panel").children[i].style.opacity = 0;
    //             document.getElementById("project_panel").children[i].hidden = true;
    //         }, 0);
    //     }
    //     btn.innerHTML = 'more <i class="fa fa-fw fa-angle-down" aria-hidden="true"></i>'
    //     isLoadedMore = false;
    // }else{
    //     let len = document.getElementById("project_panel").children.length;
    //     for(let i = 3; i<len; i++){
    //         document.getElementById("project_panel").children[i].removeAttribute("hidden");
    //         setTimeout(function () {
    //             document.getElementById("project_panel").children[i].style.opacity = 1;
    //         }, 0);
    //     }
    //     btn.innerHTML = 'less <i class="fa fa-fw fa-angle-up" aria-hidden="true"></i>'
    //     isLoadedMore = true;
    // }

    
    
    
}