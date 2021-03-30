import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let form = document.getElementById('to-do-form');
form.addEventListener('submit', addItem);

let input = document.getElementById('input');

function addItem () {
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let p = document.createElement('p');
  let label = document.createElement('label');
  let checkbox = document.createElement('input');
  let button = document.createElement('button');
 
  if (input.value) {
  div1.className = "card";
  div2.className = "card-body row";
  p.className = "card-text col-11";

  label.innerHTML = input.value;
  label.className = 'form-check-label';
  label.onclick = chengeCheckbox;

  checkbox.type = 'checkbox';
  checkbox.className = 'form-check-input';
  checkbox.onchange = lineThrough;
  
  button.className = "btn btn-primary col-1 deleteBtn";  
  button.innerHTML = "Delete";
  button.href = '#';
  button.onclick = deleteItem;
  
  document.getElementById('container').append(div1);
  div1.append(div2);
  div2.append(p, button);
  p.append(checkbox, label);

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
    this.nextElementSibling.classList.add("line-through");
  }else{
    this.nextElementSibling.classList.remove("line-through");
  };
};

function chengeCheckbox() {
  let check = this.previousSibling;
  check.checked = check.checked ? false : true;
  lineThrough.apply(check);
};