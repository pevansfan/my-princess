import React from 'react'
import PageComponent from '../../components/PageComponent/PageComponent'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'
import './Music.css'

const Music = () => {
  return (
    <PageComponent className="music-page" title="Les sons qui me font penser à toi 🎵">
      <MusicPlayer />
    </PageComponent>
  )
}

export default Music
