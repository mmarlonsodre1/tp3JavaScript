mydiv = document.getElementById('q1');

min = document.createElement("INPUT");
max = document.createElement("INPUT");
button = document.createElement("BUTTON")
label = document.createElement("P");

min.setAttribute('type', 'number');
min.setAttribute('placeholder', 'valor mínimo');
max.setAttribute('type', 'number');
max.setAttribute('placeholder', 'valor máximo');
min.required = true;
max.required = true;

button.setAttribute('onclick', 'calcular()');
button.appendChild(document.createTextNode('calcular'));

mydiv.appendChild(min);
mydiv.appendChild(max);
mydiv.appendChild(button);
mydiv.appendChild(label);

var contagem = 0;

function calcular() {
    if (min.value > 0 && max.value > 0) {
        for (let index = parseInt(min.value) + 1; index < max.value; index++) {
            if (index % 2 == 0 && index % 3 == 0) {
                contagem++;
            }
        }
        label.innerHTML = "";
        label.appendChild(document.createTextNode(contagem))
        contagem = 0;
    }
}