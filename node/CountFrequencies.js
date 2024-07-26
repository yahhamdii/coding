function countFrequencies(words) {
    const frequencies = {};

    // Compter les fréquences des mots
    for (let word of words) {
        frequencies[word] = (frequencies[word] || 0) + 1;
    }

    // Trier les mots par ordre alphabétique
    const sortedWords = Object.keys(frequencies).sort();

    // Construire le tableau des fréquences
    const frequenciesArray = sortedWords.map(word => frequencies[word]);

    return frequenciesArray;
}

// Exemple d'utilisation :
const words = ['the', 'dog', 'got', 'the', 'bone'];
console.log(countFrequencies(words)); // Output: [1, 1, 1, 2]
