
function enter(){

if(
code.value
!==
"admin1234"
){

alert(
"Acesso negado"
)

return

}

let pedido=

JSON.parse(

localStorage
.getItem(
"pedido"
)

)

panel.innerHTML=

`
ID:
${pedido?.id}

<br><br>

Status:
${pedido?.status}
`

}
