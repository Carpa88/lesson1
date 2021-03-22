import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

document.getElementById('addItemButton').onclick = addItem;

function addItem () {

  let div = document.createElement('div');
  let p = document.createElement('p');
  let button = document.createElement('button');
  
  div.className = "text_list_box";
  
  p.innerHTML = "To do Item.";
  p.className = "text_list_item";
  
  button.innerText = 'Delete';
  button.className = "button_delete";  
  button.onclick = deleteItem;
  
  document.body.append(div);
  div.append(p, button);
};

    
function deleteItem(){
 let divDel = this.closest('.text_list_box');
 divDel.remove();
};