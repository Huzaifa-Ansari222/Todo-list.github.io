const inputBox=document.querySelector('#input-box')
const listContainer=document.getElementById('list-container')
const button=document.querySelector('button')

button.addEventListener('click',function addTask(){
    if(inputBox.value ===''){
        alert("Add your work")
    }
    else{
        let li =document.createElement('li');//make li tag
        
        li.innerHTML=inputBox.value;//add user input in li tag
        listContainer.appendChild(li);// add the li tag and content on list contaienr

        let span=document.createElement('span')
        span.innerHTML='\u00d7';
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
})
// button.addEventListener('click',addTask)

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='SPAN'){//e target-->span
        e.target.parentElement.remove();//span parent-->li
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)//store li data
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();