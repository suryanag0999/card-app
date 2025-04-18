import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [cards, setCards] = useState([]);

const fetchData = async ()=>{
  let a = await fetch("https://jsonplaceholder.typicode.com/posts")
  let data = await a.json()
  setCards(data)
  console.log(data)
}

useEffect(() => {
  fetchData();
}, [])


  return (
    <>
      <div className="container">
  {cards.map((card) => {
    return (
      <div key={card.id} className="card">
        <h1>{card.title}</h1>
        <p>{card.body}</p>
        <span>by: userId: {card.userId}</span>
      </div>
    );
  })}
</div>
    </>
  )
}

export default App
