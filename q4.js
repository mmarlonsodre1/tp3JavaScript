var array = [];
for (let index = 0; index < 1001; index++) {
    let numero = Math.round(Math.random() * 5000);
    while (!array.includes(numero)) array.push(numero);
}