const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json();
  });
};

// criando um  cliente

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    return resposta.body;
  });
};

//função de remover cliente 

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  });
};


const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}



const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.json()
        })
}


//exporta para todo o sistema o resultado da promise através de um objeto

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
};
