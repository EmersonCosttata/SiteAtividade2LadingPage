


//CRUD DE PRODUTOS NO CARRINHO
function cartProdcutCount(){
    const span = document.getElementById('span')
    const totalProducts = JSON.parse(localStorage.getItem('cart')) || [];
    let quant = 0
    totalProducts.map(product => {
        quant+=product.quant
    });
   span.innerText = quant
    const cardmessage = document.getElementById('cardmessage')
    cardmessage.innerText = "Produto Adcionado ao Carrinho"
    cardmessage.style = 'color:green'
}

function cartTotal(){
    const total = document.getElementById('cartTotal')
    const totalProducts = JSON.parse(localStorage.getItem('cart')) || [];
    let totalFinal = 0
    totalProducts.map(product => {
        totalFinal+=(parseInt(product.quant)*parseFloat(product.preco))
    });
    total.innerText = `Total: R$ ${totalFinal.toFixed(2)}`
}

 function applyDescont(){
    const total = document.getElementById('cartTotal')
    const cupomcode = document.getElementById('cupom').value
    const totalProducts = JSON.parse(localStorage.getItem('cart')) || [];

   if(totalProducts.length === 0){
        alert('Impossivel aplicar desconto de carrinho vazio')
    }
    else if(cupomcode == '1COMPRA10'){
         truecupom = ''
        let totalFinal = 0
        totalProducts.map(product => {
            totalFinal+=(parseInt(product.quant)*parseFloat(product.preco))
        });
        alert('Desconto Aplicado!')
    total.innerText = `Total: R$ ${(totalFinal-(totalFinal*0.10)).toFixed(2)}`
    }
    else{
        alert('Cupom Invalido ou ja Utilizado!') 
    }
}

    function addToCart(event) {
        const productElement = event.target.closest('.product')
        const productId = productElement.dataset.id
        const productName = productElement.dataset.name
        const productPrice = productElement.dataset.price
        const productImg = productElement.dataset.img
    
        let cart = JSON.parse(localStorage.getItem('cart')) || []

        const existProduct = cart.find(product => product.id === productId);

        if (existProduct) {
            existProduct.quant++
        } else {
            cart.push({
                id: productId,
                nome: productName,
                preco: productPrice,
                quant: 1,
                img:productImg
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        cartProdcutCount();
    }

    function displayCart() {
        const cartElement = document.getElementById('cart')
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        cartElement.innerHTML = '';
        cart.map(product => {
            const productDiv = document.createElement('div')
            productDiv.className = 'productcard'
            productDiv.innerHTML =`<img src="${product.img}">
            <h3>${product.nome}</h3> 
            <p>R$: ${(product.preco*product.quant).toFixed(2)}</p> 
            <input type="text" value='${product.quant}' id="quantValue${product.id}"> 
            <button onclick="AttQunt(${product.id})">Atualizar</button> 
            <button onclick="removeQunt(${product.id})">Remover</button> `
       
            cartElement.appendChild(productDiv);
        });

        if (cart.length === 0) {
            cartElement.textContent = 'O carrinho está vazio'
        }
        cartTotal();
    }

    function AttQunt(id){
        const quantValue = document.getElementById('quantValue'+id).value
        if(quantValue<=0){
            alert('Quantidade não pode ser 0!')
            displayCart();
            return
        }

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = cart.find(prod => prod.id == id);


        if (product) 
            product.quant = parseInt(quantValue); 

        localStorage.setItem('cart', JSON.stringify(cart))
        displayCart();
    }

    function removeQunt(id){
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        cart = cart.filter(product => product.id != id)

        localStorage.setItem('cart', JSON.stringify(cart))
        displayCart();
    }

    function clearCart(){
        localStorage.removeItem('cart')
        displayCart();
    }