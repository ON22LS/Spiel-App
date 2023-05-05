export function bildAuswahl() {
    const button = document.getElementById("bild-auswahl-button") as HTMLButtonElement;
    const bildBereich = document.getElementById("showPicture") as HTMLDivElement;

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
                    bildBereich.innerHTML = `<img src="${dataUrl}" />`;
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });
}
