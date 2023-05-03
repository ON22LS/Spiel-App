export function applyPuzzleEffect (container: HTMLElement, options: {
  columns: number;
  rows: number;
  spread: number;
}) {
  if (!container) { /*wenn kein Container übergeben worden ist*/
    return console.error("No container was found");
  }

  const img = container.querySelector("img"); /*sucht nach Image Elementen*/
  if (!img) { /*wenn kein Image gefunden worden ist*/
    return console.error("Could not find image");
  }  

  const {columns, rows, spread} = options; /*distructering: columns und rows ausschließen aus options*/

  if (
    columns <= 0 || 
    rows <= 0 || 
    columns != Math.floor(columns) || 
    rows != Math.floor(rows)
    ) {     /*testen, ob Zahlen positiv sind oder keine ganze Zahl*/
    return console. error("Only positive integers are allowed");
  }

     /*Bild anfangs ausblenden (CSS Werte müssen immer String sein, daher "0")*/
    container.style.position = "relative";  /*Puzzlestücke absolut im Container platzieren, damit sie dem Bild nich in die Quere kommen, müssen sich überlagern können*/

  const generatePieces = () => {/*Puzzlestücke erzeugen*/
       for (let y = 0; y < rows; y++) { /*Vorschleife erzeugen, y-Were durchgehen*/
         for (let x = 0; x < columns; x++) { /*x-Werte durchgehen, wo soll das Puzzlestück hin?*/
    
         const correctX = (x / columns ) * img.width;/*richtige x-Position, wo es am Ende landet (x durch Anzahl der Spalten) mal die Breite des Bildes*/
         const correctY = (y/ rows) * img.height;
    /*Endposition ist am Anfang schon zu sehen*/
    
    const piece = document.createElement("div");  /*Puzzlestück erstellen*/
    piece.classList.add("piece");  /*Klasse erstellen, damit Effekt am Ende nicht mehr so schwer zu entfernen ist*/

    piece.style.position = "absolute";
    piece.style.top = piece.style.left = "0px";/*soll oben links angezeigt werden*/
    piece.style.width = `${img.width / columns}px`; /*richtet sich nach der Breite des Bildes und der Anzahl der Spalten*/
    piece.style.height = `${img.height / rows}px`;
    piece.style.transform = `translate(${correctX}px,${correctY}px)`;   /*Puzzleteile sollen nicht mehr alle auf einem Punkt sein (template String)*/
    piece.style.outline = "4px solid red";

    container.appendChild(piece); 
   
}
}
}
const imageContainer = document.getElementById("imageContainer") as HTMLElement;

applyPuzzleEffect(imageContainer, { columns:6, rows:14, spread: 100});

img.onload = () => {  /*Eventlistener*/
generatePieces();
}


}