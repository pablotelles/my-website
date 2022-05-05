import React from 'react'
import { Header } from '../components/Header/Header'
import { Infos } from './Infons/Infons'
import { MainBanner } from './MainBanner/MainBanner'
import { Techs } from './Techs/Techs'

export const Home = () => {
  return (
        <>
            <Header />
            <MainBanner />
            <Infos />
            <Techs />
        </>
  )
}
