//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import { bildAuswahl, randomPhoto } from "./picture";
bildAuswahl();
randomPhoto();

import { formatDate } from './webapi';
const formattedDate = formatDate();
console.log(formattedDate);