// Tarefa VII:
// Implementar um pipe function

function pipe(...funcs) {
    return function(initialValue) {
        return funcs.reduce((value, func) => func(value), initialValue);
    };
}

// Exemplo de uso
const add = x => x + 1;
const multiply = x => x * 2;
const subtract = x => x - 3;
const pipedFunction = pipe(add, multiply, subtract);
console.log(pipedFunction(5)); // 9
