mydiv = document.getElementById('q3');

titulo = document.createElement("P");
aprovado = document.createElement("P");
rejeitados = document.createElement("P");
rodape = document.createElement("P");
button = document.createElement("BUTTON")

button.setAttribute('onclick', 'relatorio()');
button.appendChild(document.createTextNode('relatorio'));

mydiv.appendChild(button);
mydiv.appendChild(titulo);
mydiv.appendChild(aprovado);
mydiv.appendChild(rejeitados);
mydiv.appendChild(rodape);

function relatorio() {
    titulo.innerHTML = "";
    aprovado.innerHTML = "";
    rejeitados.innerHTML = "";
    rodape.innerHTML = "";

    var arrayAlunos = [];
    var aprovados = 0;
    var reprovados = 0;

    titulo.appendChild(document.createTextNode('Meu Relatorio'));
    for (let i = 1; i <= 20; i++) {
        arrayAlunos.push({
            numero: i,
            nota: Math.round(Math.random() * 100)
        });
    }

    for (const aluno of arrayAlunos) {
        if (aluno.nota >= 50) {
            aprovados++;
            aprovado.appendChild(document.createTextNode(`Aluno nr ${aluno.numero} - Nota ${aluno.nota} [APROVADO]`));
            aprovado.appendChild(document.createElement('BR'));
        } else {
            reprovados++;
            rejeitados.appendChild(document.createTextNode(`Aluno nr ${aluno.numero} - Nota ${aluno.nota} [REPROVADO]`));
            rejeitados.appendChild(document.createElement('BR'));
        }
    }
    rodape.appendChild(document.createTextNode(`APROVADOS (${aprovados}) ${(aprovados / arrayAlunos.length) * 100}% 
            | REPROVADOS (${reprovados})${(reprovados / arrayAlunos.length) * 100}%`));
}