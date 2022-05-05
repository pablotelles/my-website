import React from 'react'
import style from './style.module.scss'

export const Header = () => {
  return (
        <header className={style.header}>
            <h2 className={style.header__title}>{'</>'}</h2>
            <nav className={style.nav}>
                <ul className={style.nav__list}>
                    <li className={style.nav__item}>
                        <button autoFocus>Ínicio</button>
                    </li>
                    <li className={style.nav__item}>
                        <button>Sobre</button>
                    </li>
                    <li className={style.nav__item}>
                        <button>Techs</button>
                    </li>
                    <li className={style.nav__item}>
                        <button>ìnicio</button>
                    </li>
                </ul>
            </nav>
            <button className={style.nav__button}>Entrar em contato</button>
        </header>
  )
}
