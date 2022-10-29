import React from 'react'

import styles from "./ArtistCard.module.css"

const ArtistCard = ({name,imgUrl}) => {
  return (
    <div  className={`${styles.artist_card}`}>
      
      <img  className={`${styles.image}`} src={imgUrl} alt="" />
      <div  className={`${styles.artist_name}`} >
      {name}
      </div>

      <div  className={`${styles.artist_type}`} >
      Artiste
      </div>
    </div>
  )
}

export default ArtistCard