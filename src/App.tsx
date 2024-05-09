import { useState } from "react"
import words from "./data/wordList.json"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"
import HangmanDraw from "./components/HangmanDraw"


function App() {
  const [wordToGuess, setWordToreturnGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return (
    <div className=" flex flex-col max-w-[800px] gap-4 mx-auto my-0 align-items-center">
      <div className="font-xl text-center">
        Lose
        Win 
      </div>
      <HangmanDraw />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
