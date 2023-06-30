const numeros = [54, 22, 10, 5, 284];
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicao = i;
    }
}

console.log(posicao);
