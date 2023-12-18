///////////////////////////////////////////////// Variabili comuni ai metodi della pagina //////////////////////////////////////////////
const apiUrl = "https://opentdb.com/api.php?amount=50&category=18"
const body = document.getElementsByName("body")[0]
const dinamicStage = document.getElementById("dinamicStage")
const arrayLeaderBoard = []
const arrayRisposte = []
let arrayDomande = []


let nDomandeFatte = 0
let username
let intervalloUnico

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
    console.log("Array domande selezionate")
    console.log(arrayDomande[0])

    dinamicStage.appendChild(await divDinamicoQuestion(arrayDomande[0]))

}

///////////////////////////////////////////////// Metodi comuni ai metodi della pagina /////////////////////////////////////////////////
const fermaTicToc = async function () {
    console.log("Fermato")
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
    let risposta = {
        type: currentQuestion.type,
        question: currentQuestion.question,
        answer: "Non ho risposto",
        all_answer: currentQuestion.arrayRispostePresentate,
        correctAnswer: currentQuestion.correct_answer,
    };

    arrayRisposte.push(risposta);

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
    if (!obgDomanda) {
        delay(2500)
        console.log("Metodo fetch delay")
        return divDinamicoQuestion(obgDomanda)
    }
    console.log(obgDomanda)
    dinamicStage.innerHTML = ``
    const pDomanda = document.createElement('p')
    pDomanda.textContent = (obgDomanda.question)
    pDomanda.style = "font-size: 2rem"

    const divRitorno = document.createElement("div")
    await fermaTicToc();
    divRitorno.appendChild(cerchioTimer(obgDomanda.difficulty))
    divRitorno.appendChild(pDomanda)

    return divRitorno
} // ritorna un div

///////////////////////////////////////////////// INIZIO EFFETTIVA ESECUZIONE /////////////////////////////////////////////

start()
