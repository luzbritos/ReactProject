import { useEffect, useState } from "react"

const width = 8
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const crateBoard = () => {
    const randomColorArrangement=[]
    for(let i=0; i< width*width; i++){
      // const randomNumberFrom0to5
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement)
    // console.log(randomColorArrangement)
  }
  useEffect(() => {
    crateBoard()
  }, [])

 console.log(currentColorArrangement)

  return (
    <div>

    </div>
  );
}

export default App;
