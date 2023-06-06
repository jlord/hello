import React, { HTMLProps } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { useLinks } from '../../utils/hooks/useLinks'
import { filterProps, setDefaultClasses } from '../../utils/props'
import { Button } from '../../components/Button'
import * as styles from './EntryText.module.scss'

type EntryTextProps = HTMLProps<HTMLDivElement>

export function EntryText(props: EntryTextProps) {
  const htmlProps = filterProps(props, [])
  setDefaultClasses(htmlProps, [styles.container])
  const { soundcloud, watchVideoButtonLink } = useLinks()
  return (
    <div {...htmlProps}>
      <h1>{"Funk Forward"}</h1>
      <p>
        Dive into the adrenaline-fueled world of GTO90 and his rival, Rival-X, as they phuse the realms of racing and electronic music with their 'Funk Forward' ethos.
      </p>
      <p>Take a look at our new album release</p>
      <div className={[styles.row, styles.buttons].join(' ')}>
        <Button fill href={watchVideoButtonLink} className={styles.watchVideo}>
          <div className={styles.watchVideoContent}>
            <p>Watch Video</p>
            <BsPlayCircle className={styles.icon} />
          </div>
        </Button>
        <Button href={soundcloud} target="_blank" className={styles.listenOnSouncloud}>
          Listen on Soundcloud
        </Button>
      </div>
    </div>
  )
}
