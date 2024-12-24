// Tarefa VI:
// Implementar um flatten function para arrays aninhados

function flatten(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

// Exemplo de uso
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = flatten(nestedArray);
console.log(flatArray); // [1, 2, 3, 4, 5]
