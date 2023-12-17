///////////////////////////////////////// INIZIO ANIMAZIONE CORIANDOLI ////////////////////////////////////////
function avviaAnimazioneCoriandoli() {
    const canvas = document.getElementById("animazioneCoriandoli");
    const contenuto = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let coriandoli = [];
    const durataAnimazione = 6000; // 4 secondi

    function creaCoriandolo() {
        return {
            x: Math.random() * width,
            y: Math.random() * height - height,
            radius: Math.random() * (5 - 2) + 2,
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
                }, 1)`,
            velocita: Math.random() * 8 + 2,
        };
    }

    for (let i = 0; i < 300; i++) {
        coriandoli.push(creaCoriandolo());
    }

    function aggiorna() {
        contenuto.clearRect(0, 0, width, height);
        coriandoli.forEach((coriandolo) => {
            contenuto.beginPath();
            contenuto.arc(
                coriandolo.x,
                coriandolo.y,
                coriandolo.radius,
                0,
                Math.PI * 2
            );
            contenuto.fillStyle = coriandolo.color;
            contenuto.fill();
            contenuto.closePath();

            // Aggiornamento della posizione dei coriandoli
            coriandolo.y += coriandolo.velocita;
        });

        coriandoli = coriandoli.filter((coriandolo) => coriandolo.y < height);

        if (coriandoli.length !== 0) {
            requestAnimationFrame(aggiorna);
        }
    }

    setTimeout(() => {
        requestAnimationFrame(aggiorna);
    }, 600); // Ritardo iniziale

    setTimeout(() => {
        coriandoli = []; // Svuota l'array di coriandoli dopo 4 secondi
    }, durataAnimazione);

    // Riproduzione dell'audio
    const audioWinner = new Audio("./sounds/crowd-cheer-results.wav");
    audioWinner.play();
}

///////////////////////////////////////// FINE ANIMAZIONE CORIANDOLI ////////////////////////////////////////