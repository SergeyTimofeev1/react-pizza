import React from 'react'
import cl from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={cl.NotFoundBlock}>
      <h1>
        <span>😕</span>
        <br />
        <p>Данная страница не существует в нашем приложении</p>
      </h1>
    </div>
  )
}

export default NotFoundBlock
