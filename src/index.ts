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


}


const imageContainer = document.getElementById("ImageContainer") as HTMLElement;

applyPuzzleEffect(imageContainer, {columns: 6, rows: 14 });