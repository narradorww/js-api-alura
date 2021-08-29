import { clienteService } from '../service/client-service.js'



/*Criando um template par receber os dados da API */
/*Criamos  uma constante para criar cada linha no nosso site,
 atribuindo a ela o valor daddo por uma função anonima
 cujo os argumentos são os dados que queremos - nome e email.
 */

 const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
                    <td>${email}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td> 
                    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}


/* seleciona no html o local onde serão inseridos os dados, atraés de QuerySelector, adiciona ao child de 'data-tabela' ('tr')a linha criada
iterando na array da API com forEach e atribuindo os valores aos elementos, nesse caso nome e email*/


const tabela = document.querySelector('[data-tabela]')

clienteService.listaClientes()
.then(data => {
        data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email))
})})
