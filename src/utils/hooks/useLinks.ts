import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Links {
    dataJson {
      instagram
      soundcloud
    }
  }
`

type Links = {
  dataJson: {
    instagram: string
    soundcloud: string
  }
}

export function useLinks() {
  const data: Links = useStaticQuery(query)
  return data.dataJson
}
