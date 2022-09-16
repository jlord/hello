import React, { type HTMLProps } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { setDefaultClasses, filterProps } from '../../utils/props'

import * as styles from './Player.module.scss'

const getEmbedQuery = graphql`
  query GetEmbed {
    dataJson {
      mixcloud_embed
    }
  }
`

type GetEmbedQueryReturn = {
  dataJson: {
    mixcloud_embed: string
  }
}

const Embeded = () => {
  const mixcloud: GetEmbedQueryReturn = useStaticQuery(getEmbedQuery)
  return (
    <iframe
      width="100%"
      height="120"
      src={mixcloud.dataJson.mixcloud_embed}
      frameBorder="0"
    ></iframe>
  )
}

type PlayerProps = HTMLProps<HTMLDivElement>
export function Player(props: PlayerProps) {
  const htmlProps = filterProps(props, [])
  setDefaultClasses(htmlProps, [styles.container])

  return (
    <div {...htmlProps}>
      <div className={styles.internalGrid}>
        <h2 className={styles.title}>Listen to my new mix</h2>
        <div className={styles.embeded}>
          <Embeded />
        </div>
      </div>
    </div>
  )
}
