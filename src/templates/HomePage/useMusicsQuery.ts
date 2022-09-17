import { graphql, useStaticQuery } from 'gatsby'

import { type Music } from '../../components/Carousel/types'

const query = graphql`
  query Musics {
    dataJson {
      musics {
        name
        album
        link
        video
        toRelease
      }
    }
  }
`

type QueryReturnType = {
  dataJson: {
    musics: Music[]
  }
}

export function useMusicsQuery() {
  const data: QueryReturnType = useStaticQuery(query)
  return data.dataJson.musics
}
