import { useState, useEffect } from 'react'
import { Categories } from '../compnents/Categories'
import { Sort } from '../compnents/Sort'
import PizzaBlock from '../compnents/PizzaBlock/PizzaBlock'
import Skeleton from '../compnents/PizzaBlock/Skeleton'

const Home = () => {
  const [piazzasData, setPiazzasData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  //  sort
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeSortValue, setActiveSortValue] = useState({
    name: 'популярности',
    sortProperty: 'rating'
  })

  const changeCategory = index => setActiveCategory(index)
  const changeSortType = index => setActiveSortValue(index)

  const fetchPizzasData = () => {
    setIsLoading(true)
    fetch(
      `
        https://63ee8c5a388920150de18b3f.mockapi.io/pizzas?${
          activeCategory > 0 ? `category=${activeCategory}` : ''
        }&sortBy=${activeSortValue.sortProperty}&order=desc
      `
    )
      .then(response => response.json())
      .then(json => {
        setPiazzasData(json)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    fetchPizzasData()
  }, [activeCategory, activeSortValue])

  return (
    <>
      <div className="content__top">
        <Categories value={activeCategory} changeCategory={changeCategory} />
        <Sort value={activeSortValue} changeSortType={changeSortType} />
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
