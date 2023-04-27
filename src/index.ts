//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
function applyPuzzleEffect (container: HTMLElement, options: {columns: number, rows: number, }) { /*deklarieren was es für ein Element ist, damit nicht any*/

if (!container) {
    return console.error("No container was found");
}
const img = container.querySelector("img");

if (!img) {
    return console.error("Could not find image");
}
}


const imageContainer = document.getElementById("ImageContainer");

applyPuzzleEffect(imageContainer, {columns: 6, rows: 14 });