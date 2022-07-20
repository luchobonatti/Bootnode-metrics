import { gql } from '@apollo/client'

export interface HarvestProject {
  id: number
  name: string
}

export interface HarvestProjects {
  projects: HarvestProject[]
}

export const GET_ALL_PROJECTS = gql`
  query projectsQuery {
    projects @rest(type: "ProjectsPayload", path: "projects") {
      projects {
        id
        name
      }
    }
  }
`
