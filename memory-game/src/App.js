import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'


const cardImages = [
  { "src": "/img/img1.png", matched: false },
  { "src": "/img/img2.png", matched: false },
  { "src": "/img/img3.png", matched: false },
  { "src": "/img/img4.png", matched: false },
  { "src": "/img/img5.png", matched: false },
  { "src": "/img/img6.png", matched: false }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disable, setDisable] = useState(false)
  // let puntaje

  //shufle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards)
    setTurns(0)
  }
  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)


  }

  //compare 2 selected card
  useEffect(() => {

    if (choiceOne && choiceTwo) {
      setDisable(true)
      if (choiceOne.src === choiceTwo.src) {
        
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
              
            } else {
              return card
            }
          })
        })
        resetTurn()
        // puntaje ++
      } else {

        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])
  console.log(cards)

  //reset choices & increse turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisable(false)
  }
  
  //start a new game automagically
  useEffect(() => {
    shuffleCards()
  },[])


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid' >
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disable={disable}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      {/* <p>Points: {puntaje}</p> */}


    </div>
  );
}

export default App