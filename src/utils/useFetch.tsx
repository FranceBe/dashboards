// Custom hook to call an API using fetch and cache
// Cache handling coule be improved if we wanted to get
// real-time information or if we want to get a "refresh" action
import { useEffect, useState } from 'react'

// Creating cache to avoid recall api if data has already been fetch
const cache: Record<string, any> = {}

export const useFetch = <T,>(url: string): { data: T | T[] | undefined; status: string } => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState()

  useEffect(() => {
    let shouldUpdateState = true
    if (!url) return
    setStatus('fetching')
    if (cache[url]) {
      // if cache is filled, do not call fetch
      // use cache to fill the data state
      const data = cache[url]
      setData(data)
      setStatus('fetched')
    } else {
      // if cache is not filled
      // call fetch to get the desired data
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (shouldUpdateState) {
            cache[url] = data.results ? data.results : data
            setData(data.results ? data.results : data)
          }
        })
        .catch((err) => {
          throw Error(err)
        })
      setStatus('fetched')
    }
    return () => {
      shouldUpdateState = false
    }
  }, [url])
  return { data, status }
}
