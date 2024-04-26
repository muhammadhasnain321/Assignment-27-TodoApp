function addTOdo(){
    var todoInput = document.getElementById("todoInput")
    if(todoInput.value){

        
        console.log(todoInput.value);
        var liElement = document.createElement("li");
        var liText = document.createTextNode(todoInput.value);
        liElement.appendChild(liText);
        console.log(liElement);
        
        
        
        var list = document.getElementById("list");
        list.appendChild(liElement);
        
        var editbtn = document.createElement('button');
        var editbtnText = document.createTextNode('edit');
        editbtn.setAttribute("class","edidbtn");
        editbtn.setAttribute("onclick","editLibtn(this)");
        editbtn.appendChild(editbtnText);
        liElement.appendChild(editbtn);
        
        var delbtn = document.createElement('button');
        var delbtnText = document.createTextNode('Delete');
        delbtn.setAttribute("class","delbtn");
        delbtn.setAttribute("onclick","delLibtn(this)");
        delbtn.appendChild(delbtnText);
        liElement.appendChild(delbtn);
        }
        
        input.value = "";
        }
        
        function delLibtn(e){
            e.parentNode.remove();
        }
        
        function editLibtn(e){
            var val = e.parentNode.firstChild.nodeValue;
            var editvalue = prompt("Enter update value", val);
            if(editvalue.value === ""){
                alert("Pleae fill the list...");
            }
            else{
                e.parentNode.firstChild.nodeValue = editvalue
            }
        }
    
    function deletAll(){
        
        var list = document.getElementById("list");
    list.innerHTML =""


}