import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import fetch from 'jest-fetch-mock'
import { useFetch } from 'utils/useFetch'

describe('useFetch', () => {
  beforeEach(() => {
    fetch.enableMocks()
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
          { id: '1', name: 'name1' },
          { id: '2', name: 'name2' },
        ],
      }),
    )
  })

  it('should call fetch only when cache is empty', async () => {
    const { result } = renderHook(() => useFetch('/'))

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith('/')
      expect(result.current.data).toEqual([
        { id: '1', name: 'name1' },
        { id: '2', name: 'name2' },
      ])
      expect(result.current.status).toBe('fetched')
    })

    // Call hook another time to check that fetch is not called again
    renderHook(() => useFetch('/'))

    await waitFor(() => {
      // fetch is called once, corresponding to the 1st time useFetch has been called
      // but is not called another time when useFetch is called again
      // because cache has been set
      expect(fetch).toHaveBeenCalledTimes(1)
    })
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
