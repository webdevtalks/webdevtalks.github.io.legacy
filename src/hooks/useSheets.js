import { useCallback, useEffect, useState } from 'react'
import { getSheetsData } from '../services/sheets'

const useSheets = (query) => {
  const [value, setValue] = useState(null)

  const getLink = useCallback(() => {
    getSheetsData(query)
      .then(setValue)
      .catch(err => { throw new Error(err) })
  }, [query])

  useEffect(() => {
    getLink()
  }, [getLink])

  return { value }
}

export default useSheets