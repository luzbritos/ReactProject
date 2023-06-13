import { useState } from 'react'
import './App.css'


const carImages = [
  { "src": "/img/herlmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shufle cards
  const shuffleCards = () => {
    const shuffleCards = [...carImages, ...carImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))
    setCards(shuffleCards)
    setTurns(0)
  }
  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App