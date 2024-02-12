const divDomanda = function(obgDomanda){
    const divDomanda = document.createElement("div")
const h5Question = document.createElement("h5")
h5Question.innerText = obgDomanda.question

const answerWrapper = document.createElement("div")
answerWrapper.id ="bloccoRisposte"


if(obgDomanda.type === "boolean"){
    const buttonAnswer1 = document.createElement("button")
    const buttonAnswer2 = document.createElement("button")

    buttonAnswer1.innerText = "Vero"
    buttonAnswer2.innerText = "Falso"

    answerWrapper.appendChild(buttonAnswer1)
    answerWrapper.appendChild(buttonAnswer2)

}
if(obgDomanda.type === "multiple"){

    const buttonAnswer1 = document.createElement("button")
    const buttonAnswer2 = document.createElement("button")
    const buttonAnswer3 = document.createElement("button")
    const buttonAnswer4 = document.createElement("button")

    buttonAnswer1.innerText = obgDomanda.correct_answer
    buttonAnswer2.innerText = obgDomanda.incorrect_answers[0]
    buttonAnswer3.innerText = obgDomanda.incorrect_answers[1]
    buttonAnswer4.innerText = obgDomanda.incorrect_answers[2]

    buttonAnswer1.classList.add("bottoneRisposta")
    buttonAnswer2.classList.add("bottoneRisposta")
    buttonAnswer3.classList.add("bottoneRisposta")
    buttonAnswer4.classList.add("bottoneRisposta")

    const subWrapper1 = document.createElement("div")
    const subWrapper2 = document.createElement("div")

    subWrapper1.classList.add("rigaRisposte1")
    subWrapper2.classList.add("rigaRisposte2")

    subWrapper1.appendChild(buttonAnswer1)
    subWrapper1.appendChild(buttonAnswer2)
    subWrapper2.appendChild(buttonAnswer3)
    subWrapper2.appendChild(buttonAnswer4)
    answerWrapper.appendChild(subWrapper1)
    answerWrapper.appendChild(subWrapper2)
}


divDomanda.appendChild(h5Question)
divDomanda.appendChild(answerWrapper)
    return divDomanda
}

export default divDomanda