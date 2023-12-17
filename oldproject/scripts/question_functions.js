// Il link magico altro non era che il link all'API di un progetto OpenSource di un Database di domande di vari argomenti
// Sul sito https://opentdb.com possiamo iscriverci e creare la nostra richiesta al database sotto forma di url su cui fare fetch()

const leaderboardItems = [];
let intervalloUnico;
let currentQuestion;

let resOrLead;



// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// For making a request and fetching a resource, use the fetch() method. It is a global method in both Window and Worker contexts.
// This makes it available in pretty much any context you might want to fetch resources in.

// Metodo brutalmente copiato da https://www.youtube.com/watch?v=-cX5jnQgqSM senza sapere cosa siano le async functions


/////////////////////////////////////////////////////////// TIMER - FRANCESCO   ///////////////////////////////////////////////////
const main = document.getElementById("main");



//modificato per ritornare un valore che non sia fuori dal metodo

/////////////////////////////////////////////////////////// FINE TIMER - FRANCESCO   ///////////////////////////////////////////////////

//////////////////////////////// VINCENZO DICE: HO ACCROCCHIATO IL METODO CHE AGGIORNA IL TIMER E IL METODO CHE MUOVE IL CERCHIO IN UN SOLO DIV ///////////////////




///////////////////////////////////////////////////// ANIMAZIONE DURANTE ATTESA/CARICAMENTO PAGINA ///////////////////////////////////////////////////////////////////
const loadingDiv = document.createElement("div");
loadingDiv.id = "loadingDiv";
loadingDiv.classList.add("clessidra");
divTest.appendChild(loadingDiv);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const generateRandomName = () => {
  const names = [
    "Ali",
    "Eric",
    "Gabriel",
    "Beatriz",
    "Hanna",
    "Diya",
    "Fatima",
  ];

  if (!generateRandomName.usedNames) {
    generateRandomName.usedNames = [];
  }
  if (generateRandomName.usedNames.length === names.length) {
    generateRandomName.usedNames = [];
  }
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * names.length);
  } while (generateRandomName.usedNames.includes(randomIndex));
  generateRandomName.usedNames.push(randomIndex);

  return names[randomIndex];
};
for (let i = 0; i < 10; i++) {
  console.log(generateRandomName());
}

const generateRandomPoints = () => Math.floor(Math.random() * 100) + 1;

const generateRandomImages = () => {
  const images =
    "https://placedog.net/" + (100 + Math.floor(Math.random() * 100));
  return images;
};

function percentualeDiXSuY(x, y) {
  if (y === 0) {
    return "Errore: Il valore di Y non può essere zero.";
  } else {
    return (x / y) * 100;
  }
}
function setUtente() {
  let giuste = checkRisposte()
  let points = Math.floor(percentualeDiXSuY(giuste, arrayRisposte.length))
  var nome = document.getElementById("nomeUtente").value;
  utente = nome;
  console.log("Utente impostato su: " + utente); // Questo è solo per il debug, mostra il valore nella console del browser
  const divNom = document.getElementById("divnomeutente")

  divNom.style.visibility = "hidden"
  const leaderboardItem = document.createElement("div");
  leaderboardItem.classList.add("lboard_memory");
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  leaderboardItem.innerHTML = `
  <div class="img">
      <img class="leaderboardImg" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41xsPjrM-pL._AC_UF894,1000_QL80_.jpg" alt="Foto-Utente" />
  </div>
  <div class="name_barra">
      <p><span></span>${utente}</p>
      <div class="bar_wrap">
          <div class="inner_bar" style="width: ${points}%"></div>
      </div>
  </div>
  <div class="points">${points} points</div>
`;

  leaderboardItems.push({
    element: leaderboardItem,
    points: 100,
    name: "Vincenzo",
    image:
      "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/332322660_229280442872270_1966642424894709984_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IwcCZThU24QAX_YsqMf&_nc_ht=scontent-fco2-1.xx&oh=00_AfA-u19WOGqYi9cergtQwbHZNkwXvdOXXQNx4LT0C0f3RA&oe=6581C12B",
    points
  });
  leaderboardItems.sort((a, b) => b.points - a.points);

}


const inserisci_numeUtente = function () {
  if (typeof username === 'undefined') {
    //////////////////////////////////////////////////////////////////////////////////////APPARE DIV INSERISCI NOME UTENTE
    const casellaNomeUtente = document.createElement("div")
    casellaNomeUtente.id = "divnomeutente"
    casellaNomeUtente.innerHTML = `<div style="position: absolute">
 <p>Inserisci nome utente</p>
 <form action="javascript:void(0);">
     <input type="text" id="nomeUtente" placeholder="Nome Utente">
     <button type="submit" onclick="setUtente()">Imposta Utente</button>
 </form>
</div>`
    document.body.appendChild(casellaNomeUtente)
  } else {
    let giuste = checkRisposte()
    let points = Math.floor(percentualeDiXSuY(giuste, arrayRisposte.length))

    const leaderboardItem = document.createElement("div");
    leaderboardItem.classList.add("lboard_memory");

    leaderboardItem.innerHTML = `
    <div class="img">
        <img class="leaderboardImg" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41xsPjrM-pL._AC_UF894,1000_QL80_.jpg" alt="Foto-Utente" />
    </div>
    <div class="name_barra">
        <p><span></span>${username}</p>
        <div class="bar_wrap">
            <div class="inner_bar" style="width: ${points}%"></div>
        </div>
    </div>
    <div class="points">${points}points</div>
  `;

    leaderboardItems.push({
      element: leaderboardItem,
      points: points,
      name: username,
      image:
        `https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41xsPjrM-pL._AC_UF894,1000_QL80_.jpg`,
    });
    leaderboardItems.sort((a, b) => b.points - a.points);
  }
}

const aggiungiVincenzo = function () {
  const leaderboardItem = document.createElement("div");
  leaderboardItem.classList.add("lboard_memory");

  leaderboardItem.innerHTML = `
  <div class="img">
      <img class="leaderboardImg" src="https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/332322660_229280442872270_1966642424894709984_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IwcCZThU24QAX_YsqMf&_nc_ht=scontent-fco2-1.xx&oh=00_AfA-u19WOGqYi9cergtQwbHZNkwXvdOXXQNx4LT0C0f3RA&oe=6581C12B" alt="Foto-Vincenzo" />
  </div>
  <div class="name_barra">
      <p><span></span>Vincenzo</p>
      <div class="bar_wrap">
          <div class="inner_bar" style="width: 150%"></div>
      </div>
  </div>
  <div class="points">infiniti++ points</div>
`;

  leaderboardItems.push({
    element: leaderboardItem,
    points: 100,
    name: "Vincenzo",
    image:
      "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/332322660_229280442872270_1966642424894709984_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IwcCZThU24QAX_YsqMf&_nc_ht=scontent-fco2-1.xx&oh=00_AfA-u19WOGqYi9cergtQwbHZNkwXvdOXXQNx4LT0C0f3RA&oe=6581C12B",
  });
};

////////////////////////////////////////////////////////  ALEX   /////////////////////////////////////////////////////////////////////////////////////////////
aggiungiVincenzo();

const populateLeaderboard = () => {
  const leaderboardContainer = document.getElementById("leaderboard");
  if (leaderboardItems.length < 10) {
    for (let i = 1; i <= 10; i++) {
      const randomName = generateRandomName();
      const randomPoints = generateRandomPoints();
      const randomImages = generateRandomImages();

      const leaderboardItem = document.createElement("div");
      leaderboardItem.classList.add("lboard_memory");

      leaderboardItem.innerHTML = `
    <div class="img">
        <img class="leaderboardImg" src="${randomImages}" alt="random-image"/>
    </div>
    <div class="name_barra">
        <p><span></span>${randomName}</p>
        <div class="bar_wrap">
            <div class="inner_bar" style="width: ${randomPoints}%"></div>
        </div>
    </div>
    <div class="points">${randomPoints} points</div>
`;

      leaderboardItems.push({
        element: leaderboardItem,
        points: randomPoints,
        name: randomName,
        image: randomImages,
      });
    }
  }




  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  divTest.innerHTML = ``;

  leaderboardItems.sort((a, b) => b.points - a.points);

  const divPodium = document.createElement("div");
  divPodium.classList.add("podium");
  const divGold = document.createElement("div");
  divGold.id = "gold";
  divGold.classList.add("podium-item");
  const goldImg = document.createElement("img");
  goldImg.src = leaderboardItems[0].image;
  const pGold = document.createElement("p");
  pGold.textContent = "1st Place";
  divGold.appendChild(goldImg);
  divGold.appendChild(pGold);

  const divSilver = document.createElement("div");
  divSilver.id = "silver";
  divSilver.classList.add("podium-item");
  const silverImg = document.createElement("img");
  silverImg.src = leaderboardItems[1].image;
  const pSilver = document.createElement("p");
  pSilver.textContent = "2nd Place";
  divSilver.appendChild(silverImg);
  divSilver.appendChild(pSilver);

  const divBronze = document.createElement("div");
  divBronze.id = "bronze";
  divBronze.classList.add("podium-item");
  const bronzeImg = document.createElement("img");
  bronzeImg.src = leaderboardItems[2].image;
  const pBronze = document.createElement("p");
  pBronze.textContent = "3rd Place";
  divBronze.appendChild(bronzeImg);
  divBronze.appendChild(pBronze);

  divPodium.appendChild(divSilver);
  divPodium.appendChild(divGold);
  divPodium.appendChild(divBronze);

  divTest.appendChild(divPodium);

  leaderboardItems.forEach((item, index) => {
    item.element.querySelector(".name_barra p span").textContent = `${index + 1
      }.`;
    leaderboardItems.sort((a, b) => b.points - a.points);

    leaderboardContainer.appendChild(item.element);
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const checkRispostaVX = function (
  rispostaData,
  rispostaGiusta,
  rispostaCasella
) {
  if (rispostaData === rispostaCasella) {
    if (rispostaCasella === rispostaGiusta) {
      return `<i class="fas fa-check" style="color: #00ff4c;"></i>`;
    }
    if (rispostaCasella !== rispostaGiusta) {
      return `<i class="fas fa-times" style="color: #ff0000;"></i>`;
    }
  }
};

const checkRisposte = function () {
  let punti = 0
  for (let i = 0; i < arrayRisposte.length; i++) {
    if (arrayRisposte[i].answer === arrayRisposte[i].correctAnswer) {
      punti++
    }
  }
  return punti
};

const populatePodium = () => {
  const goldElement = document.getElementById("gold");
  const silverElement = document.getElementById("silver");
  const bronzeElement = document.getElementById("bronze");

  const participants = [];

  for (let i = 0; i < 10; i++) {
    participants.push({
      name: leaderboardItems[i].name,
      points: leaderboardItems[i].points,
      image: leaderboardItems[i].image,
    });
  }

  participants.sort((a, b) => b.points - a.points);

  const podiumElements = [goldElement, silverElement, bronzeElement];

  for (let i = 0; i < 3; i++) {
    const podiumItem = podiumElements[i];
    const participant = participants[i];

    podiumItem.querySelector("img").src = participant.image;
    podiumItem.querySelector(
      "p"
    ).textContent = `${participant.name} - ${participant.points} points`;
  }
};

const renderizzaLeaderBoard = function () {
  fermaTicToc();

  divResultleaderboard.style.visibility = "visible";
  divResultleaderboard.innerHTML = `<div class="lboard_section">
      <div class="lboard_item Leaderboard" id="leaderboard">
      </div>
</div>`;

  const divPulsanteLeaderBoard = document.createElement("div");
  const pPulsanteLeaderBoard = document.createElement("p");
  const divPulsanteResultBoard = document.createElement("div");
  const pPulsanteResultBoard = document.createElement("p");
  const divPulsantiSwitchTab = document.createElement("div");
  divPulsantiSwitchTab.id = "divPulsantiSwitchTab";

  pPulsanteLeaderBoard.id = "Leaderboard";
  pPulsanteResultBoard.id = "Risultati";

  pPulsanteLeaderBoard.addEventListener("click", function () {
    renderizzaLeaderBoard();
  });

  pPulsanteResultBoard.addEventListener("click", function () {
    renderizza_risultato();
  });

  pPulsanteLeaderBoard.classList = "switchTab";
  pPulsanteResultBoard.classList = "switchTab";
  pPulsanteLeaderBoard.textContent = "Leaderboard";
  pPulsanteResultBoard.textContent = "Risultati";

  divPulsantiSwitchTab.appendChild(pPulsanteResultBoard);
  divPulsantiSwitchTab.appendChild(pPulsanteLeaderBoard);

  divPulsantiSwitchTab.append(divPulsanteResultBoard);
  divPulsantiSwitchTab.append(divPulsanteLeaderBoard);

  divResultleaderboard.appendChild(divPulsantiSwitchTab);

  populateLeaderboard();
};

const renderizza_risultato = async function () {
  divResultleaderboard.innerHTML = ``;
  divResultleaderboard.style.visibility = "visible";
  divTest.innerHTML = ``;

  const divPulsanteLeaderBoard = document.createElement("div");
  const pPulsanteLeaderBoard = document.createElement("p");
  const divPulsanteResultBoard = document.createElement("div");
  const pPulsanteResultBoard = document.createElement("p");
  const divPulsantiSwitchTab = document.createElement("div");
  divPulsantiSwitchTab.id = "divPulsantiSwitchTab";

  pPulsanteLeaderBoard.id = "Leaderboard";
  pPulsanteResultBoard.id = "Risultati";

  pPulsanteLeaderBoard.addEventListener("click", function () {
    renderizzaLeaderBoard();
  });

  pPulsanteResultBoard.addEventListener("click", function () {
    renderizza_risultato();
  });

  pPulsanteLeaderBoard.classList = "switchTab";
  pPulsanteResultBoard.classList = "switchTab";
  pPulsanteLeaderBoard.textContent = "Leaderboard";
  pPulsanteResultBoard.textContent = "Risultati";

  divPulsantiSwitchTab.appendChild(pPulsanteResultBoard);
  divPulsantiSwitchTab.appendChild(pPulsanteLeaderBoard);

  divPulsantiSwitchTab.append(divPulsanteResultBoard);
  divPulsantiSwitchTab.append(divPulsanteLeaderBoard);

  divResultleaderboard.appendChild(divPulsantiSwitchTab);

  divTest.classList = "divCiambella";
  let totaleDomande = arrayDomande.length;
  let giuste = 0;

  for (let index = 0; index < arrayRisposte.length; index++) {
    if (arrayRisposte[index].correctAnswer === arrayRisposte[index].answer)
      giuste++;
  }
  let sbagliate = totaleDomande - giuste;
  const grafic = graficoCiambella(sbagliate, giuste);
  const quanteGiuste = document.createElement("div");
  quanteGiuste.id = "divQuanteGiuste";
  quanteGiuste.classList = "divSchermataCiambella";
  quanteGiuste.innerHTML = `<p class="txtCiambella">Wrong</p>
  <p class="percentualeCiambella">${Math.floor(
    (sbagliate / totaleDomande) * 100
  )}%</p>
  <p class="quanteCiambella">${sbagliate}/${totaleDomande} questions</p>`;
  divTest.appendChild(quanteGiuste);
  const fraseSuperamentoONo = document.createElement("div");
  fraseSuperamentoONo.classList = "divSchermataCiambella";
  fraseSuperamentoONo.id = "divFraseSuperamentoONo";

  if (giuste > sbagliate) {
    avviaAnimazioneCoriandoli();
    fraseSuperamentoONo.innerHTML = `
    <p class="primaFraseResultCorrect">Congratulations!</p>
    <p class="secondaFraseResultCorrect">You have passed the exam</p>
   <p class="terzaFraseResultCorrect">We'll send you the certificate in few minutes</p>
   <p class="terzaFraseResultCorrect">in few minutes</p>
   <p class="terzaFraseResultCorrect">Check your email(including</p>
   <p class="terzaFraseResultCorrect">promotions / spam folder)</p>`;
    fraseSuperamentoONo.appendChild(grafic);
    divTest.appendChild(fraseSuperamentoONo);
  } else {
    avviaAnimazioneLacrime();
    fraseSuperamentoONo.innerHTML = `
    <p class="primaFraseResultSbagliato ">Dammit!</p>
    <p class="secondaFraseResultSbagliato ">You failed the exam</p>
   <p class="terzaFraseResultSbagliato ">You can always make it up if you want.</p>
   <p class="terzaFraseResultSbagliato "> Ask your teacher</p>
   `;
    fraseSuperamentoONo.appendChild(grafic);
    divTest.appendChild(fraseSuperamentoONo);
  }
  const quanteSbagliate = document.createElement("div");
  quanteSbagliate.id = "divQuanteSbagliate";
  quanteSbagliate.classList = "divSchermataCiambella";
  quanteSbagliate.innerHTML = `<p class="txtCiambella">Correct</p>
  <p class="percentualeCiambella">${Math.floor(
    (giuste / totaleDomande) * 100
  )}%</p>
  <p  class="quanteCiambella">${giuste}/${totaleDomande} questions</p>`;
  divTest.appendChild(quanteSbagliate);
  console.log("Sbagliate " + sbagliate);
  console.log("Giuste " + giuste);
  const bottoneFeedback = document.createElement("button");
  bottoneFeedback.innerText = "Rate Us";
  bottoneFeedback.classList.add("buttonProceed");
  const vaiAltraPagina = function () {
    window.location.href = "../feedbackpage.html";
  };
  bottoneFeedback.addEventListener("click", vaiAltraPagina);
  divTest.appendChild(bottoneFeedback);

  const divRisposteDate = document.createElement("div");
  for (let i = 0; i < arrayRisposte.length; i++) {
    if (arrayRisposte[i].type === `multiple`) {
      const divRisposta = document.createElement("div");
      divRisposta.id = "divRisposta";
      divRisposta.innerHTML = `<div class="casellaQuestionAnswer">
    <h1 class="h1Question">${arrayRisposte[i].question}</h1>
    <div class=rigaRisposte>
    <p class="CasellaRisposta">${checkRispostaVX(
        arrayRisposte[i].answer,
        arrayRisposte[i].correctAnswer,
        arrayRisposte[i].all_answer[0]
      )}  ${arrayRisposte[i].all_answer[0]
        }</p><p class="CasellaRisposta">${checkRispostaVX(
          arrayRisposte[i].answer,
          arrayRisposte[i].correctAnswer,
          arrayRisposte[i].all_answer[1]
        )} ${arrayRisposte[i].all_answer[1]}</p>
    </div>    
    <div class=rigaRisposte>
    <p class="CasellaRisposta">${checkRispostaVX(
          arrayRisposte[i].answer,
          arrayRisposte[i].correctAnswer,
          arrayRisposte[i].all_answer[2]
        )}  ${arrayRisposte[i].all_answer[2]
        }</p><p class="CasellaRisposta">${checkRispostaVX(
          arrayRisposte[i].answer,
          arrayRisposte[i].correctAnswer,
          arrayRisposte[i].all_answer[3]
        )} ${arrayRisposte[i].all_answer[3]}</p>
    </div>
    </div>`;

      divRisposteDate.appendChild(divRisposta);
    } else {
      const divRisposta = document.createElement("div");
      divRisposta.id = "divRisposta";
      divRisposta.innerHTML = `<div div class="casellaQuestionAnswer">
      <h1 class="h1Question">${arrayRisposte[i].question}</h1>
      <div class=rigaRisposte>
      <p class="CasellaRisposta">${checkRispostaVX(
        arrayRisposte[i].answer,
        arrayRisposte[i].correctAnswer,
        arrayRisposte[i].all_answer[0]
      )}  ${arrayRisposte[i].all_answer[0]
        }</p><p class="CasellaRisposta">${checkRispostaVX(
          arrayRisposte[i].answer,
          arrayRisposte[i].correctAnswer,
          arrayRisposte[i].all_answer[1]
        )} ${arrayRisposte[i].all_answer[1]}</p>
      </div></div>`;
      divRisposteDate.appendChild(divRisposta);
    }
  }

  divResultleaderboard.appendChild(divRisposteDate);

  //////////////////////////////////////////////////////////////////////////////////////CONTINUA QUY
};

let arrayDomande = [];



async function addRisposta(
  arrayRispostePresentate,
  indice_risposta_selezionata,
  domanda,
  correct_answer
) {
  let risposta = {
    type: `multiple`,
    question: domanda,
    answer: arrayRispostePresentate[indice_risposta_selezionata],
    all_answer: arrayRispostePresentate,
    correctAnswer: correct_answer,
  };

  arrayRisposte.push(risposta);

  console.log(
    "Lunghezza array risposte: " +
    arrayRisposte.length +
    " lunghezza array domande: " +
    arrayDomande.length
  );

  renderizzaDomande();
}
async function addRispostaBool(bool, domanda, correct_answer) {
  let ans;
  if (bool === "true") {
    ans = "true";
  } else {
    ans = "false";
  }
  risposta = {
    type: `boolean`,
    question: domanda,
    answer: ans,
    all_answer: [`true`, `false`],
    correctAnswer: correct_answer,
  };
  arrayRisposte.push(risposta);
  console.log(
    "Lunghezza array risposte: " +
    arrayRisposte.length +
    " lunghezza array domande: " +
    arrayDomande.length
  );
  renderizzaDomande();
}



const renderizzaDomande = async function () {
  if (arrayDomande.length === 0) {
    arrayDomande = await generaArrayDomande();
  }

  console.log(
    "Di seguito metto l'array risposte accumulate. Non so perchè se metto questa stringa nel prossimo console log smarmella tutto"
  );
  console.log(arrayRisposte);

  divTest.innerHTML = ``;

  if (arrayDomande.length === arrayRisposte.length) {
    divTest.innerHTML = ``;
    ////////////////////////////////////////////////////////////////////////////////////////////ABBREVIA SEQUENZA DOMANDE
    inserisci_numeUtente()
    renderizza_risultato(arrayRisposte);
  } else {
    const nuovaDomandaRenderizzata = await divDinamicoQuestion(
      arrayDomande[nDomandeFatte]
    );

    nDomandeFatte++;
    await divTest.appendChild(nuovaDomandaRenderizzata);
  }
};

renderizzaDomande();
