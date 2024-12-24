// Tarefa VII:
// Implementar um retry function

function retry(func, retries) {
    return async function(...args) {
        for (let i = 0; i < retries; i++) {
            try {
                return await func.apply(this, args);
            } catch (error) {
                if (i === retries - 1) throw error;
            }
        }
    };
}

// Exemplo de uso
const fetchData = async () => {
    // Simulação de uma função que pode falhar
    if (Math.random() > 0.5) throw new Error('Falha na requisição');
    return 'Dados recebidos';
};

const fetchDataWithRetry = retry(fetchData, 3);
fetchDataWithRetry()
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
