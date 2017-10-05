 //1
/* document.getElementsByTagName("div")[0].setAttribute("class", "active"); 

//2

 var child = document.getElementsByTagName("div")[1];  
 var parent = child.parentNode;
 parent.removeChild(child);

 //3
var firstName = document.getElementsByTagName("div")[1];
var nameContent = firstName.firstChild.nodeValue;
nameContent = nameContent.replace('Gunnar','Jakob');
firstName.firstChild.nodeValue = nameContent;*/

//4
/*var newEl = document.createElement("div");
var ogName = document.getElementsByTagName("div")[0];
console.log(ogName);
var nameContent = ogName.innerHTML;
console.log(nameContent);
var newText = document.createTextNode(""+nameContent);
newEl.appendChild(newText);
console.log(newEl);
var position = document.getElementsByTagName("div")[2];
position.appendChild(newEl);*/

//5
/*
Munurinn aðallega felst í því að innerHTML er fljótar og einfaldar að nota en DOM manipulation, en það er erfiðar að velja nákvæmlega hvað þú vilt uppfæra.
DOM Manipulation hinsvegar er betra þegar þú vilt aðeins breyta sérstök element, en ef þú vilt breyta miklu, er það hægar en innerHTML
*/

//6
var newMain = document.createElement("main");
newMain.setAttribute("id", "mainThing");
document.body.appendChild(newMain);

var newPizza1 = document.createElement("div");
var newPizzaName = document.createElement("div");
var newPizzaSize = document.createElement("div");
var newPizzaPrice = document.createElement("div");
var toppingList = document.createElement("div");
var newTopping1 = document.createElement("span");
var newTopping2 = document.createElement("span");
var newTopping3 = document.createElement("span");



newMain.appendChild(newPizza1);

newPizza1.appendChild(newPizzaName);
newPizza1.appendChild(newPizzaSize);
newPizza1.appendChild(newPizzaPrice);

newMain.appendChild(toppingList);

toppingList.appendChild(newTopping1);
toppingList.appendChild(newTopping2);
toppingList.appendChild(newTopping3);

document.getElementsByTagName("div")[0].setAttribute("class","pizza");
document.getElementsByTagName("div")[1].setAttribute("class","pizzaName");
document.getElementsByTagName("div")[2].setAttribute("class","size");
document.getElementsByTagName("div")[3].setAttribute("class","price");
document.getElementsByTagName("div")[4].setAttribute("class","toppingContainer");

document.getElementsByTagName("span")[0].setAttribute("class","topping");
document.getElementsByTagName("span")[1].setAttribute("class","topping");
document.getElementsByTagName("span")[2].setAttribute("class","topping");


var P1Name = document.createTextNode("Pizza with tons of pepperoni");
var P1Size = document.createTextNode("L");
var P1Price = document.createTextNode("2000");

var TPepperoni1 = document.createTextNode("Pepperoni & ");
var TPepperoni2 = document.createTextNode("Pepperoni & ");
var TCheese = document.createTextNode("Cheddar");

newPizzaName.appendChild(P1Name);
newPizzaSize.appendChild(P1Size);
newPizzaPrice.appendChild(P1Price);

newTopping1.appendChild(TPepperoni1);
newTopping2.appendChild(TPepperoni2);
newTopping3.appendChild(TCheese);

//7
/*
XSS er net árás sem felst í því að þvinga neikvæðan kóða á notanda ákveðinni vefsíðu, má segja að sá sem gerir þessa árás lætur javascriptið á vefsíðunni keyra þennan kóða fyrir hann
*/