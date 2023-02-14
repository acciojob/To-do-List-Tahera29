//your code here
var todoValue= document.getElementById("newTodoInput");
var btn= document.getElementById("addTodoBtn");
var ol= document.getElementById("todoList");
function addTodo()
	{
	if(todoValue.value){
	//an empty string should not be submitted
	//we need to create list
	var abc= document.createElement('li');
	abc.textContent= todoValue.value;
	ol.appenChild(li);
	todoValue.value="";
	
	}
}
btn.addEventListener('click',addTodo)
