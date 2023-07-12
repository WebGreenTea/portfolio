
var isLoadedMore = false

function hoverProject(ele){ 
    ele.querySelector("span").setAttribute("style", "display: flex;");
}

function mouseLeave(ele){
    ele.querySelector("span").setAttribute("style", "display: none;");
}

function loadLastProject(){
    for(let i = 0;i<3;i++){
        document.getElementById("project_panel").children[i].removeAttribute("hidden");
        setTimeout(function () {
            document.getElementById("project_panel").children[i].style.opacity = 1;
        }, 0)
    }
}

function loadMore(btn){
    if(isLoadedMore){
        let len = document.getElementById("project_panel").children.length-1;
        for(let i = 3; i<len; i++){
            setTimeout(function () {
                document.getElementById("project_panel").children[i].style.opacity = 0;
                document.getElementById("project_panel").children[i].hidden = true;
            }, 0);
        }
        btn.innerHTML = 'more <i class="fa fa-fw fa-angle-down" aria-hidden="true"></i>'
        isLoadedMore = false;
    }else{
        let len = document.getElementById("project_panel").children.length;
        for(let i = 3; i<len; i++){
            document.getElementById("project_panel").children[i].removeAttribute("hidden");
            setTimeout(function () {
                document.getElementById("project_panel").children[i].style.opacity = 1;
            }, 0);
        }
        btn.innerHTML = 'less <i class="fa fa-fw fa-angle-up" aria-hidden="true"></i>'
        isLoadedMore = true;
    }

    
    
    
}