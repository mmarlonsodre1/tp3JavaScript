mydiv = document.getElementById('q2');

input = document.createElement("INPUT");
label = document.createElement("P");
button = document.createElement("BUTTON")

input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'fatorial');
input.required = true;

button.setAttribute('onclick', 'calcular()');
button.appendChild(document.createTextNode('calcular'));

mydiv.appendChild(input);
mydiv.appendChild(button);
mydiv.appendChild(label);

function fatorial(number) {
    if (number == 1) return 1;
    return number * fatorial(number - 1);
}

function calcular() {
    label.innerHTML = "";
    if (input.value > 0) {
        let inicio = new Date();
        label.appendChild(document.createTextNode(`${input.value}! = ${fatorial(input.value)} (${new Date() - inicio} milisegundos)`));
    }
}