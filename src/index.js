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
  let a = document.createElement('a');
  
  input.value = 'Get started with Bootstrap via npm with our starter project! Head to the twbs/bootstrap-npm-starter template repository to see how to build and customize Bootstrap in your own npm project. Includes Sass compiler, Autoprefixer, Stylelint, PurgeCSS, and Bootstrap Icons.'

  if (input.value) {
  div1.className = "card";
  div2.className = "card-body";
  p.className = "card-text";

  label.innerHTML = input.value;
  label.className = 'form-check-label';
  
  a.className = "btn btn-primary";  
  a.innerHTML = "Delete";
  a.href = '#';
  a.onclick = deleteItem;
  
  document.getElementById('container').appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(p, a);
  p.appendChild(label);
  label.insertAdjacentHTML('afterbegin', '<input type="checkbox" class="form-check-input" onchange="lineThrough()"></input>');
  

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