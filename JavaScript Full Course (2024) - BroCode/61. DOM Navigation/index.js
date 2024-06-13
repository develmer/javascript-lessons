/*
    DOM Navigation - The process of navigating through the structure of an HTML document using JavaScript
*/

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

const ulElements = document.querySelectorAll("ul");
