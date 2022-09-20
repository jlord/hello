import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query QueryImages {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              srcWebp
            }
          }
        }
      }
    }
  }
`

type QueryReturnType = {
  allFile: {
    edges: {
      node: {
        name: string
        childImageSharp: null | {
          fluid: {
            srcWebp: string
          }
        }
      }
    }[]
  }
}

type AvailableImages =
  | 'animation-background'
  | 'page-background'
  | 'album-cover'

export function useImage(image: AvailableImages) {
  const data: QueryReturnType = useStaticQuery(query)
  const edge = data.allFile.edges.find((edge) => edge.node.name === image)
  const link = edge?.node?.childImageSharp?.fluid?.srcWebp

  return link
}

export function useBackgroundImage(link: string) {
  return {
    backgroundImage: `url("${link}")`
  }
}
