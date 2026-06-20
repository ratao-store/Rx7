function openLogin(){

login.style.display=
"flex"

}

function register(){

localStorage
.setItem(

"user",

user.value

)

localStorage
.setItem(

"pass",

pass.value

)

alert(
"Conta criada"
)

}

function login(){

if(

user.value===

localStorage
.getItem(
"user"
)

&&

pass.value===

localStorage
.getItem(
"pass"
)

){

alert(
"Entrou"
)

login.style.display=
"none"

}

else{

alert(
"Dados inválidos"
)

}

}
