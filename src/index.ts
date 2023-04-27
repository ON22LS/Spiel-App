//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
function applyPuzzleEffect (container: HTMLElement, options: {columns: number, rows: number, }) { /*spezifizieren was es für ein Element ist, damit nicht any*/

if (!container) { /*wenn kein Container übergeben worden ist*/
    return console.error("No container was found");
}

const img = container.querySelector("img"); /*sucht nach Image Elementen*/

if (!img) { /*wenn kein Image gefunden worden ist*/
    return console.error("Could not find image");
}

const {columns, rows} = options; /*distructering: columns und rows ausschließen aus options*/

if (columns <= 0 || rows <= 0 || columns != Math.floor(columns) || rows != Math.floor(rows)) {/*testen, ob Zahlen positiv sind oder keine ganze Zahl*/
return console. error("Only positive integers are allowed");
}

img.style.opacity = "0"; /*Bild anfangs ausblenden (CSS Werte müssen immer Steing sein, daher "0")*/
container.style.position = "relative";  /*Puzzlestücke absolut im Container platzieren, damit sie dem Bild nich in die Quere kommen, müssen sich überlagern können*/

const generatePieces = () => {/*Puzzlestücke erzeugen*/
    for (let y = 0; y < rows; y++) { /*Vorschleife erzeugen, y-Were durchgehen*/
    for (let x = 0; x < columns; x++) { /*x-Werte durchgehen, wo soll das Puzzlestück hin?*/
    const correctX = (x / columns ) * img.width;/*richtige x-Position, wo es am Ende landet (x durch Anzahl der Spalten) mal die Breite des Bildes*/
    const correctY = (y/ rows) * img.height;
   
}
}
}

img.onload = () => {  /*Eventlistener*/
generatePieces();
}


}


const imageContainer = document.getElementById("ImageContainer") as HTMLElement;

applyPuzzleEffect(imageContainer, {columns: 6, rows: 14 });