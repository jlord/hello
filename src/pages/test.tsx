import React from 'react'
// import { BottomBar } from '../components/BottomBar'
// import { Introduction } from '../templates/Introduction'
import { Carousel } from '../components/Carousel'
import '../styles/global.scss'
import '../styles/test.scss'

export default function Page() {
  const musics = [
    {
      name: '01. Track 1',
      album: 'Test Album',
      link: '#track1',
      toRelease: false
    },
    {
      name: '02. Track 2',
      album: 'Test Album',
      link: '#track2',
      toRelease: false
    },
    {
      name: '03. Track 3',
      album: 'Test Album',
      link: '#track3',
      toRelease: true
    }
  ]
  return (
    <>
      <Carousel musics={musics} />
    </>
  )
}
