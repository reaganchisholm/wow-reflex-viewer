// src/data-context.js
import * as React from 'react'

const DataStateContext = React.createContext()
const DataDispatchContext = React.createContext()

function dataReducer(state, action) {
  switch (action.type) {
    case 'init': {
        return { 
          loaded: true,
          data: action.payload 
        }
    }
    case 'rating': {
        return { ratingChange: action.payload }
    }
    case 'destroy': {
        return { 
          loaded: false,
          data: null
        }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function DataProvider({children}) {
  const [state, dispatch] = React.useReducer(dataReducer, {})
  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  )
}

function useDataState() {
  const context = React.useContext(DataStateContext)
  if (context === undefined) {
    throw new Error('useDataState must be used within a DataProvider')
  }
  return context
}

function useDataDispatch() {
  const context = React.useContext(DataDispatchContext)
  if (context === undefined) {
    throw new Error('useDataDispatch must be used within a DataProvider')
  }
  return context
}

export {DataProvider, useDataState, useDataDispatch}