import React from 'react'
import { EntryText } from '../components/EntryText'
import { SVG } from '../components/SVG'
import Boat from '../images/boat.svg'
import '../styles/global.scss'

export default function Page() {
  return (
    <>
      <EntryText />
      <SVG icon={Boat} />
    </>
  )
}
