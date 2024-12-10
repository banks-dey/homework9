
//const header = document.getElementById('header');
//header.style.backgroundColor = 'blue';
//header.style.color = 'white';
//header.innerHTML = 'Learning How to Manipulate the DOM using JS 💪🏼 ';

//const para1 = document.getElementById('para1');
//para1.style.backgroundColor = 'gray';
//para1.style.color = 'black';
//para1.innerHTML = 'I now know how DOM is 🤩 ';

//const para2 = document.getElementById('para2');
//para2.style.backgroundColor = 'yellow';
//para2.style.color = 'black';
//para2.innerHTML = 'I know how to select / access elements in the DOM 📚 ';

//const para3 = document.getElementById('para3');
//para3.style.backgroundColor = 'green';
//para3.style.color = 'white';
//para3.innerHTML = 'I know to use the style methods to change the style stle of the element in the DOM ✔️';

//const para4 = document.getElementById('para4');
//para4.style.backgroundColor = 'purple';
//para4.style.color = 'black';
//para4.innerHTML = 'I know how the styling properties differ in JS from CSS  ';

//const para5 = document.getElementById('para5');
//para5.style.backgroundColor = 'black';
//para5.style.color = 'white';
//para5.innerHTML = 'Yes I did it !! I manipulated the DOM and styled  my elements 🤩🤩🤩';


// Select elements
const header = document.getElementById('header');
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para3 = document.getElementById('para3');
const para4 = document.getElementById('para4');
const para5 = document.getElementById('para5');


header.addEventListener('click', () => {
    header.style.backgroundColor = 'orange';
    header.style.fontSize = '2.5rem';
    header.innerHTML = 'I know now what DOM is 👍';
});

para1.addEventListener('click', () => {
    para1.style.backgroundColor = '#ADD8E6'; 
    para1.style.color = 'black';
    para1.innerHTML = 'I know how to access/select elements . the DOM 👊🏼';
});

para2.addEventListener('click', () => {
    para2.style.backgroundColor = 'lightgreen';
    para2.style.color = 'black';
    para2.innerHTML = 'I know how to use the style methods to change the styleof an element in the DOM ✔️ ';
});

para3.addEventListener('click', () => {
    para3.style.backgroundColor = 'gold';
    para3.style.color = 'black';
    para3.innerHTML = 'I know the styling properties differ in JS from CSS ✨';
});

para4.addEventListener('click', () => {
    para4.style.backgroundColor = 'pink';
    para4.style.color = 'black';
    para4.innerHTML = ' Styling is easy with JS! 💅';
});

para5.addEventListener('click', () => {
    para5.style.backgroundColor = 'red';
    para5.style.color = 'white';
    para5.innerHTML = 'Yes I did it!I manipulated the DOM and styles my elements 🚀';
});