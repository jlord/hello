import React, { type HTMLProps } from 'react'
import { setDefaultClasses, filterProps } from '../../utils/props'
import { SVG } from '../SVG'
import { FollowMe } from '../FollowMe'

import Logo from '../../images/logo-horizontal.svg'
import * as styles from './BottomBar.module.scss'

type BottomBarProps = HTMLProps<HTMLDivElement>
export function BottomBar(props: BottomBarProps) {
  const htmlProps = filterProps(props, ['children'])
  setDefaultClasses(htmlProps, [styles.container])
  return (
    <div {...htmlProps}>
      <div className={styles.internalGrid}>
        <SVG icon={Logo} className={styles.logo} />
        <div>All rights reserved &copy; {(new Date()).getUTCFullYear()}</div>
        <FollowMe light />
      </div>
    </div>
  )
}
