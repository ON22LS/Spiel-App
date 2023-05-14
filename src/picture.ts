import { applyPuzzleEffect } from './puzzle';

export function bildAuswahl() {
    const button = document.getElementById("bild-auswahl-button") as HTMLButtonElement;

    button.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file"; //Dateiauswahl ermöglichen
        input.accept = "image/*"; //nur Bild-Dateien zulassen
        input.onchange = () => {
            const files = input.files; //Auswahl speichern
            if (files && files.length > 0) { //wenn ein oder mehrere Dateien ausgewählt worden sind wird if-Schleife ausgeführt
                const file = files[0]; //erste Datei wird gespeichert
                const reader = new FileReader(); //neuer FileReader
                reader.onload = () => { 
                    const dataUrl = reader.result as string; //als string gespeicher
                    replaceImage(dataUrl); //Funktion replaceImage wird aufgerufen und das geladene Bild als Parameter übergeben
                };
                reader.readAsDataURL(file); //Datei als Data-URL laden
            }
        };
        input.click(); //Dateiauswahlfenster öffnen
    });
}

export function randomPhoto() {
    const button = document.querySelector("#randomPhoto") as HTMLButtonElement;

    button.addEventListener("click", () => {
        const img = document.querySelector("#imageContainer img") as HTMLImageElement;
        const url = new URL("https://unsplash.it/750/450");
        url.searchParams.set('t', String(+new Date)); //Suchparameter: jedes Mal die aktuelle Zeit als Wert -> sicherstellen, dass bei jedem Klick auf den Button ein neues Bild geladen wird
        replaceImage(url.toString()); //Bild aktualisieren
    });
}

export function replaceImage(src: string) { //erwartet und exportiert src
    document.querySelectorAll("#imageContainer .piece") //sucht nach CSS-Klasse .piece innerhalb des Elements mit der ID #imageContainer und entfernt diese Elemente
        .forEach(piece => {
            piece.remove();
        });
    
    const img = document.querySelector("#imageContainer img") as HTMLImageElement;
    img.addEventListener("load", () => { //load-Event-Listener, der beim Laden des neuen Bildes ausgeführt wird, schaut dass Bild geladen ist
        const imageContainer = document.getElementById("imageContainer") as HTMLElement;
        applyPuzzleEffect(imageContainer, { columns:6, rows:9, spread: 100, speed:800, easing: "ease-out", delay: 40}); //Effekt auf neuem Bild anwenden
    }, { once: true }); //Listener wird nur einmal ausgeführt
    img.src = src; //src-Eigenschaft des img-Elements auf den Wert von src setzen, um das Bild laden auszulösen
}