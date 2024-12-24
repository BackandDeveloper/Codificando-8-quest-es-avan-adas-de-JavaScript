// Tarefa III:
// Implementar um deep clone de um objeto

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

// Exemplo de uso
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone); // { a: 1, b: { c: 2 } }
