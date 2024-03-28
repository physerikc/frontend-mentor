
const botaoSelecao = document.querySelectorAll('.botao')

botaoSelecao.forEach(botao => {
    
    botao.addEventListener('click', () => {

        const idBotaoSelecionado = botao.attributes.id.value

        const botaoAtivo = document.querySelector('.ativo')
        botaoAtivo.classList.remove('ativo')

        const botaoSelecionado = document.getElementById(idBotaoSelecionado)
        botaoSelecionado.classList.add('ativo')

        const cardAberto = document.querySelector('.aberto')
        cardAberto.classList.remove('aberto')

        const cardParaAbrir = document.getElementById('card-' + idBotaoSelecionado)
        cardParaAbrir.classList.add('aberto')
        
    })
});


