import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let form = document.getElementById('to-do-form');
form.addEventListener('submit', addItem);

let input = document.getElementById('input');

function addItem (e) {
  e.preventDefault();

  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let p = document.createElement('p');
  let label = document.createElement('label');
  let checkbox = document.createElement('input');
  let button = document.createElement('button');
 
  if (input.value) {
  div1.className = "card";
  div2.className = "row align-items-center card-body";
  p.className = "col-11 card-text";

  label.innerHTML = input.value;
  label.className = 'form-check-label';

  checkbox.type = 'checkbox';
  checkbox.className = 'form-check-input';
  checkbox.onchange = lineThrough;
  
  button.className = "btn btn-primary col-1 deleteBtn";  
  button.innerHTML = "Delete";
  button.onclick = deleteItem;
  
  document.getElementById('container').append(div1);
  div1.append(div2);
  div2.append(p, button);
  p.append(label);
  label.prepend(checkbox);

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
 let divDel = this.closest('.card');
 divDel.remove();
};

function lineThrough(){
  if( this.checked ) {
    this.parentNode.classList.add("line-through");
  }else{
    this.parentNode.classList.remove("line-through");
  };
};