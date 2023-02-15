import logo from './logo.svg'
import './App.css'
import './scss/app.scss'
import { Header } from './compnents/Header'
import { Categories } from './compnents/Categories'
import { Sort } from './compnents/Sort'
import PizzaBlock from './compnents/PizzaBlock'

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
