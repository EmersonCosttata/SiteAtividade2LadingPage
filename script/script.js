function addCart(){
let span = document.getElementById('span')
    let valorAtual = parseInt(span.innerText)
    valorAtual++
    span.innerText = valorAtual
}

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

