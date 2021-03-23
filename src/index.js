import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

document.getElementById('button-addon2').onclick = addItem;
let input = document.getElementById('input');

function addItem () {

  let div = document.createElement('div');
  let p = document.createElement('p');
  let button = document.createElement('button');
  
  div.className = "text_list_box row justify-content-start";
  
  p.innerHTML = input.value || 'Enter to-do-item, please';
  p.className = "text_list_item col-11";
  
  button.innerText = 'Delete';
  button.className = "col-1 button_delete btn btn-dark";  
  button.onclick = deleteItem;
  
  document.getElementById('container').append(div);
  div.append(p, button);

  input.value = '';
};

    
function deleteItem(){
 let divDel = this.closest('.text_list_box');
 divDel.remove();
};