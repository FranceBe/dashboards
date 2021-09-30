// Custom hook to call an API using fetch and cache
// Cache handling could be improved if we want to get
// real-time information or if we want to get a "refresh" action
import { useEffect, useState } from 'react'

// Creating cache to avoid recalling api if data has already been fetched
const cache: Record<string, any> = {}

export const useFetch = <T,>(url: string): { data?: T | T[]; status: string } => {
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
            // In this scenario the backend api 'quizz-back'
            // respond with either a key "results" and an array (/devices)
            // or with an object with no "result" key (/device/id)
            // In order to get data correctly, we check if
            // the key "results" exists before saving the data we want
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
