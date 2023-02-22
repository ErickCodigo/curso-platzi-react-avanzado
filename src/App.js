import React from 'react'
import ListOfCategories from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import ListOfPhotoCards from './components/ListOfPhotoCards'
import Logo from './components/Logo'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <MainContent>
        <ListOfCategories />
        <ListOfPhotoCards />
      </MainContent>
    </div>
  )
}

export default App
