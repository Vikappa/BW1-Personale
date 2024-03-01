import initialLeaderBoard from './mockupLeaderboard.js'
const listaPartecipante = document.getElementById('resultList')
const risultatiRisposta = document.getElementById('yourResult')
 const arrayDomande = sessionStorage.getItem("arrayDomande")? JSON.parse(sessionStorage.getItem("arrayDomande")) : initialLeaderboard
 const arrayRisposte = sessionStorage.getItem("arrayRisposte")? JSON.parse(sessionStorage.getItem("arrayRisposte")) : []
 
 const calcolaPercentualeRisposteCorrette = function(arrayDomande, arrayRisposte) {
    let risposteCorrette = 0;
    
    if (arrayDomande.length !== arrayRisposte.length) {
        console.error("Gli array delle domande e delle risposte non corrispondono!")
        return 0
    }

    for (let i = 0; i < arrayRisposte.length; i++) {
        let rispostaUtente = arrayRisposte[i].userAnswer.toLowerCase()
        let rispostaCorretta = arrayDomande[i].correct_answer.toLowerCase()

        if (arrayRisposte[i].type === "boolean") {
            if (rispostaUtente === "vero") rispostaUtente = "true"
            if (rispostaUtente === "falso") rispostaUtente = "false"
        }

        if (rispostaUtente === rispostaCorretta) {
            risposteCorrette++
        }
    }

    const percentualeCorrettezza = (risposteCorrette / arrayRisposte.length) * 100

    const leaderboard = initialLeaderBoard

    const nuovoPartecipante = {
        nomePartecipante: sessionStorage.getItem("nomePartecipante"),
        scorePartecipante: percentualeCorrettezza.toFixed(2),
        profilepic: sessionStorage.getItem("profilePic") 
    }

    const caricati = localStorage.getItem("leaderboard")
    const strinCaricati = JSON.parse(caricati)

    for (let index = 0; index < strinCaricati.length; index++) {
        leaderboard.push(strinCaricati[index])
    }

    leaderboard.push(nuovoPartecipante)
}

calcolaPercentualeRisposteCorrette(arrayDomande, arrayRisposte)

 
 arrayRisposte.forEach(element => {
        if(element.userAnswer === "Falso"){
            element.userAnswer = "False"
        }
        if(element.userAnswer === "Falso"){
            element.userAnswer = "False"
        }
});
const bottoniTab = document.querySelectorAll(".switchButton");
bottoniTab.forEach((bottone, index) => {
    bottone.addEventListener("click", () => {
        listaPartecipante.classList.remove('invisibile');
        risultatiRisposta.classList.remove('invisibile');
        if (index === 1) {
            risultatiRisposta.classList.add('invisibile');
        } else if (index === 0) {
            listaPartecipante.classList.add('invisibile')
        }
    });
})

const divRisposta = function(obgRisposta, obgDomanda){
    const wrapper = document.createElement('div')
    wrapper.style.display = "flex"
    wrapper.style.flexDirection = "column"
    wrapper.className = 'wrapper divRisposta'

    const testoDomanda = document.createElement('h5')
    testoDomanda.innerText = obgRisposta.question
    wrapper.appendChild(testoDomanda)

    let risposteDate = []

    for (let index = 0; index < obgDomanda.incorrect_answers.length; index++) {
        const divRis = document.createElement('div')
        divRis.style.display = "flex"
        divRis.style.gap= "3px"
        divRis.style.alignItems = "center"
        const testoRis = document.createElement('p')
        testoRis.style.margin = "0"
        testoRis.innerText = obgDomanda.incorrect_answers[index]

        const icona = document.createElement('i');
        icona.classList.add('fa', 'fa-xmark');
        icona.style.color = "#B197FC";
        divRis.appendChild(testoRis)

        if(obgDomanda.incorrect_answers[index] === obgRisposta.userAnswer){
            divRis.appendChild(icona)
        }

        risposteDate.push(divRis)
    }

    const divRis = document.createElement('div')
    divRis.style.display = "flex"
    divRis.style.gap= "3px"
    divRis.style.alignItems = "center"

    const testoRis = document.createElement('p')
    testoRis.style.margin = "0"
    testoRis.innerText = obgDomanda.correct_answer

    const icona = document.createElement('i');
    icona.classList.add('fa', 'fa-check');
    icona.style.color = "#63E6BE";
    risposteDate.push(divRis)
    divRis.appendChild(testoRis)
    
        if(obgDomanda.correct_answer === obgRisposta.userAnswer){
            divRis.appendChild(icona)
            divRis.classList.add("correctAnswer")
        }    
    

    risposteDate.forEach(element => {
        wrapper.appendChild(element)
    })

    return wrapper
}

const divRisposte = function(){
    const wrapper = document.createElement('div')
    wrapper.style.display = "flex"
    wrapper.style.flexDirection = "column"

    for (let index = 0; index < arrayRisposte.length; index++) {
        wrapper.appendChild(divRisposta(arrayRisposte[index], arrayDomande[index]))
    }

    return wrapper
}

const divPartecipante = function(partecipante){
    const wrapper = document.createElement('div')
    wrapper.style.display = "flex"
    wrapper.style.height = "100px"
    wrapper.style.margin = "10px"

    const wrapperImg = document.createElement('div')
    const partecipanteImg = document.createElement('img')
    partecipanteImg.src = partecipante.profilepic
    partecipanteImg.style.borderRadius = "100%"
    partecipanteImg.style.height = "auto"
    partecipanteImg.style.width = "100%"
    partecipanteImg.classList.add("profileImageLeaderboard")
    wrapperImg.style.width = "20%"
    wrapperImg.style.height = "100%"
    wrapperImg.style.display = "flex"
    wrapperImg.style.flexDirection = "column"
    wrapperImg.style.justifyContent = "center"

    wrapperImg.appendChild(partecipanteImg)

    wrapper.appendChild(wrapperImg)

    const divPartecipanteRitorno = document.createElement('div')
    divPartecipanteRitorno.style.display = "flex";
    divPartecipanteRitorno.style.flexDirection = "column";
    divPartecipanteRitorno.style.margin = "10px";
    divPartecipanteRitorno.style.padding = "10px";
    divPartecipanteRitorno.style.boxShadow = "0px 2px 4px rgba(0,0,0,0.1)";
    divPartecipanteRitorno.style.width = "80%"
    divPartecipanteRitorno.style.margin = "0"

    const rigaPartecipante = document.createElement('div')
    rigaPartecipante.style.display = "flex";
    rigaPartecipante.style.justifyContent = "space-between";
    rigaPartecipante.style.marginBottom = "5px";

    const nomePartecipante = document.createElement("p")
    nomePartecipante.style.fontWeight = "bold";
    nomePartecipante.style.margin = "0";

    const scorePartecipante = document.createElement("p")
    scorePartecipante.style.margin = "0";

    nomePartecipante.innerText = partecipante.nomePartecipante;
    scorePartecipante.innerText = partecipante.scorePartecipante + "%";

    rigaPartecipante.appendChild(nomePartecipante);
    rigaPartecipante.appendChild(scorePartecipante);

    const rigaPercentuale = document.createElement('div');
    rigaPercentuale.style.marginTop = "5px";

    const sfondoBarra = document.createElement('div');
    sfondoBarra.style.backgroundColor = "#ddd";
    sfondoBarra.style.borderRadius = "5px";
    sfondoBarra.style.overflow = "hidden";

    const barraPercentuale = document.createElement('div');
    barraPercentuale.style.width = "0%"; 
    barraPercentuale.style.backgroundColor = "#9E3BA8";
    barraPercentuale.style.height = "8px";
    barraPercentuale.style.borderRadius = "5px";
    barraPercentuale.style.transition = "width 0.5s ease";
    

    sfondoBarra.appendChild(barraPercentuale)
    setTimeout(() => {
        barraPercentuale.style.width = `${partecipante.scorePartecipante}%`
    }, 0)

    rigaPercentuale.appendChild(sfondoBarra);

    divPartecipanteRitorno.appendChild(rigaPartecipante);
    divPartecipanteRitorno.appendChild(rigaPercentuale);

    wrapper.appendChild(divPartecipanteRitorno)

    return wrapper;
}

initialLeaderBoard.sort((a, b) => b.scorePartecipante - a.scorePartecipante);

for (let index = 0; index < initialLeaderBoard.length; index++) {
    
    listaPartecipante.appendChild(divPartecipante(initialLeaderBoard[index]))
    
}

risultatiRisposta.appendChild(divRisposte())