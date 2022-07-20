import type { NextPage } from 'next'

import useSWR from 'swr'

import APIFetcher from '@/src/utils/utils'

const Projects: NextPage = () => {
  const { data, error } = useSWR('/api/harvest/projects', APIFetcher)
  const { data: times, error: timesError } = useSWR('/api/harvest/time_entries', APIFetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data, times)
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Go here!</p>
    </>
  )
}

export default Projects
