import React from 'react'
import PhotoCard from '../PhotoCard'

const ListOfPhotoCards = () => {
  return (
    <ul>
      {(new Array(6)).fill('').map((_, index) => <PhotoCard key={index} />)}
    </ul>
  )
}

export default ListOfPhotoCards
