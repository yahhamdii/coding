//doCalculations(inputs, workerPath) envoie les entrée au worker et retourne  les resultat du calcul. 
// utiliser le module cluster node js code source  

const worker = require('node:worker_threads');
const cluster = require('cluster');

function doCalculations(inputs, workerPath) {
  return new Promise((resolve, reject) => {
    if (cluster.isMaster) {
      const worker = new Worker(workerPath, { workerData: inputs });
      worker.on('message', resolve);
      worker.on('error', reject);
    } else {
      reject(new Error('doCalculations ne peut être appelé que par le processus principal'));
    }
  });
}

module.exports = doCalculations;

//  Le code ci-dessus crée une nouvelle instance du travailleur en utilisant le chemin donné 
//  et en lui passant les entrées en tant que données de travailleur.
//  Les événements "message" et "error" sont écoutés pour retourner les résultats ou les erreurs respectivement.


