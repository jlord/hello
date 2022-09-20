import React, { HTMLProps } from 'react'
import { SVG } from '../../components/SVG'
import { FollowMe } from '../../components/FollowMe'
import { EntryText } from '../../components/EntryText'
import { filterProps, setDefaultClasses } from '../../utils/props'
import * as styles from './Introduction.module.scss'

type IntroductionProps = HTMLProps<HTMLDivElement>
export function Introduction(props: IntroductionProps) {
  const htmlProps = filterProps(props, [])
  setDefaultClasses(htmlProps, [styles.container])
  return (
    <div {...htmlProps}>
      <SVG icon="logo-horizontal" className={styles.logo} colorize />
      <SVG icon="boat" className={styles.boat} />
      <EntryText className={styles.text} />
      <FollowMe className={styles.followMe} />
    </div>
  )
}
