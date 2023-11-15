// Setter opp en hendelse som venter på at hele DOM-strukturen skal lastes
window.addEventListener("DOMContentLoaded", () => {
  // Henter alle spillebrettets ruter, vis-spillere, forkynninger og restart-knappen
  const ruter = Array.from(document.querySelectorAll(".rute"));
  const visSpiller = document.querySelector(".vis-spiller");
  const forkynner = document.querySelector(".forkynner");
  const restartKnapp = document.querySelector("#restart");

  // Initialiserer spillebrettet som en array med 9 tomme strenger og setter den aktive spilleren til 'X'
  let brett = Array(9).fill("");
  let aktivSpiller = "X";

  // Definerer mulige vinnerkombinasjoner på brettet
  const vinnerBetingelser = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Sjekker om den aktive spilleren har oppnådd en vinnerkombinasjon
  function sjekkVinner() {
    return vinnerBetingelser.some((betingelse) => {
      return betingelse.every((i) => {
        return brett[i] === aktivSpiller;
      });
    });
  }

  // Oppdaterer spillstatus etter hver handling; kunngjør vinner eller uavgjort
  function oppdaterSpillStatus() {
    if (sjekkVinner()) {
      forkynne(`vant`);
      return false;
    } else if (!brett.includes("")) {
      forkynne("Uavgjort");
      return false;
    }
    return true;
  }

  // Viser melding om spillets utfall
  function forkynne(melding) {
    // Sjekker om meldingen er "Uavgjort" og formaterer teksten tilsvarende
    if (melding === "Uavgjort") {
      forkynner.innerText = melding;
    } else {
      forkynner.innerHTML = `Spiller <span class="spiller${aktivSpiller}">${aktivSpiller}</span> ${melding}`;
    }
    forkynner.classList.remove("gjem");
  }

  // Behandler brukerhandling (klikk) på en rute
  function brukerAction(rute, index) {
    if (rute.innerText === "" && brett.includes("")) {
      rute.innerText = aktivSpiller;
      rute.classList.add(`spiller${aktivSpiller}`);
      brett[index] = aktivSpiller;

      if (!oppdaterSpillStatus()) return;
      aktivSpiller = aktivSpiller === "X" ? "O" : "X";
      visSpiller.innerText = aktivSpiller;
    }
  }

  // Nullstiller spillet og forbereder for en ny runde
  function restartBrett() {
    brett.fill("");
    aktivSpiller = "X";
    visSpiller.innerText = aktivSpiller;
    forkynner.classList.add("gjem");
    ruter.forEach((rute) => {
      rute.innerText = "";
      rute.className = "rute";
    });
  }

  // Legger til hendelseslyttere for klikk på hvert brettspill og restart-knappen
  ruter.forEach((rute, index) => {
    rute.addEventListener("click", () => brukerAction(rute, index));
  });

  restartKnapp.addEventListener("click", restartBrett);
});
