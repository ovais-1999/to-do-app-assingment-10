var list = document.getElementById("listitems");

function addtask(){
    var input = document.getElementById("input");
    var li = document.createElement("li");
    li.setAttribute("id", "abc")
    var liTexNode = document.createTextNode(input.value + "  ");
    li.appendChild(liTexNode)
    list.appendChild(li).style.color = "white";
    list.appendChild(li).style.fontWeight = "Bold";
    input.value = "";

    var deleteAnchor = document.createElement("a");
    var deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class","far fa-trash-alt");
    deleteIcon.setAttribute("id","deleteicon");
    deleteAnchor.setAttribute("onclick","mydelete(this)");
    deleteAnchor.appendChild(deleteIcon);
    li.appendChild(deleteAnchor);
    

    var editBtn = document.createElement("button");
    var editNode = document.createTextNode("Edit");
    editBtn.setAttribute("class","btn btn-light btn-sm");
    editBtn.setAttribute("type","button");
    editBtn.setAttribute("id","btn");
    editBtn.setAttribute("onclick","myEdit(this)");
    editBtn.appendChild(editNode);
    li.appendChild(editBtn);    

}

function  mydelete(e){
    e.parentNode.remove();
}
function deletealltask(){
    list.innerHTML = "";
}
function myEdit(e){
    var value = prompt("Enter Up Dated Value", e.parentNode.firstChild.nodeValue);

    e.parentNode.firstChild.nodeValue = value;
}