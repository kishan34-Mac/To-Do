const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(inputBox.value=== ''){    //if input Box Is Empty alert write something..
        alert('You Must Write Something!');
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";    //it use to cross symbol with write text
        li.appendChild(span);
    }
    inputBox.value="";
    savaData();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savaData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
},false);

function savaData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();