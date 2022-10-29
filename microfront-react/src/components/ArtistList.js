import React from 'react'
import ArtistCrad from './ArtistCard'
import styles from "./ArtistList.module.css"

const ArtistList = () => {
  return (
    <div className={`${styles.artist_list}`} >
    
        <ArtistCrad name="labess"  imgUrl={"https://i.scdn.co/image/ab6761610000e5eb42b179ca0c882e954934c902"} />
        <ArtistCrad name="soolking"  imgUrl={"https://i.scdn.co/image/ab67616d0000b273ef506280e70e4dbba1c94bc9"} />
         <ArtistCrad name="ed sheran"  imgUrl={"https://i.scdn.co/image/ab6761610000e5eb866ff469c499d32466c33182"} />
         <ArtistCrad name="ed sheran"  imgUrl={"https://i.scdn.co/image/ab6761610000e5eb866ff469c499d32466c33182"} />
         <ArtistCrad name="ed sheran"  imgUrl={"https://i.scdn.co/image/ab6761610000e5eb866ff469c499d32466c33182"} />
         <ArtistCrad name="ed sheran"  imgUrl={"https://i.scdn.co/image/ab6761610000e5eb866ff469c499d32466c33182"} />
         <ArtistCrad name="ed sheran"  imgUrl={"https://i.scdn.co/image/ab6761610000e5eb866ff469c499d32466c33182"} />
    </div>
  )
}

export default ArtistList