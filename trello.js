
let btn1=document.querySelector("#add");

btn1.addEventListener('click',addTodo);
function addTodo(){
var input=document.querySelector('#input');
var item=input.value;
let ul;
ul=document.querySelector('#list');
var textnode=document.createTextNode(item);


if (item==='') {
   alert("hey check your input")
}
else {
// create li
  var li=document.createElement('li');
// create a checkbox
  var checkbox=document.createElement('input');
  checkbox.type='checkbox';
  checkbox.setAttribute('id','check')
// create a label
var label=document.createElement('label');
// add this elements
//ul.appendChild(label);
li.appendChild(checkbox);
label.appendChild(textnode);
li.appendChild(label);
ul.insertBefore(li,ul.childNodes[0]);

setTimeout(()=>li.className='visual',1)



input.value=""
}

}

let btn2=document.querySelector("#remove");
console.log(btn2);
btn2.addEventListener('click',removeTodo);

function removeTodo(){
  ul=document.querySelector('#list');
let li=ul.children;
for (var i = 0; i < li.length; i++)
     {
      while (li[i].children[0].checked) {
 ul.removeChild(li[i])
      }
     }
}
foo.children[i].tagName
