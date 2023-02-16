import './App.css'
import './scss/app.scss'
import { useState, useEffect } from 'react'
import { Header } from './compnents/Header'
import { Categories } from './compnents/Categories'
import { Sort } from './compnents/Sort'
import PizzaBlock from './compnents/PizzaBlock/PizzaBlock'
import Skeleton from './compnents/PizzaBlock/Skeleton'

function App() {
  const [piazzasData, setPiazzasData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPizzasData = () => {
    fetch('https://63ee8c5a388920150de18b3f.mockapi.io/pizzas')
      .then(response => response.json())
      .then(json => {
        setPiazzasData(json)
        setIsLoading(false)
      })
  }
  console.log(isLoading)

  useEffect(() => {
    fetchPizzasData()
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
              : piazzasData.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
