import { useState } from 'react'

export const Categories = ({ value, changeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li key={i} className={value === i ? 'active' : ''} onClick={() => changeCategory(i)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
