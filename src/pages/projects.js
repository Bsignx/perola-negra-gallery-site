import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia } from "../components"

const ProjectsPage = ({ data }) => {
  console.log(data)
  const {
    allAirtable: { nodes: projects },
  } = data

  return (
    <Wrapper>
      <Layout>
        <Projects title="Projetos" projects={projects} page />
        <Algolia />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: black;
    height: 10rem;
  }
`

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projects" } }) {
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

export default ProjectsPage
