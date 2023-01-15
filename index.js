   
   function digitar(){
    document.getElementById("button-home")
    
   let div =  document.createElement("div")
   div.setAttribute("id","div-home")
   let nomeUser = prompt("Digite o nome do seu nome")
   document.body.appendChild(div)
   document.getElementById("div-home").innerHTML=`E aí ${nomeUser}  Você está deixando o seu site
   dinâmico.`
  
   
   }
      
   let contador = 0

     function buttonAdd(){
         document.getElementById("button-home2")
      
         contador++
        let divPrincipal = document.getElementById("texto-principal")
        divPrincipal.innerHTML= `O contador teve ${contador} cliques`
     }

     function buttonClear(){
        contador = 0
        document.getElementById("zerar-button")
        let divPrincipal = document.getElementById("texto-principal")
        divPrincipal.innerHTML= `O contador teve ${contador} cliques`

     }
     
   





   
  




