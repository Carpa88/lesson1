import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

document.getElementById('button-addon2').onclick = addItem;
let input = document.getElementById('input');

function addItem () {

  let div = document.createElement('div');
  let p = document.createElement('p');
  let button = document.createElement('button');
  
  div.className = "text_list_box";
  
  p.innerHTML = input.value || 'Enter to-do-item, please';
  p.className = "text_list_item";
  
  button.innerText = 'Delete';
  button.className = "button_delete";  
  button.onclick = deleteItem;
  
  document.body.append(div);
  div.append(p, button);

  input.value = '';
};

    
function deleteItem(){
 let divDel = this.closest('.text_list_box');
 divDel.remove();
};