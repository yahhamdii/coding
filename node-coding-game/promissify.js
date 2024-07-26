//fonction promisify(callBackFunction) de façon qu'elle prenne un fonction basée sur un callback 
//et renvoie une fonction basée sur promesse

const promisify = (callbackFunction) => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        callbackFunction(...args, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
  };

  
  //Cette fonction promisify prend en entrée une fonction basée sur un callback 
  //et renvoie une nouvelle fonction qui, lorsqu'elle est appelée, retourne une promesse. 
  //La promesse se résout avec le résultat renvoyé par la fonction d'origine 
  //en cas de succès ou se rejette avec l'erreur en cas d'échec.