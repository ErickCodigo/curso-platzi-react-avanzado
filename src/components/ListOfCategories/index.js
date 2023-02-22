import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    fetch('https://petgram-server-erickhilario-erickcodigo.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowFixed(window.scrollY > 200)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export default ListOfCategories
