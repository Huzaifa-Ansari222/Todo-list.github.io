const inputBox=document.querySelector('#input-box')
const listContainer=document.getElementById('list-container')
const button=document.querySelector('button')

button.addEventListener('click',function addTask(){
    if(inputBox.value ===''){
        alert("Add your work")
    }

    else {
        let li = document.createElement('li'); // Create an <li> element

        li.textContent = inputBox.value; // Add user input as text content to the <li> element

        // Create a parent div element
        let spanDiv = document.createElement('div');
        spanDiv.className='span-div'

        // Create the edit span
        let editSpan = document.createElement('span');
        editSpan.className = 'span';
        editSpan.id = 'edit';
        editSpan.textContent ='🖊'; // Set the text content of the edit span

        // Create the remove span
        let removeSpan = document.createElement('span');
        removeSpan.className = 'span';
        removeSpan.id = 'remove';
        removeSpan.textContent = '\u00d7'; // Set the text content of the remove span

        // Append the edit and remove spans to the parent div
        spanDiv.appendChild(editSpan);
        spanDiv.appendChild(removeSpan);

        // Append the parent div to the <li> element
        li.appendChild(spanDiv);      
        listContainer.appendChild(li); // Append the <li> element to the list container
    }

    inputBox.value="";
    //saveData();
})

listContainer.addEventListener('click',function(e){
    const parent =e.target.parentNode;
    const grandparent = parent.parentNode;
    if(e.target.id==='remove'){//e target-->span
        grandparent.remove();//span parent-->li
    }
    //saveData();
})



listContainer.addEventListener('click', function (e) {

    if (e.target.id === 'edit') {
        const li = e.target.parentNode.parentNode;
        const updatedText = prompt("Enter the updated text", li.firstChild.textContent);
        if (updatedText === null) {
            return; // User canceled the prompt, do nothing
        }
        if (updatedText === '') {
            alert("Add your work");
            return; // Do not update if the text is empty
        }
        li.firstChild.textContent = updatedText;

       // saveData();
    }
});


/*function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)//store li data
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}*/
//showData();
