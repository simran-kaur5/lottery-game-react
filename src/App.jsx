import './App.css'
import Ticket from "./Ticket"
import Lottery from "./Lottery.jsx"
import {sum} from "./helper.js"

function App() {

  let winningCondition = (ticket) =>{
    return sum(ticket) === 15;
  }
  return (
    <>
        <div>
            <Lottery n={3} winningCondition={winningCondition}/>
        </div>
    </>
  )
}

export default App
