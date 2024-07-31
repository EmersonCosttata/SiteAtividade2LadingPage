
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('FormContato')

    formulario.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()

        let nome = document.getElementById('nome').value
        let email = document.getElementById('email').value
        let telefone = document.getElementById('telefone').value

        if (!nome || !email || !telefone) {
            alert('Preencha os Campos')
            return
        }
        telefone = parseInt(telefone)
        if (!Number.isInteger(telefone)) {
            alert('Apenas números no telefone!')
            return
        } else {
            alert('Entraremos em contato logo mais Sr(a) ' + nome + '. Obrigado!')
        }
    }
});

const capstexts = [
       "Desenvolvida por especialistas, nossa fórmula combina os melhores nutrientes para um desempenho mental superior. Resultados ja no primeiro dia!",
       "Sinta a diferença em minutos, com benefícios que duram o dia inteiro. Caso não sinta os glorisos beneficios das caps, não devolvemos o dinheiro!",
      "Testado e aprovado por profissionais, MindPro Caps é uma escolha confiável para melhorar sua concentração e rendimento, ate na sua vida secreta que você esconde!",
]
function showCapsTexts(bt) {
const btnTab1 = document.getElementById('btn1')
const btnTab2 = document.getElementById('btn2')
const btnTab3 = document.getElementById('btn3')
function displayContent(items) {
    const content = document.getElementById('showcontent')
    content.innerHTML = `<p>${items}</p>`
}
function activateButton(btn) {
    btnTab1.className = ""
    btnTab2.className = ""
    btnTab3.className = ""
    const bt = document.getElementById(btn)
    bt.className = "active"
}
    const btnId = bt
    activateButton(btnId)
    if(btnId === "btn1"){
        displayContent(capstexts[0])
    } else if (btnId === "btn2") {
        displayContent(capstexts[1])
    } else {
        displayContent(capstexts[2])
    }

}

document.addEventListener('DOMContentLoaded', function() {
    showCapsTexts('btn1');
  });

  ////////////////////////
  document.addEventListener('DOMContentLoaded', function() {
    let loadButton = document.getElementById('loadButton');
    if (loadButton) {
        loadButton.addEventListener('click', function() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'caps.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.getElementById('contentArea').innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        });
    }
});


