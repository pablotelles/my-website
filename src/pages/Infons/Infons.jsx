import React from 'react'
import style from './style.module.scss'

export const Infos = () => {
  return (
    <section className={style.infos}>
        <div>
            <p>30 anos</p>
            <span>Idade</span>
        </div>
        <div>
            <p>São Paulo</p>
            <span>Cidade</span>
        </div>
        <div>
            <p>30 anos</p>
            <span>Idade</span>
        </div>
    </section>
  )
}
