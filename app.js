```javascript
let cart=[]

function carregarProduto(){

const produto=

JSON.parse(
localStorage.getItem(
"rx7_produto"
))

if(!produto)return

const area=

document.getElementById(
"produtoArea"
)

if(!area)return

area.innerHTML=

`
<div class="card">

<img
src="${
produto.imagem
}"
style="
width:100%;
border-radius:20px;
height:260px;
object-fit:cover;
">

<h2>

${produto.nome}

</h2>

<p>

${produto.descricao}

</p>

<h1>

R$${produto.preco}

</h1>

<button
onclick="addCart()">

Adicionar

</button>

</div>
`

}

function addCart(){

cart.push(1)

document
.getElementById(
"cartCount"
)
.innerText=

cart.length

abrir()

}

function abrir(){

document
.getElementById(
"cart"
)

.style.right=

"0"

}

function fechar(){

document
.getElementById(
"cart"
)

.style.right=

"-420px"

}

window.onclick=

function(e){

if(

e.target.id
==="overlay"

){

fechar()

}

}

window.onload=

carregarProduto
```
