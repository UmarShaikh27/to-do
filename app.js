var listBox = document.getElementById("listBox")

function addfunc(){
    var todoinp = document.getElementById("todo-inp")
    var jslist = document.createElement("li")
    jslist.className = "thelist"
    var jstxt = document.createTextNode(todoinp.value)
    jslist.appendChild(jstxt)
    
    //append to UL
 
    listBox.appendChild(jslist)

    //logos
    var checkbtn = document.createElement("button")
    checkbtn.innerHTML = "<li class = 'fas fa-check' >"
    
    var editbtn = document.createElement("button")
    editbtn.innerHTML = "<li class = 'fas fa-edit' >"
    
    var delbtn = document.createElement("button")
    delbtn.innerHTML = "<li class = 'fas fa-trash' >"
    
     var mydiv =  document.createElement("div")
    jslist.appendChild(mydiv)

    mydiv.appendChild(checkbtn)
    mydiv.appendChild(editbtn)
    mydiv.appendChild(delbtn)

    mydiv.className = "divlist"

    checkbtn.className = "iconli"
    editbtn.className = "iconli"
    delbtn.className = "iconli"

    checkbtn.setAttribute("onclick" , "checkfunc(this)" )
    editbtn.setAttribute("onclick" , "editfunc(this)" )
    delbtn.setAttribute("onclick" , "delfunc(this)" )

    jslist
}
function delallfunc(){
    listBox.innerHTML = ""
}

//LIST BUTTONS

function checkfunc(x){
    var text = x.parentNode.parentNode
    text.className += " textcut"
    console.log(text);
}
function editfunc(x){ 
    var btn = x.parentNode.parentNode.firstChild.nodeValue
    var theprompt = prompt("Edit you list" , btn)
    x.parentNode.parentNode.firstChild.nodeValue = theprompt
}
function delfunc(x){
    x.parentNode.parentNode.remove()
}


