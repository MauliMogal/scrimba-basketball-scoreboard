let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");

let homeScore = 0;
let awayScore = 0;

function add1home(){
    let update = homeScore + 1;
    homeScore = update;
    homeEl.textContent = update;
 }
 
 function add2home(){
    let update = homeScore + 2;
    homeScore = update;
    homeEl.textContent = update;
 }
 
 function add3home(){
    let update = homeScore + 3;
    homeScore = update;
    homeEl.textContent = update;
 }

function add1away(){
    let update = awayScore + 1;
    awayScore = update;
    awayEl.textContent = update;
 }
 
function add2away(){
    let update = awayScore + 2;
    awayScore = update;
    awayEl.textContent = update;
 }
 
 function add3away(){
    let update = awayScore + 3;
    awayScore = update;
    awayEl.textContent = update;
 }