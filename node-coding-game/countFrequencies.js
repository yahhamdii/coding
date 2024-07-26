function countFrequencies(words) {
    const frequencies = {};

    for (let word of words) {
        frequencies[word] = (frequencies[word] || 0) + 1;
    }

    const sortedWords = Object.keys(frequencies).sort();

    const frequenciesArray = sortedWords.map(word => frequencies[word]);

    return frequenciesArray;
}

