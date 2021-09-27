import { useEffect, useState } from 'react'

const cache: Record<string, any> = {}

export const useFetch = <T,>(url: string): { data: T[]; status: string } => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState([])

  useEffect(() => {
    let shouldUpdateState = true
    if (!url) return
    setStatus('fetching')
    if (cache[url]) {
      const data = cache[url]
      setData(data)
      setStatus('fetched')
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (shouldUpdateState) {
            cache[url] = data.results
            setData(data.results)
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
