export const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
export function formatDate(): string {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('de-DE', options);
    const formattedDate = formatter.format(date);
    const dateElement = document.getElementById("date") as HTMLElement;
    dateElement.textContent = formattedDate;
    return formattedDate;
  }
  
  
  
  