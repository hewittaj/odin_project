// Adding  a div to our current html file 
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Adding a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';


container.appendChild(paragraph);

// Adding an <h3> with blue text that says “I’m a blue h3!”

const heading = document.createElement('h3');
heading.classList.add("heading");
heading.textContent = "I'm a blue h3!";
heading.style.color = "blue";

container.appendChild(heading);

/* Adding a <div> with a black border and pink background color with the following elements inside of it:
    - another <h1> that says “I’m in a div”
    - a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/

const div = document.createElement('div');
const divHeading = document.createElement('h1');
const divPara = document.createElement('p');

divHeading.textContent = "I'm in a div.";
divPara.textContent = "ME TOO!";

div.classList.add("div");
div.setAttribute("style", "border-style: solid");
div.appendChild(divHeading);
div.appendChild(divPara)
container.appendChild(div);

// // Peer code for method 2
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// Peer code for method 3
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

// Adding multiple listeners to a node list
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});