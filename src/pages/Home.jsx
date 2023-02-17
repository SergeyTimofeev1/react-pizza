import { useState, useEffect } from 'react'
import { Categories } from '../compnents/Categories'
import { Sort } from '../compnents/Sort'
import PizzaBlock from '../compnents/PizzaBlock/PizzaBlock'
import Skeleton from '../compnents/PizzaBlock/Skeleton'

const Home = () => {
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

  useEffect(() => {
    fetchPizzasData()
  }, [])

  return (
    <>
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
    </>
  )
}

export default Home
