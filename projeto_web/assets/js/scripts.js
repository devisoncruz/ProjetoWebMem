document.addEventListener('DOMContentLoaded', () => {
    //opções de cartas
    const cards = [
      {
        name: 'aquamen',
        img: '/assets/imagens/aquamen.png'
      },
      {
        name: 'Batman',
        img: '/assets/imagens/Batman.png'
      },
      {
        name: 'Flash',
        img: '/assets/imagens/Flash.png'
      },
      {
        name: 'Lanterna',
        img: '/assets/imagens/Lanterna.png'
      },
      {
        name: 'Mulher_mara',
        img: '/assets/imagens/Mulher_mara.png'
      },
      {
        name: 'Super_man',
        img: '/assets/imagens/Super_man.png'
      },
      {
        name: 'aquamen',
        img: '/assets/imagens/aquamen.png'
      },
      {
        name: 'Batman',
        img: '/assets/imagens/Batman.png'
      },
      {
        name: 'Flash',
        img: '/assets/imagens/Flash.png'
      },
      {
        name: 'Lanterna',
        img: '/assets/imagens/Lanterna.png'
      },
      {
        name: 'Mulher_mara',
        img: '/assets/imagens/Mulher_mara.png'
      },
      {
        name: 'Super_man',
        img: '/assets/imagens/Super_man.png'
      },
    ]
  
    //embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.random())
  
    //recuperar elementos
    const board = document.querySelector('.board')
    const resultView = document.querySelector('#result')
    let cardsChosen = [] //cartas escolhidas
    let cardsChosenId = [] //ids das cartas escolhidas para caso de click na mesma imagem
    let cardsWon = [] //cartas combinadas
  
    //criar o quadro de cartas
    function createBoard() {
      for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '/assets/imagens/board.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        board.appendChild(card)
      }
    }
  
    //checagem de combinações
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      //verificar clique na mesma imagem 
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '//imagens/board.png')
        cards[optionTwoId].setAttribute('src', '//imagens/board.png')
        alert('Você clicou na mesma imagem')
      }
      //verificar combinação se click em imagens diferentes
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Você encontrou uma combinação')
        cards[optionOneId].setAttribute('src', '/assets/imagens/check.png')
        cards[optionTwoId].setAttribute('src', '/assets/imagens/check.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', '/assets/imagens/board.png')
        cards[optionTwoId].setAttribute('src', '/assets/imagens/board.png')
        alert('Errou, tente novamente')
      }
      cardsChosen = []
      cardsChosenId = []
      //mostrar placar
      resultView.textContent = 'O seu total de pares encontrados é: '+cardsWon.length
      if  (cardsWon.length === cards.length/2) {
        resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
      }
    }
  
    //virar as cartas
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cards[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cards[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })

 