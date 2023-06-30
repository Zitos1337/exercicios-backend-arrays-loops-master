const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let quantidade = 0

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === 'a' || nomes === 'A')
        quantidade++;
}
if (quantidade <= 1) {
    console.log(nomes)
}
