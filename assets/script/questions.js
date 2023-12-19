///////////////////////////////////////////////// Variabili comuni ai metodi della pagina //////////////////////////////////////////////
const apiUrl = "https://opentdb.com/api.php?amount=50&category=15"
const body = document.getElementsByName("body")[0]
const dinamicStage = document.getElementById("dinamicStage")
const arrayLeaderBoard = []
const arrayRisposte = []
let arrayDomande = []


let nDomandeFatte = 0
let username
let intervalloUnico
let currentQuestion = {}
//////////////////////////////////////////////////////// Metodo FETCH /////////////////////////////////////////////////////////
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
const loadQuestion = async function () {
    const result = await fetch(`${apiUrl}`)
    if (result.status === 429) {
        await delay(2500)
        return await loadQuestion()
    }
    const data = await result.json()
    return data.results;
}
///////////////////////////////////////////////// METODO CENTRALE //////////////////////////////////////////////////////////////

const start = async function () {
    ////scarico array///////
    const fullArray = await loadQuestion()
    let timeScore = 0
    const arrayFinale = []
    const newArray = [...fullArray]
    //////seleziono domande per avere 30 minuti/////////////
    while (timeScore < 1800) {
        newArray.forEach((domanda) => {
            if (domanda && timeScore + diffInSecondi(domanda.difficulty) <= 1800) {
                arrayFinale.push(domanda);
                timeScore += diffInSecondi(domanda.difficulty);
            }
        });
    }

    /////////// assegno arrayDomande alla variabile comune di tutta la pagina ///////////
    arrayDomande = [...arrayFinale]

    //filtro le domande che contengono caratteri speciali 
    const specialCharRegex = /[^\w\s]/;
    arrayDomande.filter(obDomanda => !specialCharRegex.test(obDomanda.question));

    console.log("Array domande selezionate")
    console.log(arrayDomande)

    dinamicStage.appendChild(await divDinamicoQuestion(arrayDomande[0]))

}

///////////////////////////////////////////////// Metodi comuni ai metodi della pagina /////////////////////////////////////////////////
const fermaTicToc = async function () {
    console.log("Fermato timer")
    clearInterval(intervalloUnico)
} //killa il timer

const timer = function (difficoltaStringa) {
    let tempo
    if (difficoltaStringa === "easy") {
        tempo = 30
    } else if (difficoltaStringa === "medium") {
        tempo = 60
    } else if (difficoltaStringa === "hard") {
        tempo = 120
    } else {
        console.log("Errore numero inserito nel metodo timer")
        tempo = 0
    }

    function aggiornaTimer() {
        if (tempo >= 1) {
            tempo--
            console.log("Aggiorno tempo")
            if (document.getElementById("nSecondi")) {
                document.getElementById("nSecondi").style = "font-size: 4em;text-shadow: 0 0 10px rgba(255, 255, 255, 0.8)"
                document.getElementById("nSecondi").textContent = tempo
            }
        } else {
            rispostaVuota()
            fermaTicToc()
        }
    }

    intervalloUnico = setInterval(aggiornaTimer, 1000)

    return tempo;
} // setta un metodo interval di nome aggiornaTimer() che aggiorna il testo in base alla stringa easy medium hard ricevuta 

const sendRisposta = function (i) {
    console.log(currentQuestion)
    const risposta = {
        iRisposta: i,
        risposte: [document.getElementById("r0").innerText, document.getElementById("r1").innerText, document.getElementById("r2").innerText, document.getElementById("r3").innerText],
        difficolta: currentQuestion.difficulty,
        tipo: currentQuestion.type,
        difficoltà: currentQuestion.difficulty,
        rispostaGiusta: currentQuestion.correct_answer
    }

    arrayRisposte.push(risposta)
    dinamicStage.appendChild(divDinamicoQuestion(arrayDomande[nDomandeFatte]))
}
const diffInSecondi = function (diffString) {
    switch (diffString) {
        case `easy`:
            return 30
        case `medium`:
            return 60
        case `hard`:
            return 120
        default:
            break
    }
} // serve ancora?

const convertiStringaInSecondiTimer = function (difficoltaStringa) {
    if (difficoltaStringa === "easy") {
        return 30
    } else if (difficoltaStringa === "medium") {
        return 60
    } else if (difficoltaStringa === "hard") {
        return 120
    } else {
        console.log(
            "Errore numero inserito nel metodo convertiStringaInSecondiTimer"
        );
        return 0
    }
} //prende stringa easy medium hard ritorna 30 60 120

function setTextPepato(element, newText) {
    // Imposta l'opacità a 0
    element.style.opacity = '0';
    setTimeout(() => {
        element.textContent = newText;
        element.style.opacity = '1';
    }, 500);
}

const rispostaVuota = async function () {
    const risposta = {
        iRisposta: -1,
        risposte_sbagliate: currentQuestion.arrayRispostePossibili,
        tipo: currentQuestion.type,
        difficoltà: currentQuestion.difficulty
    }

    arrayRisposte.push(risposta);
    console.log(arrayRisposte)
    console.log(
        "Lunghezza array risposte: " +
        arrayRisposte.length +
        " lunghezza array domande: " +
        arrayDomande.length
    )
} // metodo void che pusha una risposta vuota in arrayDomande

//////////////////////////////////////// ELEMENTI HTML DINAMICI //////////////////////////////////////////////////

const graficoCiambella = function (giuste, sbagliate) {
    fermaTicToc();
    const divCanvas = document.createElement("div")
    divCanvas.id = "divCanvas"
    divCanvas.style = `height: 20%;width: 20%;`
    const canvas = document.createElement("canvas")
    canvas.id = "graficoCiambella"
    canvas.width = 600
    canvas.height = 600
    const ctx = canvas.getContext("2d")

    // Dati del grafico
    const dati = {
        labels: [
            'Giuste',
            'Sbagliate'
        ],
        datasets: [{
            data: [giuste, sbagliate],
            backgroundColor: ["#00FFFF", "#D20094"],
            hoverOffset: 4,
            borderWidth: 0
        }]
    };
    // Configurazione del grafico
    const options = {
        cutoutPercentage: 70,
        responsive: true,
        legend: {
            display: false
        },

    };
    // Crea e restituisci il grafico a ciambella
    const chart = new Chart(ctx, {
        type: "doughnut",
        data: dati,
        options: options,
    }).canvas;
    divCanvas.appendChild(chart)
    return divCanvas
}; // ritorna un div

const cerchioTimer = function (difficolta) {
    const cerchioTimerHtml = document.createElement("div")
    const divCerchio = document.createElement("div")
    const divTime = document.createElement("div")
    cerchioTimerHtml.id = "countdown"
    divCerchio.id = "cerchio"
    divTime.id = "time"

    divCerchio.style = "position: absolute"
    switch (difficolta) {
        case "easy":
            divCerchio.innerHTML = `    
              <svg id="svgGenerale">
                <circle class="svgCircle" id="circle30" r="70" cx="80" cy="80"></circle>
              </svg>`
            break
        case "medium":
            divCerchio.innerHTML = `    
              <svg id="svgGenerale">
                <circle class="svgCircle"  id="circle60" r="70" cx="80" cy="80"></circle>
              </svg>`
            break
        case "hard":
            divCerchio.innerHTML = `    
              <svg id="svgGenerale">
                <circle class="svgCircle"  id="circle120" r="70" cx="80" cy="80"></circle>
              </svg>`
            break
    }

    const pseconds = document.createElement("p")
    const nSecondi = document.createElement("p")
    const primanenti = document.createElement("p")

    pseconds.textContent = "seconds"
    nSecondi.id = "nSecondi"
    nSecondi.style = "font-size: 4em;text-shadow: 0 0 10px rgba(255, 255, 255, 0.8)"
    nSecondi.textContent = convertiStringaInSecondiTimer(difficolta);

    nSecondi.textContent = timer(difficolta)
    primanenti.textContent = "remeaning"

    divTime.appendChild(pseconds)
    divTime.appendChild(nSecondi)
    divTime.appendChild(primanenti)

    cerchioTimerHtml.style.width = "160px"
    cerchioTimerHtml.style.height = "160px"

    cerchioTimerHtml.appendChild(divCerchio)
    cerchioTimerHtml.appendChild(divTime)

    return cerchioTimerHtml
} //ritorna un div

const divDinamicoQuestion = async function (obgDomanda) {
    //modifica le variabili per condurre avanti l'esecuzione
    nDomandeFatte++
    currentQuestion = obgDomanda

    if (!obgDomanda) {
        delay(2500)
        return divDinamicoQuestion(obgDomanda)
    }

    dinamicStage.innerHTML = ``
    //question
    const pDomanda = document.createElement('p')
    pDomanda.textContent = (obgDomanda.question)
    pDomanda.id = "pDomanda"
    pDomanda.style = `
    font-size: 2rem;
    max-width: 70%;
    text-align: center;
    font-size: 1.8em;`

    // blocco risposte
    const creaPulsante = function (risposta, i) {
        let stringaPulsante = `<button class="bottoneRisposta" onclick="sendRisposta(${i})" id="r${i}">${risposta}</button>`
        return stringaPulsante
    }

    const divBloccoRisposte = document.createElement("div")
    divBloccoRisposte.id = "bloccoRisposte"

    const divRigaRisposte1 = document.createElement("div")
    divRigaRisposte1.id = "rigaRisposte1"
    const divRigaRisposte2 = document.createElement("div")
    divRigaRisposte2.id = "rigaRisposte2"

    if (obgDomanda.type = "Multiple") {
        const domande_da_proporre = [...obgDomanda.incorrect_answers]
        domande_da_proporre.splice(Math.floor(Math.random() * 3), 0, obgDomanda.correct_answer);

        for (let i = 0; i < 4; i++) {
            if (i < 2) {
                divRigaRisposte1.innerHTML = divRigaRisposte1.innerHTML + creaPulsante(domande_da_proporre[i], i)
            } else {
                divRigaRisposte2.innerHTML = divRigaRisposte2.innerHTML + creaPulsante(domande_da_proporre[i], i)
            }
            divBloccoRisposte.appendChild(divRigaRisposte1)
            divBloccoRisposte.appendChild(divRigaRisposte2)
        }
    } else {
        divRigaRisposte1.appendChild(creaPulsante("True", "true"))
        divRigaRisposte1.appendChild(creaPulsante("False", "false"))
        divBloccoRisposte.appendChild(divRigaRisposte1)
    }

    //// finisco il metodo e ritorno
    const divRitorno = document.createElement("div")
    await fermaTicToc();
    divRitorno.appendChild(cerchioTimer(obgDomanda.difficulty))
    divRitorno.appendChild(pDomanda)
    divRitorno.appendChild(divBloccoRisposte)
    divRitorno.id = "questionStage"
    return divRitorno
} // ritorna un div

///////////////////////////////////////////////// INIZIO EFFETTIVA ESECUZIONE /////////////////////////////////////////////

start()
