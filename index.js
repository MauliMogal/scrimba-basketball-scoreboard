let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

let homeScore = 0;
let guestScore = 0;

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

function add1guest(){
    let update = guestScore + 1;
    guestScore = update;
    guestEl.textContent = update;
 }
 
function add2guest(){
    let update = guestScore + 2;
    guestScore = update;
    guestEl.textContent = update;
 }
 
 function add3guest(){
    let update = guestScore + 3;
    guestScore = update;
    guestEl.textContent = update;
 }