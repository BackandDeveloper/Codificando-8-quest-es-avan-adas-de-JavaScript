// Tarefa II:
// Implementar um throttle function

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Exemplo de uso
const log = throttle(() => console.log('Throttled!'), 1000);
log();
log();
log(); // Apenas a primeira chamada será executada imediatamente
