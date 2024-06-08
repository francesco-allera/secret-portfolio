
Avviare Sass in un progetto:
1. aprire terminale dalla cartella del progetto
2. creare cartella `sass` con all'interno il file `style.scss`
3. creare cartella `dist` con all'interno il file `style.css`
4. controllare che Sass sia effettivamente installato lanciando `sass --version`
5. se Sass:
    a. non è presente:
        - lanciare `npm install -g sass`
        - verificare l'installazione col punto 4
    b. è presente:
        - lanciare `sass .\scss\style.scss .\dist\style.css -w`
          affinché ad ogni cambiamento avvenuto nei file sass ricompili automaticamente una nuova versione del css

Struttura cartelle `scss`:
- `./abstracts` cartella che racchiude le variabili base dello stile utilizzate in altri punti del codice
- `./layout` cartella che usa principalmente gli `abstracts` e crea delle classi generali riutilizzabili
- `./partials` cartella che raggruppa lo stile di un singolo importante nodo HTML per file (header, footer, aside, main > children)
- `./components` cartella che raggruppa tutto il codice di un singolo elemento HTML per file
- `style.scss` -> raccoglitore di tutto lo stile finale
