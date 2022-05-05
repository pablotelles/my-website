import React from 'react'
import style from './style.module.scss'
import pablo from '../../assets/img/pablo.png'

export const MainBanner = () => {
  return (
        <section className={style.mainBanner}>
        <img className={style.mainBanner__image} src={pablo} alt="" />
            <div>
                <p className={style.mainBanner__welcome}>Bem vindo(a)</p>
                <h1 className={style.mainBanner__title}>{'<Pablo Teles />'}</h1>
                <p className={style.mainBanner__description}>Desenvolvedor Frontend</p>
                <span className={style.mainBanner__staks}> HTML | CSS | Javascript | React | ++ </span>
                <p className={style.mainBanner__aboult}>Apaixonado por series, filmes, animes, games, livros e conhecer pessoas diferentes, com interesses, hobbies e conhecimentos diversos - <strong>acredito que é no contanto com a diferença que aprendemos e evoluímos pessoalmente e profissionalmente.</strong></p>
            </div>
        </section>
  )
}
