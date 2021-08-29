
const listaClientes =() => {
        return fetch(`http://localhost:3000/profile`)
        .then( resposta => {
            return resposta.json();
        })}
          

// criando um  cliente

const criaCliente =( nome, email ) => {
        return fetch(`http://localhost:3000/profile`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then ( resposta => {
        return resposta.body
        }
    )
    }    
//exporta para todo o sistema o resultado da promise através de um objeto

    export const clienteService = { 
        listaClientes,
        criaCliente, 
        
    }
