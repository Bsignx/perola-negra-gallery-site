import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({data}) => {

  const {allAirtable: {nodes: projects}} = data

  return (
    <Layout>
      <Hero projects={projects} />
      <About />
      <Projects projects={projects} title="últimos projetos" />
      <Survey />
      <Slider />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date }
    ) {
      nodes {
        data {
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          date
          type
          name
        }
        id
      }
    }
  }
`

export default HomePage
