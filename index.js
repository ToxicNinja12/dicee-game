// To hide the placeholder text before script execution.
document.querySelector("h1.heading-placeholder").classList.add("vanish");


function dicee(playerNumber) {
  const dieRoll = Math.ceil(Math.random() * 6);
  const player = document.querySelector(".dicee-container.player" + playerNumber);

  // Odd numbers have a dot in the middle while even numbers don't.
  if (dieRoll % 2 === 0) {
    player.querySelector(".dot1").classList.add("hide");

    // The dots gradually decrease as the number decrease.
    if (dieRoll < 6) {
      player.querySelector(".dot6").classList.add("hide");
      player.querySelector(".dot7").classList.add("hide");

      if (dieRoll < 4) {
        player.querySelector(".dot4").classList.add("hide");
        player.querySelector(".dot5").classList.add("hide");
      }
    }
  } else {
    player.querySelector(".dot6").classList.add("hide");
    player.querySelector(".dot7").classList.add("hide");

    if (dieRoll < 5) {
      player.querySelector(".dot4").classList.add("hide");
      player.querySelector(".dot5").classList.add("hide");
      
      if (dieRoll < 3) {
        player.querySelector(".dot2").classList.add("hide");
        player.querySelector(".dot3").classList.add("hide");
      }
    }
  }

  console.log("Player" + playerNumber + ": " + dieRoll)
  return dieRoll
}


const player1 = dicee(1);
const player2 = dicee(2);

if (player1 > player2) {
  console.log("Player1 won!")
  document.querySelector("h1.heading-player1").classList.remove("vanish");

} else if (player1 < player2) {
  console.log("Player2 won!")
  document.querySelector("h1.heading-player2").classList.remove("vanish");

} else {
  console.log("It's a draw!")
  document.querySelector("h1.heading-draw").classList.remove("vanish");

}