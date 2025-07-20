import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse(){
  var who = ['The dog ','My grandma ','The mailman ','My bird '];
  var action = ['ate ','peed on ','crushed ','broke '];
  var what = ['my homework ','my phone ','the car '];
  var when = ['before class','while I was sleeping','while I was exercising','during my lunch','while I was praying'];

  var whoPart =who[Math.floor(Math.random() * who.length)];
  var actionPart = action[Math.floor(Math.random() * action.length)];
  var whatPart =what[Math.floor(Math.random() * what.length)];
  var whenPart =when[Math.floor(Math.random() * when.length)];
  return whoPart+''+actionPart+''+whatPart+''+whenPart;
}
function showExcuse() {
  var excuseElement = document.getElementById('excuse');
  excuseElement.innerHTML=generateExcuse();
}
document.addEventListener('DOMContentLoaded', function () {
  showExcuse(); // initial excuse

  var button = document.getElementById('generate-btn');
  button.addEventListener('click', showExcuse);
});
  console.log("Hello Rigo from the console!");

