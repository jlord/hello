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
        Plunge headfirst into the heart-pounding saga of GTO90 and Rival-X, intertwining high-octane racing and pulsating electronic music, all powered by the enigmatic 'Funk Forward' movement. Intrigue, rivalry, and rhythmic revolutions await.
      </p>
      <p>Coming Soon!</p>
      <div className={[styles.row, styles.buttons].join(' ')}>
        <Button fill href={watchVideoButtonLink} className={styles.watchVideo}>
          <div className={styles.watchVideoContent}>
            <p>Watch Video</p>
            <BsPlayCircle className={styles.icon} />
          </div>
        </Button>
        <Button href={soundcloud} target="_blank" className={styles.listenOnSouncloud}>
          Listen on SoundCloud
        </Button>
      </div>
    </div>
  )
}
