import { useState } from 'react'

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={activeCategory === i ? 'active' : ''}
            onClick={() => setActiveCategory(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
