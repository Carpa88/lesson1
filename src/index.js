import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

document.getElementById('button-addon2').onclick = addItem;
let input = document.getElementById('input');

function addItem () {

  let div = document.createElement('div');
  let p = document.createElement('p');
  let button = document.createElement('button');
  
  div.className = "text_list_box row justify-content-start";
  
  if (input.value) {
  p.innerHTML = input.value;
  p.className = "text_list_item col-11";
  
  button.innerText = 'Delete';
  button.className = "col-1 button_delete btn btn-dark";  
  button.onclick = deleteItem;
  
  document.getElementById('container').append(div);
  div.append(p, button);

  input.value = '';
  
  deleteError();

  }else{
    deleteError();

    p.innerHTML = "Enter to-do-item, please";
    p.className = "error-text";
    document.getElementById('to-do-form').after(p);
  }
};

function deleteError(){
  let error = document.querySelector('.error-text');
  if( error ){  
  error.remove();
  }
}
    
function deleteItem(){
 let divDel = this.closest('.text_list_box');
 divDel.remove();
};