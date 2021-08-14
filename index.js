let possibleCardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k']
let possibleSuitValues = ['♦', '♥', '♠', '♣'];
function generarCartas() {

    let topSuits=Math.floor(Math.random()*possibleSuitValues.length)
    let topSuit=possibleSuitValues[topSuits];
    let bottomSuit=topSuit;

    let cardValues=Math.floor(Math.random()*possibleCardValues.length)
    let cardValue=possibleCardValues[cardValues];
    
    document.querySelector(".cardValue").innerHTML=cardValue;


    if (topSuit=== '♥' || topSuit === '♦' && bottomSuit=== '♥'|| bottomSuit === '♦') {
        document.querySelector(".topSuit").innerHTML=topSuit;
        document.querySelector(".topSuit").style.color="red"
        document.querySelector(".bottomSuit").innerHTML=bottomSuit;
        document.querySelector(".bottomSuit").style.color="red"
        
    } 
    else if (topSuit!= '♠'|| topSuit !=' ♣') {
        document.querySelector(".topSuit").innerHTML=topSuit;
        document.querySelector(".topSuit").style.color="black"
    } 
    
    else {
        document.querySelector(".topSuit").style.color="black"
        bottomSuit.style.color = "black";
    };
    document.querySelector(".bottomSuit").innerHTML=bottomSuit;
    
    console.log(cardComplete)
    console.log(topSuit);
    console.log(bottomSuit);
    console.log(cardValue);
    
    
}
generarCartas();