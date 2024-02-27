const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', function(err, data) {
    if (err) {
        console.error("Erreur de lecture du fichier : ", err);
        return;
    }
    console.log("Contenu du fichier welcome.txt :\n", data);
});

