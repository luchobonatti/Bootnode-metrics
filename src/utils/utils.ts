import Fetcher, { FetchError } from 'swr-fetcher'

const APIFetcher = (...args: any[]) => {
  const fetcher = new Fetcher({ baseURL: location.origin })

  return fetcher.get.bind(fetcher)(args[0])
}

export default APIFetcher
