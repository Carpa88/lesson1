import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let div = document.createElement('div');
let p = document.createElement('p');
let button = document.createElement('button');
div.className = "text_list-box";

p.innerHTML = "Всем привет! Вы прочитали важное сообщение.";
p.className = "text_list_item";

button.innerText = 'Delete';
button.className = "text_list-button";

document.body.append(div);
div.append(p, button);