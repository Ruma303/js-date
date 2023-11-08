    //, Creazione di Date
    let date = new Date();
    // Wed Nov 08 2023 19:50:57 GMT+0100 (Ora standard dell’Europa centrale)

    let someDate = new Date("2023-11-08");

    let timestampDate = new Date(1234567890000);

    let customDate = new Date(2023, 10, 8);

    console.log(`${date}\n\n${someDate}\n\n${timestampDate}\n\n${customDate}`);

    //, Lettura di Date
    /*
    console.log(date.getFullYear());       // Anno
    console.log(date.getMonth());          // Mese (0-11)
    console.log(date.getDate());           // Giorno del mese (1-31)
    console.log(date.getDay());            // Giorno della settimana (0-6, 0 è Domenica)
    console.log(date.getHours());          // Ore (0-23)
    console.log(date.getMinutes());        // Minuti (0-59)
    console.log(date.getSeconds());        // Secondi (0-59)
    console.log(date.getMilliseconds());   // Millisecondi (0-999)
    console.log(date.getTime());           // Timestamp (millisecondi dal 1 gennaio 1970 00:00:00 UTC) */


    //, Impostazione di Date
    /*
    date.setFullYear(2023);
    date.setMonth(10);
    date.setDate(8);
    date.setHours(12);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.setTime(1234567890000); */


    //, Operazioni su date
    /* let date1 = new Date("2023-11-08");
    let date2 = new Date("2023-12-25");

    // Calcola la differenza tra due date in giorni
    let diff = Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
    console.log(diff); */



    //, Conversione oggetto Date in String
    /* console.log(now.toString());       // Stampa una stringa rappresentante la data e l'ora locali.
    console.log(now.toUTCString());    // Stampa una stringa rappresentante la data e l'ora UTC.
    console.log(now.toISOString());    // Stampa una stringa in formato ISO 8601 (es. "2023-11-08T12:34:56.789Z"). */


    //, Parsing a Date String
    /* let date1 = new Date("2023-11-08T12:34:56");
    let date2 = new Date(Date.parse("2023-11-08T12:34:56"));

    // date1 e date2 sono oggetti Date rappresentanti la stessa data e ora.
    console.log(date1.getTime() === date2.getTime());  // Stampa: true */


    //, Time Zones
    /* let utcDate = new Date("2023-11-08T12:34:56Z");

    console.log(utcDate.getUTCHours());  // Stampa: 12
    console.log(utcDate.getHours());     // Potrebbe stampare qualcosa di diverso, a seconda del fuso orario locale. */