import initialLeaderBoard from './mockupLeaderboard.js'
const tabellaLeaderBoard = document.getElementById("leaderboard")
const listaPartecipante = document.getElementById('resultList')
const risultatiRisposta = document.getElementById('yourResult')
// const arrayDomande = sessionStorage.getItem("arrayDomande")? JSON.parse(sessionStorage.getItem("arrayDomande")) : initialLeaderboard
// const arrayRisposte = sessionStorage.getItem("arrayRisposte")? JSON.parse(sessionStorage.getItem("arrayRisposte")) : []

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

const divRisposta = function(){
    const wrapper = document.createElement('div')




    return wrapper
}

const divRisposte = function(){
    const wrapper = document.createElement('div')




    return wrapper
}

const divPartecipante = function(partecipante){
    const wrapper = document.createElement('div')
    wrapper.style.display = "flex"
    wrapper.style.height = "100px"


    const wrapperImg = document.createElement('div')
    const partecipanteImg = document.createElement('img')
    partecipanteImg.src = partecipante.profilepic
    partecipanteImg.style.borderRadius = "100%"
    partecipanteImg.style.height = "auto"
    partecipanteImg.style.width = "100%"
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