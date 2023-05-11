import { applyPuzzleEffect } from './puzzle';

export function bildAuswahl() {
    const button = document.getElementById("bild-auswahl-button") as HTMLButtonElement;

    button.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = () => {
            const files = input.files;
            if (files && files.length > 0) {
                const file = files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    const dataUrl = reader.result as string;
                    replaceImage(dataUrl);
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });
}

export function randomPhoto() {
    const button = document.querySelector("#randomPhoto") as HTMLButtonElement;

    button.addEventListener("click", () => {
        const img = document.querySelector("#imageContainer img") as HTMLImageElement;
        const url = new URL("https://unsplash.it/750/450");
        url.searchParams.set('t', String(+new Date));
        replaceImage(url.toString());
    });
}

export function replaceImage(src: string) {
    document.querySelectorAll("#imageContainer .piece")
        .forEach(piece => {
            piece.remove();
        });
    
    const img = document.querySelector("#imageContainer img") as HTMLImageElement;
    img.addEventListener("load", () => {
        const imageContainer = document.getElementById("imageContainer") as HTMLElement;
        applyPuzzleEffect(imageContainer, { columns:6, rows:9, spread: 100, speed:800, easing: "ease-out", delay: 40});
    }, { once: true });
    img.src = src;
}