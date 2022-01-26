// Add a <div> with text that says "This is the glorious text-content!"
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
content.textContent.style.color = "red";

container.appendChild(content);

// Add a <p> with red text that says "Hey, I'm red!"
// const paragraph = document.querySelector("#container");
// const paragraphContent = document.createElement('paragraph');
// paragraphContent.classList.add('paragraphContent');
// paragraphContent.textContent = "Hey I'm red!";
// paragraphContent.style.color = "red";

// container.appendChild(paragraphContent);


// Add an <h3> with blue text that says “I’m a blue h3!”

/**
 * Add a <div> with a black border and pink background color with the following elements inside of it: 
 *  - another <h1> that says “I’m in a div”
 *  - a <p> that says “ME TOO!”
 *  - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
 **/