export const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  export function formatDate(): string {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('de-DE', options);
    return formatter.format(date);
  }