mydiv = document.getElementById('q4');

quantidade = document.createElement("INPUT");
min = document.createElement("INPUT");
max = document.createElement("INPUT");
lista = document.createElement("P");
button = document.createElement("BUTTON")


min.setAttribute('type', 'number');
max.setAttribute('type', 'number');
max.setAttribute('type', 'number');
quantidade.setAttribute('placeholder', 'Quantidade de números');
min.setAttribute('placeholder', 'valor mínimo');
max.setAttribute('placeholder', 'valor máximo');

button.setAttribute('onclick', 'calcular()');
button.appendChild(document.createTextNode('calcular'));

mydiv.appendChild(button);
mydiv.appendChild(quantidade);
mydiv.appendChild(min);
mydiv.appendChild(max);
mydiv.appendChild(lista);

function calcular() {
    lista.innerHTML = "";

    if (quantidade.value > 0 && max.value > 0 && min.value > 0) {
        var array = [];
        for (let index = 0; index <= quantidade.value; index++) {
            minValue = Math.ceil(min.value);
            maxValue = Math.floor(max.value);
            let numero = Math.round(Math.random() * (maxValue - minValue) + minValue);
            while (!array.includes(numero)) array.push(numero);
        }
    }
    
    array.forEach(element => {
        lista.appendChild(document.createTextNode(element));
        lista.appendChild(document.createElement("BR"));
    });
}
