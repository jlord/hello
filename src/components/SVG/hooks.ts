import { useStaticQuery, graphql } from 'gatsby'

export type AvailableIcons =
  | 'boat'
  | 'logo-horizontal'
  | 'logo-vertical'
  | 'music-background'
  | 'page-background-scalable'
  | 'album-play-button'

type QueryReturnType = {
  allFile: {
    edges: {
      node: {
        name: string
        publicURL: string
      }
    }[]
  }
}

export function useSvgUrl(name: AvailableIcons) {
  const query = graphql`
    query MyQuery {
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `
  const data: QueryReturnType = useStaticQuery(query)
  return data.allFile.edges.find((edge) => edge.node.name === name)?.node
    .publicURL as string
}
