const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let i = 0; i < filaDeFora.length; i++) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora[i])
        filaDeFora.shift()
    }
}
console.log(filaDeDentro)
