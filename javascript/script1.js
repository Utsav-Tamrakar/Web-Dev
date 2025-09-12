let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations =
 [
  {
    name:"Town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text : "You are in the town square. You see a sign that says \"store\".",
  },
  {
    name: "Store",
    "button text": ["Buy 10 health (10 gold)", "Buy 50 XP (50 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "Cave",
    "button text": ["Fight monster", "Run away", ""],
    "button functions": [fightMonster, goTown, ""],
    text: "You are in a dark cave. You hear a growl."
  }
  
]
//comment
/*Multiline comment */
//Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(locations){
button1.innerText = locations["button text"][0];
  button2.innerText = locations["button text"][1];
  button3.innerText = locations["button text"][2];
  button1.onclick = locations["button functions"][0];
  button2.onclick = locations["button functions"][1];
  button3.onclick = locations["button functions"][2];
  text.innerText = locations.text;
}
function goTown(){
update(locations[0]);
}
function goStore() {
 update(locations[1]);
}
function goCave() {
  update(locations[2]);
}
function fightDragon() {
  console.log("Fighting dragon");
}
function buyHealth(){
  console.log("Buying health");
}
function buyWeapon(){
  console.log("Buying weapon");
}
function fightMonster() {
  console.log("Fighting monster");
  
}
