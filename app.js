// var div = document.getElementById("main");

// // var h1Element = document.createElement("h1");

// // var h1Text = document.createTextNode("Hello JS");

// // h1Element.appendChild(h1Text);

// // div.appendChild(h1Element);


// // var pElement = document.createElement("P");

// // var pText = document.createTextNode("To change the value of an object's number value, use a simple assignment statement, thesame way you'd assign a value to a plain variable.");

// // pElement.appendChild(pText);

// // div.appendChild(pElement);


// var anchorElement = document.createElement("a");

// var anchorText = document.createTextNode("Google");

// anchorElement.setAttribute("href","https://www.google.com");

// anchorElement.appendChild(anchorText);

// div.appendChild(anchorElement);

// console.log(anchorElement);


var ulElement = document.getElementById("list");

function addTodo(){
    
    var input = document.getElementById("input");

    if(input.value)

    var liElement = document.createElement("li");

    var liText = document.createTextNode(input.value);

    liElement.appendChild(liText);

    // Delete Button create

    var deleteBtnElement = document.createElement('Button');

    var deleteBtnText = document.createTextNode('Delete');

    deleteBtnElement.appendChild(deleteBtnText);

    liElement.appendChild(deleteBtnElement);

    ulElement.appendChild(liElement);

    //  Delete Button create

    // edit button 

    var editBtnElement = document.createElement('Button');

    var editBtnText = document.createTextNode('Edit');

    editBtnElement.appendChild(editBtnText);

    liElement.appendChild(editBtnElement);

    ulElement.appendChild(liElement);

    ulElement.appendChild(liElement);

    // edit button 


    console.log(liElement);

    input.value = "";


}

function deleteAllTodos(){
    olElement.innerHTML = "";
}

