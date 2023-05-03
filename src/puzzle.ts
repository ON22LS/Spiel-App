console.log("hi mom");

export function applyPuzzleEffect(container: HTMLElement, options: {
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
    
    img.style.opacity = "0";
    container.style.position = "relative";

    const generatePieces = () => {
        for (let y = 0; y < rows; y++) { 
           for (let x = 0; x < columns; x++) { 
      
           const correctX = (x / columns ) * img.width;
           const correctY = (y/ rows) * img.height;

           const randomX = correctX + (2*Math.random() -1) * spread;
           const randomY = correctY + (2*Math.random() -1) * spread;

      const piece = document.createElement("div");
      piece.classList.add("piece");

      piece.style.position = "absolute";
      piece.style.top = piece.style.left = "0px";
      piece.style.width = `${img.width / columns}px`; 
      piece.style.height = `${img.height / rows}px`;
      piece.style.transform = `translate(${randomX}px,${randomY}px)`;
      //piece.style.outline = "1px solid red";
      piece.style.transition = `transform 500ms linear`; // Transform-Eigenschaft soll Übergang haben

      piece.style.backgroundImage = `url(${img.src})`;
      piece.style.backgroundPositionX = `-${correctX}px`;
      piece.style.backgroundPositionY = `-${correctY}px`;

      container.appendChild(piece);

      setTimeout(() => { //Damit Puzzleteile nicht sofort zusammengeführt werden
        piece.style.transform = `translate(${correctX}px,${correctY}px)`; //Puzzlestücke sollen am Ende die richtige Position
      }, 1000);
      
      
    }
}
    }

    img.onload = () => {
        generatePieces();
    }
}

const imageContainer = document.getElementById("imageContainer") as HTMLElement;

applyPuzzleEffect(imageContainer, { columns:6, rows:9, spread: 100});