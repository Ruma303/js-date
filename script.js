//, Creazione di Date
/* let date = new Date();
let timestampDate = new Date(1234567890000);
let customDate = new Date(2023, 10, 8, 13, 54, 37, 210);
let string1 = new Date("2023-11-08"); // Formato YYYY-MM-DD
let string2 = new Date("11/08/2023"); // Formato MM/DD/YYYY
let string3 = new Date("November 08, 2023"); // Formato Month Day, Year

console.log(`${date}\n\n${timestampDate}\n\n${customDate}\n\n${string1}\n\n${string2}\n\n${string3}`); */


//, Lettura di Date
/* let date = new Date();

console.group("Date Information");
console.log(`getFullYear(): ${date.getFullYear()}`);       // Anno
console.log(`getMonth(): ${date.getMonth()}`);          // Mese (0-11)
console.log(`getDate(): ${date.getDate()}`);           // Giorno del mese (1-31)
console.log(`getDay(): ${date.getDay()}`);            // Giorno della settimana (0-6, 0 è Domenica)
console.log(`getHours(): ${date.getHours()}`);                 // Ore (0-23)
console.log(`getMinutes(): ${date.getMinutes()}`);            // Minuti (0-59)
console.log(`getSeconds(): ${date.getSeconds()}`);            // Secondi (0-59)
console.log(`getMilliseconds(): ${date.getMilliseconds()}`);  // Millisecondi (0-999)
console.log(`getTime(): ${date.getTime()}`);                  // Timestamp (millisecondi da Unix Epoch)
console.groupEnd();

console.group("Additional Date Information");
console.log(`getTimezoneOffset(): ${date.getTimezoneOffset()}`); // Fuso orario in minuti
console.log(`getUTCFullYear(): ${date.getUTCFullYear()}`);    // Anno UTC
console.log(`toDateString(): ${date.toDateString()}`);      // Formato data: "ddd MMM dd yyyy"
console.log(`toTimeString(): ${date.toTimeString()}`);      // Formato ora: "HH:mm:ss GMT+HHMM (timezone name)"
console.log(`toLocaleDateString(): ${date.toLocaleDateString()}`);// Formato data locale
console.log(`toLocaleTimeString(): ${date.toLocaleTimeString()}`);// Formato ora locale
console.log(`toISOString(): ${date.toISOString()}`);       // Formato ISO
console.groupEnd(); */



//, Impostazione di Date
/* let date = new Date();

console.group("Date setters");
date.setFullYear(1995);             // Imposta l'anno a 1995
date.setMonth(10);                  // Imposta il mese a Novembre
date.setDate(8);                    // Imposta il giorno del mese a 8
date.setHours(12);                  // Imposta le ore a 12
date.setMinutes(14);                // Imposta i minuti a 14
date.setSeconds(37);                // Imposta i secondi a 37
date.setMilliseconds(946);          // Imposta i millisecondi a 946
console.groupEnd();

let formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
console.log(`New date 1: ${formattedDate}`);

date.setTime(1234567890000);
console.log(`New date 2: ${date}`); */


//, Operazioni su date

/* //? Ottenere il mese corrente (ricordarsi che l'indice dei mesi inizia da 0):
let currentMonth = new Date().getMonth() + 1;
console.log(currentMonth); //* 11 (Novembre)

//? Calcolare la differenza tra due date in giorni
let date1 = new Date("2023-11-08");
let date2 = new Date("2023-12-25");

let diff = Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
// Prima calcoliamo la differenza in millisecondi, poi dividiamo per il numero di millisecondi in un giorno (1000 millisecondi * 60 secondi * 60 minuti * 24 ore).
console.log(diff); //* 47 giorni

//? Sottrarre giorni da una data:
let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5);
console.log(pastDate); //* Tue Nov 07 2023 11:47:31 GMT+0100

//? Confrontare due date
let date3 = new Date(2023, 11, 25); // 25 Dicembre 2023
let date4 = new Date(2024, 0, 1); // 1 Gennaio 2024

if (date3 < date4) {
    console.log("La data1 è prima della data2"); //* True
} else if(date3 > date4) {
    console.log("La data1 è dopo la data2");
} else {
    console.log("Le date sono uguali");
} */



//, Conversione oggetto Date in String
/* let now = new Date();
console.log(now.toString());        // "Sat Nov 12 2023 14:32:00 GMT+0800 (China Standard Time)"
console.log(now.toUTCString());     // "Sat, 12 Nov 2023 06:32:00 GMT"
console.log(now.toISOString());     // "2023-11-12T06:32:00.000Z"
console.log(now.toLocaleString());  // "11/12/2023, 2:32:00 PM" (potrebbe variare localmente)
console.log(now.toLocaleDateString());  // "11/12/2023" (potrebbe variare localmente)
console.log(now.toLocaleTimeString());  // "2:32:00 PM" (potrebbe variare localmente)
console.log(now.toDateString());    // "Sat Nov 12 2023"
console.log(now.toTimeString());    // "14:32:00 GMT+0800 (China Standard Time)"
console.log(now.toJSON());          // "2023-11-12T06:32:00.000Z" */



//, Parsing a Date String
/* let date1 = new Date("2023-11-08T12:34:56");
let date2 = new Date(Date.parse("2023-11-08T12:34:56"));
console.log(date1.getTime() === date2.getTime());  //* true */

/* //? Creazione di un oggetto Date da una stringa in formato 'YYYY-MM-DD':
let date = new Date('2023-11-12');
console.log(date);  // Sun Nov 12 2023 00:00:00 GMT+0100

//? Creazione di un oggetto Date da una stringa con data e ora:
let dateWithTime = new Date('2023-11-12T14:32:00');
console.log(dateWithTime);  // Sun Nov 12 2023 14:32:00 GMT+0100

//? Creazione di un oggetto Date da una stringa in formato ISO 8601:
let isoDate = new Date('2023-11-12T06:32:00.000Z');
console.log(isoDate);  // Sun Nov 12 2023 14:32:00 GMT+0100

//? Creazione di un oggetto Date da una stringa in formato UTC:
let utcDate = new Date('Sat, 12 Nov 2023 06:32:00 GMT');
console.log(utcDate);  // Sun Nov 12 2023 14:32:00 GMT+0100

//? Creazione di un oggetto Date da una stringa in un formato leggibile dall'uomo:
let humanReadableDate = new Date('November 12, 2023 14:32:00');
console.log(humanReadableDate);  // Sun Nov 12 2023 14:32:00 GMT+0100 */



//, Time Zones

/* //? Creazione di un oggetto Date con l'ora locale:
let localDate = new Date();
console.log(localDate.toString());  // "Sat Nov 12 2023 16:00:00 GMT+0100"

//? Creazione di un oggetto Date con un'ora UTC specifica:
let utcDate = new Date("2023-11-12T06:32:00Z");
console.log(utcDate.toUTCString());  // "Sun, 12 Nov 2023 06:32:00 GMT"

//? Ottenere l'ora locale da un oggetto Date:
let hour = new Date("2023-11-12T06:32:00Z");
console.log(hour.getHours());  // 7

//? Ottenere l'ora UTC da un oggetto Date:
let utcHour = new Date("2023-11-12T06:32:00Z");
console.log(utcHour.getUTCHours());  // 6 */