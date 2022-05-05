import React from 'react'
import style from './style.module.scss'
import reactIcon from '../../assets/iconesTechs/react.png'

export const Techs = () => {
  return (
        <section className={style.techs}>
            <h2 className={style.section__title}>{'<Techs />'}</h2>
            <ul className={style.__list}>
                <li className={style.__item}>
                    <img className={style.__image} src={reactIcon} alt="" />
                    <div className={style.__content}>
                        <h4 className={style.__title}>React</h4>
                        <p className={style.__description}> Some quick example text to build on the card
                            title and make up the bulk of the cards content.</p>
                    </div>
                </li>
                <li className={style.__item}>
                    <img className={style.__image} src={reactIcon} alt="" />
                    <div className={style.__content}>
                        <h4 className={style.__title}>React</h4>
                        <p className={style.__description}> Some quick example text to build on the card
                            title and make up the bulk of the cards content.</p>
                    </div>
                </li>
                <li className={style.__item}>
                    <img className={style.__image} src={reactIcon} alt="" />
                    <div className={style.__content}>
                        <h4 className={style.__title}>React</h4>
                        <p className={style.__description}> Some quick example text to build on the card
                            title and make up the bulk of the cards content.</p>
                    </div>
                </li>
                <li className={style.__item}>
                    <img className={style.__image} src={reactIcon} alt="" />
                    <div className={style.__content}>
                        <h4 className={style.__title}>React</h4>
                        <p className={style.__description}> Some quick example text to build on the card
                            title and make up the bulk of the cards content.</p>
                    </div>
                </li>
           </ul>
        </section>
  )
}
