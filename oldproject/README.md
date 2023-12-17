Progetto BW1 Progetto mensile realizzato da Alex Alessandro Francesco Luca e Vincenzo

Per prima cosa abbiamo messo insieme le nostre idee per il progetto, ovvero come strutturare i file html, css e JS. Una volta eletta la struttura logica, abbiamo diviso il lavoro in task con ambiti di competenza specifici.

Abbiamo stabilito i ruoli e iniziato la stesura del progetto.

Giorno 1:
Vincenzo: Partendo dal testo della traccia ho scoperto l'esistenza del progetto Open Trivia DB, e ne ho studiato il funzionamento. Ho studiato a grandi linee i metodi asincroni e partendo da un tutorial su youtube ho creato un metodo che scarica 50 domande da Open Trivia DB sotto forma di array di oggetti, e creato un metodo che ne seleziona un numero tale per cui il tempo per rispondere a ogni domanda sia di 30 minuti (30 secondi per le domande facili, 60 per le normali e 120 per le difficili). Ho creato un metodo che renderizza dinamicamente un div con dentro domande e risposte. I listener dei pulsanti delle risposte ciclano l'array di domande da proporre, puliscono il div contenitore e propongono un nuovo div con la domanda successiva. Al termine dell'array di domande, viene lanciato il metodo che renderizza le risposte e la posizione nella leaderboard. Ho lasciato a Luca l'onere di formattare e animare la pagina dinamica delle domande e a Francesco di realizzare un timer che conti i secondi rimasti per rispondere

Luca: La parte su cui sto lavorando principalmente è la struttura della Welcome e la formattazione delle pagine style CSS Welcome(index) e test(questions).

Francesco: Le parti del progetto a cui sto lavorando sono il timer che scandisce il tempo disponibile in base alla difficoltà oggettiva di ogni domanda presente nel benchmark e il grafico a ciambella che si crea in maniera dinamica al termine del test. Come primo giorno ho creato lo scheletro delle due parti: la logica di funzionamento del timer e lo studio della libreria "chart.js" per la creazione del grafico.

Alessandro: Creata una funzione chiamata "superatoOno" che nella condizione IF (parametro) pass = "superato" fa partire dopo 0.7 secondi dal caricamento della pagina un animazione di coriandoli (di diverso colore e dimensioni) che (da sotto div dentro header-il primo) cadono in basso verso la fine della finestra. Bozza di css della sezione apposita. (Results Page)

Giorno 2:
Francesco: Ho prestato attenzione al css del timer, creando la base del css e studiando i settaggi delle immagini svg e dei cerchi. Ho creato una barra di caricamento tonda per Vincenzo da utilizzare all'occorrenza. Inoltre, interfacciandomi con vincenzo, abbiamo modificato alcuni elementi statici, rendendoli dinamici tramite JS.

Vincenzo: Ho collaborato con Luca per modificare il metodo dinamico che genera i div delle domande per accomodare il suo style CSS. Ho collaborato con Francesco per adattare le sue animazioni ad un metodo dinamico di generazione.

Alessandro: Incrementata nella funzione "superatoOno" la condizione ELSE che fa apparire dopo 0.7 secondi dal caricamento della pagina una scritta e fa partire un animazione di lacrime/gocce (di diverso colore, dimensioni e peso) che (da sotto div dentro header-il primo) cadono in basso verso la fine della finestra. Aggiunto ad animazione coriandoli file audio di folla che gioisce e si congratula al caricamento della pagina, aggiunto ad animazione gocce file audio "looser".

Giorno 3:
Vincenzo: Ho fixato il timer delle domande usando una variabile comunea a tutti i div question dinamici. Corretto il posizionamento degli elementi nella schermata del grafico a ciambella. Aggiunta renderizzazione risposte date con icona presa da fontawesome

Luca: Ho collaborato con Vincenzo sulla parte JS della pagina benvenuti, sul corretto funzionamento del button (PROCEED) al flag della checkbox ed ho provveduto al collegamento della stessa pagina in un'unica scheda con le pagine a seguire.

Giorno 3/4 -- Francesco:
Migliorie grafico ambiente grafico a ciambella e timer. Varie migliorie e supporto colleghi nel Javascript

Giorno 4:
Vincenzo: Corretta renderizzazione domande VERO/FALSO o a risposta multipla. Inizio integrazione metodi scritti dagli altri.

Giorno 5:
Francesco: Aggiunta pulsante "Rate Us" generato dinamicamente e migliorie varie del codice improntate alla finalizzazione e consegna del progetto

Vincenzo: Modifica metodo di memorizzazione degli score del corso. Fix gestione array memoria leaderboard. Fix layout leaderboard. Fix metodo V o X sulle risposte scelte. Fix animazione coriandoli. Fix metodo renderizzazione podio. Aggiunto div per input nomeutente, che lo inserisce nell'array di score da renderizzare. 

Branch Vincenzo:
Giorno 5: Restyle dell'index a mio piacimento, con focus sulla responsività mobile. Personalizzazione brand. 

Giorno 6: Reimporto parti utili del vecchio codice. Riscrittura di parti del codice aggiunte tardivamente nell'algoritmo del funzioanemnto