const campoFiltro = document.querySelector('#filtrar-paises')
campoFiltro.addEventListener('input', function () {
    let cards = document.querySelectorAll('.card')
    if (this.value.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let nome = card.querySelector('.pais').textContent
            //Cria uma expressão regular a partir do valor digitado no campo de filtro
            let expressao = new RegExp(this.value, 'i')
            if (!expressao.test(nome)) {
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }
})

const botaocapital = document.querySelector('#botaocapital')
botaocapital.addEventListener('click', function () {
    let capital = document.querySelector('#filtrar-capitais').value
    let cards = document.querySelectorAll('.card')
    if(capital.length > 0 ){
        for(let i = 0; i < cards.length; i++){
            let card = cards[i]
            let nome = card.querySelector('.capital').textContent
            //-----------------------------------------------
            if(capital != nome){
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }    
        } 
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }    
})

const regiao = document.querySelector('#regiao')
regiao.addEventListener('click', function () {
    let regiao = document.querySelector('#filtrar-regiao').value
    let cards = document.querySelectorAll('.card')
    if(regiao.length > 0 ){
        for(let i = 0; i < cards.length; i++){
            let card = cards[i]
            let nome = card.querySelector('.regiao').textContent.toLowerCase()


            console.log(nome)
            //-----------------------------------------------
            if(regiao != nome){
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }    
        } 
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }    
})