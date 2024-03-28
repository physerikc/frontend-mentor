

const botaoSelecao = document.querySelectorAll('.botao')

botaoSelecao.forEach(botao =>{

    botao.addEventListener('click', () =>{
        
        const botaoAtivo = document.querySelector('.ativo')
        botaoAtivo.classList.remove('ativo')

        const idBotaoSelecionado = botao.attributes.id.value

        const botaoParaAtivar = document.getElementById(idBotaoSelecionado)
        botaoParaAtivar.classList.add('ativo')
        const submitParaAtivar = document.getElementById('sub')
        submitParaAtivar.classList.add('aberto')

        


        const buttonParaAbrir = document.getElementById('sub')
        buttonParaAbrir.addEventListener('click', () =>{

            const containerParaAtivar = document.querySelector('.container')
            containerParaAtivar.classList.add('ativo')

            const cardParaAtivar = document.getElementById('card-' + idBotaoSelecionado)
            cardParaAtivar.classList.add('ativo')

        })
        
    })
})

        

        

   

    

