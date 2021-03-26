import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

document.getElementById('button-addon2').onclick = addItem;
let input = document.getElementById('input');

function addItem () {
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let p = document.createElement('p');
  let label = document.createElement('label');
  let input = document.createElement('input');
  let a = document.createElement('a');

  
  input.value = 'SLint крайне необходим при работе в команде. Зачем? Да опять же, все очень просто! Кто-то привык ставить в конце точку с запятой, кто-то нет, кто-то максимум пишет 80 символов в строку, кто-то 120, а кто-то громоздит вообще сколько душе угодно. В конечно итоге - ваш код или код вашей команды может превратиться в сплошную кашу.';
  
  if (input.value) {
  div1.className = "card";
  div2.className = "card-body";
  p.className = "card-text";

  input.type = 'checkbox';
  input.className = 'form-check-input';
  input.id="flexCheckDefault";
  input.onchange = lineThrough;

  label.innerHTML = input.value;
  label.className = 'form-check-label';
  label.for = 'flexCheckDefault';
  
  a.className = "btn btn-primary";  
  a.innerHTML = "Delete";
  a.href = '#';
  a.onclick = deleteItem;
  
  document.getElementById('container').append(div1);
  div1.append(div2);
  div2.append(p, a);
  p.append(input, label);

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