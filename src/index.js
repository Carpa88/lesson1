import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

document.getElementById('button-addon2').onclick = addItem;
let input = document.getElementById('input');

function addItem () {
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let p = document.createElement('p');
  let a = document.createElement('a');

  div1.className = "text_list_box card";
  div2.className = "card-body";

  input.value = 'dsfbsdr;jk;sejkrbnsk;rjbn';
  
  if (input.value) {
  p.innerHTML = input.value;
  p.className = "card-text";
  
  a.className = "button_delete btn btn-primary";  
  a.innerHTML = "Delete";
  a.href = '#';
  a.onclick = deleteItem;
  
  document.getElementById('container').append(div1);
  div1.append(div2);
  div2.append(p, a);

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