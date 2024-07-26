const fs = require('fs');
const http = require('http');
const path = require('path');

function serveFolder(folderPath) {
  const server = http.createServer((req, res) => {
    const filePath = path.join(folderPath, req.url);
    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.statusCode = 404;
        res.end('File not found');
        return;
      }
      fs.createReadStream(filePath).pipe(res);
    });
  });
  return server;
}
//Cette fonction crée un serveur HTTP qui peut être utilisé pour distribuer les fichiers d'un dossier spécifié. 
//Lorsque le serveur reçoit une requête, 
//il vérifie si un fichier correspondant à l'URL de la requête existe dans le dossier, et s'il existe,
// il envoie le contenu du fichier en réponse. 
//Si le fichier n'existe pas, le serveur envoie une réponse 404 indiquant que le fichier n'a pas été trouvé.