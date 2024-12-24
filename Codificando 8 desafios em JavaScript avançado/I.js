// Tarefa I:
// Implementar um debounce function

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Exemplo de uso
const log = debounce(() => console.log('Debounced!'), 1000);
log();
log();
log(); // Apenas esta chamada será executada após 1 segundo
