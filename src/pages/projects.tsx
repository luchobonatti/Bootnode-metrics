import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import withHarvestClient from '@/src/components/hocs/withHarvestClient'
import { GET_ALL_PROJECTS } from '@/src/graphql/quieries/harvest/projects'
import useSWR from 'swr'

const Projects: NextPage = () => {
  const { data, error } = useSWR('harvest-projects', async () => {
    try {
      const req = await fetch('http://localhost:3000/api/harvest/projects')
      const res = await req.json()
      console.log(res)
      return res
    } catch (error) {
      console.log(error)
    }
  })

  console.log(data)
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Go here!</p>
    </>
  )
}

export default withHarvestClient(Projects)
