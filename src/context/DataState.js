import React from 'react'
import DataContext from './dataContext'


const DataState = (props) => {

    const state = {
        "name":"Harry"
    }
    return(
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataState;