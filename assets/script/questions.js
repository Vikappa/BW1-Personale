import divDomanda from "./divDomanda.js"
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
const decodificaCaratteriHTML = (arrayQuestions) => {

    const htmlEntities = {
        '&quot;': '"',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#039;': "'"
        // Aggiungi altre entità qui se necessario
      }

for (let index = 0; index < arrayQuestions.length; index++) {
    arrayQuestions[index].question = arrayQuestions[index].question.replace(/&quot;|&amp;|&lt;|&gt;/g, (entity) => htmlEntities[entity]);
}

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

const fetchQuestions = async () => {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        arrayDomande = data.results
        let newArray = []
        //////seleziono domande per avere 30 minuti/////////////
        let timeScore = 0

        while (timeScore < 1800) {
            arrayDomande.forEach((domanda) => {
                if (domanda && timeScore + diffInSecondi(domanda.difficulty) <= 1800) {
                    newArray.push(domanda);
                    timeScore += diffInSecondi(domanda.difficulty);
                }
            })
        }
        console.log(newArray)
        start(newArray)
    } catch (error) {
        console.log(error)
    }
}

const start = (arrayQuestions) => {

decodificaCaratteriHTML(arrayQuestions)

dinamicStage.innerHTML = ``
dinamicStage.appendChild(divDomanda(arrayQuestions[0]))

}


///////////////////////////////////////////////// INIZIO EFFETTIVA ESECUZIONE /////////////////////////////////////////////

fetchQuestions()

