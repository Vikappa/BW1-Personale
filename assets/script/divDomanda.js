const divDomanda = function(fullArray, arrayRisposte, updateDinamicStage) {

    const obgDomanda = fullArray[arrayRisposte.length]
    const divDomanda = document.createElement("div")
    const h5Question = document.createElement("h5")
    h5Question.innerText = obgDomanda.question

    const answerWrapper = document.createElement("div")
    answerWrapper.id = "bloccoRisposte"

    if (obgDomanda.type === "boolean") {
        const buttonAnswer1 = document.createElement("button")
        const buttonAnswer2 = document.createElement("button")

        buttonAnswer1.innerText = "Vero"
        buttonAnswer2.innerText = "Falso"

        // Aggiungi la classe per lo stile ai pulsanti booleani
        buttonAnswer1.classList.add("bottoneRisposta")
        buttonAnswer2.classList.add("bottoneRisposta")

        buttonAnswer1.onclick = () => {
            arrayRisposte.push({
                correct_answer: obgDomanda.correct_answer,
                userAnswer: buttonAnswer1.innerText,
                question: obgDomanda.question,
                incorrect_answers: obgDomanda.incorrect_answers
            })
            updateDinamicStage()
        }
        
        buttonAnswer2.onclick = () => {
            arrayRisposte.push({
                correct_answer: obgDomanda.correct_answer,
                userAnswer: buttonAnswer2.innerText,
                question: obgDomanda.question,
                incorrect_answers: obgDomanda.incorrect_answers
            }) 
            updateDinamicStage()
        }

        answerWrapper.appendChild(buttonAnswer1)
        answerWrapper.appendChild(buttonAnswer2)
    }

    if (obgDomanda.type === "multiple") {
        const answers = [
            obgDomanda.correct_answer,
            ...obgDomanda.incorrect_answers
        ];

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        };

        shuffleArray(answers)

        answers.forEach(answer => {
            const buttonAnswer = document.createElement("button")
            buttonAnswer.innerText = answer
            buttonAnswer.classList.add("bottoneRisposta")
            buttonAnswer.onclick = () => {
                arrayRisposte.push({
                    correct_answer: obgDomanda.correct_answer,
                    userAnswer: buttonAnswer.innerText,
                    question: obgDomanda.question,
                    incorrect_answers: obgDomanda.incorrect_answers
                })
                    updateDinamicStage()
            }
            answerWrapper.appendChild(buttonAnswer)
        })
    }

    divDomanda.appendChild(h5Question)
    divDomanda.appendChild(answerWrapper)
    return divDomanda
}

export default divDomanda
