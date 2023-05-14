export function applyPuzzleEffect(container: HTMLElement, options: { //Variablen erstellen
  columns: number; //spalten
  rows: number; //zeilen
  spread: number; //wie verteilt
  speed: number; //wie schnell
  easing: string; //damit Übergang flüssiger aussieht
  delay: number;//Verzögerung der einzelnen Schritte
}) {
  if (!container) { /*wenn kein Container übergeben worden ist*/
    return console.error("No container was found");
  }

  const img = container.querySelector("img"); /*sucht nach Image Elementen*/
  if (!img) { /*wenn kein Image gefunden worden ist*/
    return console.error("Could not find image");
  }  

  const {columns, rows, spread, speed, easing, delay} = options; //distructuring: auf Eigenschaften des options-Objekts zugreifen und sie in separaten Variablen speichern -> nicht jedes mal auf options verweisen müssen

  if (
    columns <= 0 || 
    rows <= 0 || 
    columns != Math.floor(columns) || 
    rows != Math.floor(rows)
    ) {     /*testen, ob Zahlen positiv sind oder keine ganze Zahl*/
    return console. error("Only positive integers are allowed");
  }
  
  img.style.opacity = "0";
  container.style.position = "relative"; //damit puzzlestücke relativ zum Container positioniert werden können

  const generatePieces = () => { //Arrow function, benötigt keine Parameter
      for (let y = 0; y < rows; y++) {  // jedes Puzzlestück in einer neuen Zeile zu positionieren, Schleife wiederholt sich solange y kleiner als rows
         for (let x = 0; x < columns; x++) { //startet eine Schleife über die Spalten (horizontale Achse) des Rasters
    
         const correctX = (x / columns ) * img.width; //berechnet die horizontale Position des aktuellen Puzzlestücks basierend auf der Spaltenzahl und der Breite des Bildes
         const correctY = (y/ rows) * img.height; //berechnet die vertikale Position des aktuellen Puzzlestücks basierend auf der Zeilenanzahl und der Höhe des Bildes

         const randomX = correctX + (2*Math.random() -1) * spread; //fügt eine zufällige Verschiebung zur horizontalen Position des Puzzlestücks hinzu, um ein etwas chaotischeres Aussehen zu erzeugen, zufällige Zahl zwischen -1 und 1
         const randomY = correctY + (2*Math.random() -1) * spread; //fügt eine zufällige Verschiebung zur vertikalen Position des Puzzlestücks hinzu, um ein etwas chaotischeres Aussehen zu erzeugen

    const piece = document.createElement("div"); //erstellt ein HTML-Element vom Typ div, das ein Puzzlestück repräsentiert
    piece.classList.add("piece"); //fügt der CSS-Klasse "piece" das erstellte div-Element hinzu, um es später besser ansprechen zu können

    piece.style.position = "absolute";
    piece.style.top = piece.style.left = "0px";
    piece.style.width = `${img.width / columns}px`; //Breite des Puzzlestücks basierend auf der Spaltenanzahl des Rasters und der Breite des Bildes
    piece.style.height = `${img.height / rows}px`; //Höhe des Puzzlestücks basierend auf der Zeilenanzahl des Rasters und der Höhe des Bildes
    piece.style.opacity = "0";//Puzzlestücke am Anfgang ausblenden

    piece.style.transform = `translate(${randomX}px,${randomY}px)`; //zufällig platzieren
    //piece.style.outline = "1px solid red";
    piece.style.transition = 
    `transform ${speed}ms ${easing},`// Transform-Eigenschaft soll Übergang haben
    + `opacity ${speed}ms ${easing}`;

    piece.style.backgroundImage = `url(${img.src})`; //ausgewähltes Bild auf Hintergrund bringen
    piece.style.backgroundPositionX = `-${correctX}px`; //Puzzleteile an korrekte Stelle bringen
    piece.style.backgroundPositionY = `-${correctY}px`;

    container.appendChild(piece);

    setTimeout(() => { //Damit Puzzleteile nicht sofort zusammengeführt werden
      piece.style.opacity = "1"; //Puzzleteile wieder sichtbar machen
      piece.style.transform = `translate(${correctX}px,${correctY}px)`; //Puzzlestücke sollen am Ende die richtige Position
    }, delay*(y* columns + x)); //multiplizieren mit dem Index des Puzzlestücks, damit 1.Puzzlestück 0, 2. delay, 3. delay x2 usw.
    
    
  }
}
  }

  img.onload = () => { //sobald das Bild geladen ist, geht das Puzzle los
      generatePieces();
  }
}

const imageContainer = document.getElementById("imageContainer") as HTMLElement; //auf imageContainer anwenden
applyPuzzleEffect(imageContainer, { columns:6, rows:9, spread: 100, speed:700, easing: "ease-out", delay: 40});
