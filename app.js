let cart=[]

let total=0

function toggleCart(){

cartEl=document
.getElementById("cart")

cartEl
.classList
.toggle("open")

}

function addProduct(){

let price=30

let text=
"Comunidade"

if(
boost.checked
){

price+=60

text+=
" + 14 Boosters"

}

cart.push({

name:text,

price

})

render()

}

function render(){

cartCount.innerText=

cart.length

cartItems.innerHTML=

cart
.map(

x=>

`<p>${x.name}</p>`

)
.join("")

total=

cart
.reduce(

(a,b)=>

a+b.price

,0)

document
.getElementById(
"total"
)

.innerText=

"Total: R$"+total

}

function finishOrder(){

if(
!cart.length
){

alert(
"Carrinho vazio"
)

return

}

let id=

"RX7-"+

Math
.random()
.toString(36)
.slice(2,8)

localStorage
.setItem(

"pedido",

JSON.stringify({

id,

status:

"Registrado"

})

)

alert(

"Pedido criado: "+id

)

}
