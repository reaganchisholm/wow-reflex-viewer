import React from 'react';
import Papa from 'papaparse';
import { orderBy } from 'lodash' 
import { useDataDispatch } from './../data-context';

import dummyData from './../dummy-data.csv';

export const DemoData = ({ setIsLoaded }) => {
  const dispatch = useDataDispatch();

  React.useEffect(() => {
    async function getData() {
        const response = await fetch(dummyData)
        const reader = response.body.getReader()
        const result = await reader.read() // raw array
        const decoder = new TextDecoder('utf-8')
        const csv = decoder.decode(result.value) // the csv text
        const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
        const rows = orderBy(results.data, 'Timestamp') // array of objects
        dispatch({type: 'init', payload: rows})
        setIsLoaded(true);
    }
    getData()
  }, [setIsLoaded, dispatch]) // [] means just do this once, after initial render

  return (
      <></>
  )
}

export default DemoData;